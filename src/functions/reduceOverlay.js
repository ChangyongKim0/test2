import axios from "axios";
import { _default, _center } from "../util/alias";
import { col_primary } from "../util/style";

const convertGeoData = (map, data) => {
  let path = [];
  let lats = [];
  let lngs = [];
  let data_list = data.land_char_WFS["gml:posList"].split(" ");
  //   console.log(data_list);
  for (let i = 0; i < data_list.length; ) {
    let lat = parseFloat(data_list[i]);
    let lng = parseFloat(data_list[i + 1]);
    path.push(new window.kakao.maps.LatLng(lng, lat));
    lats.push(lat);
    lngs.push(lng);
    i += 2;
  }
  let center_value = _center(lats, lngs);
  let center = new window.kakao.maps.LatLng(center_value.y, center_value.x);
  let polygon = new window.kakao.maps.Polygon({
    map: map, // 다각형을 표시할 지도 객체
    path: path,
    strokeWeight: 0,
    fillColor: "#fff",
    fillOpacity: 0.001,
  });
  handlePolygon({ type: "create", polygon: polygon });
  return {
    id: data.pnu,
    addr: "address needed",
    price: data.land_price["NSDI:PBLNTF_PCLND"],
    polygon: polygon,
    center: center,
  };
};

// const upgradeGeoData = (map, data) => {

//   polygon.setMap(map);
//   return polygon;
// };
// console.log(options);

const reduceOverlay = (state, action) => {
  const returnOverlay = (options) => {
    options = _default(options, {
      map: state.map,
      getMapState: state.getMapState,
      show: false,
      data: [],
      data_pushed: [],
      need_to_remove: false,
      data_removed: [],
      is_clicked: false,
      clicked_data: { id: -1, polygon: -1 },
      clicked_data_before: { id: -1, polygon: -1 },
      map_base_state: { level: 2, lat: 0, lng: 0 },
    });
    return {
      map: options.map,
      getMapState: options.getMapState,
      show: options.show,
      data: options.data,
      data_pushed: options.data_pushed,
      need_to_remove: options.need_to_remove,
      data_removed: options.data_removed,
      is_clicked: options.is_clicked,
      clicked_data: options.clicked_data,
      clicked_data_before: options.clicked_data_before,
      map_base_state: options.map_base_state,
    };
  };

  let new_state = {};
  switch (action.type) {
    case "create":
      new_state = returnOverlay({
        map: action.map,
        getMapState: action.getMapState,
      });
      console.log("created overlays:");
      console.log(new_state);
      return new_state;
    case "update":
      let new_data_pushed = [];
      let new_data = state.data;
      if (state.data.length === 0) {
        new_data_pushed = action.data;
        new_data = action.data;
      }
      new_state = returnOverlay({
        show: true,
        data: new_data,
        data_pushed: new_data_pushed,
        is_clicked: state.is_clicked,
        clicked_data: state.clicked_data,
        clicked_data_before: state.clicked_data_before,
        map_base_state: state.getMapState(),
      });
      console.log("updated overlays:");
      console.log(new_state);
      return new_state;
    case "click":
      let new_clicked_data = undefined;
      let is_clicked_new = undefined;
      if (state.clicked_data.id !== action.clicked_data.id) {
        new_clicked_data = action.clicked_data;
        is_clicked_new = true;
      }
      new_state = returnOverlay({
        show: true,
        data: state.data,
        is_clicked: is_clicked_new,
        clicked_data: new_clicked_data,
        clicked_data_before: state.clicked_data,
        map_base_state: state.map_base_state,
      });
      console.log("clicked an overlay:");
      console.log(new_state);
      return new_state;
    case "remove start":
      if (state.show === false) {
        return state;
      } else {
        new_state = returnOverlay({
          show: true,
          data: state.data,
          is_clicked: state.is_clicked,
          clicked_data: state.clicked_data,
          clicked_data_before: state.clicked_data_before,
          map_base_state: state.getMapState(),
          need_to_remove: true,
          data_removed: state.data,
        });
        console.log("remove overlays start:");
        console.log(new_state);
        return new_state;
      }
    case "remove end":
      if (state.show === false) {
        return state;
      } else {
        new_state = returnOverlay({
          map_base_state: state.map_base_state,
          data_removed: state.data_removed,
        });
        console.log("removed overlays:");
        console.log(new_state);
        return new_state;
      }
    default:
  }
};

const getOverlayData = async (map) => {
  let bounds = map.getBounds();
  var min_lat = bounds.getSouthWest().getLat();
  var min_lng = bounds.getSouthWest().getLng();
  var max_lat = bounds.getNorthEast().getLat();
  var max_lng = bounds.getNorthEast().getLng();
  console.log("request new overlay data.");
  let response = [];
  const min_lat_code = Math.floor(min_lat * 400);
  const min_lng_code = Math.floor(min_lng * 400);
  const max_lat_code = Math.floor(max_lat * 400);
  const max_lng_code = Math.floor(max_lng * 400);

  // console.log(data_list);
  let new_data = [];
  let lat_code, lng_code;
  for (
    lng_code = min_lng_code * 1 - 1;
    lng_code <= max_lng_code * 1;
    lng_code++
  ) {
    for (
      lat_code = min_lat_code * 1 - 1;
      lat_code <= max_lat_code * 1;
      lat_code++
    ) {
      try {
        response = await axios.get(
          "https://raw.githubusercontent.com/ChangyongKim0/background_algorithms/master/data/land_data/dist/" +
            lng_code +
            "/" +
            lat_code +
            ".json"
        );
      } catch (err) {
        if (err.response && err.response.status === 404) {
          console.log("exist non-data area.");
          response = { data: [] };
        } else {
          console.log("unexpected error occured");
          response = { data: [] };
        }
      }
      let data_list = response.data;
      for (let i = 0; i < data_list.length; i++) {
        let data = convertGeoData(map, data_list[i]);
        new_data.push(data);
      }
    }
  }

  // console.log(new_data);
  console.log("get new overlay data.");
  return new_data;
};

const handlePolygon = (action) => {
  switch (action.type) {
    case "create":
      action.polygon.setOptions({ fillColor: col_primary });
      break;
    case "hide":
      action.polygon.setOptions({ fillOpacity: 0.001 });
      break;
    case "opaque":
      action.polygon.setOptions({ fillOpacity: 0.1 });
      break;
    case "show":
      action.polygon.setOptions({ fillOpacity: 0.5 });
      break;
    default:
  }
};

export { reduceOverlay, getOverlayData, handlePolygon };
