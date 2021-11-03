import axios from "axios";
import { _default, _center } from "../util/alias";
import { col_secondary } from "../util/style";

const convertGeoData = (map, data) => {
  let path = [];
  let lats = [];
  let lngs = [];
  let data_list = data.LND_SHAPE.split(" ");
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
  let result_data = {
    id: data.id,
    price: -1,
    price_per_area: -1,
    tr_date: "",
    polygon: polygon,
    center: center,
  };
  if (data.transaction_list && data.transaction_list.length != 0) {
    const sorted_data = data.transaction_list.sort(
      (a, b) => parseInt(a.id) - parseInt(b.id)
    );
    result_data.price = parseInt(sorted_data[0].NRG_DL_AM.replace(",", ""));
    result_data.price_per_area =
      parseInt(sorted_data[0].NRG_DL_AM) / parseFloat(sorted_data[0].NRG_AR);
    result_data.tr_date = sorted_data[0].id;
  }
  return result_data;
};

const getPosCenter = (pos_list) => {
  let lats = [];
  let lngs = [];
  let data_list = pos_list.split(" ");
  //   console.log(data_list);
  for (let i = 0; i < data_list.length; ) {
    let lat = parseFloat(data_list[i]);
    let lng = parseFloat(data_list[i + 1]);
    lats.push(lat);
    lngs.push(lng);
    i += 2;
  }
  let center_value = _center(lats, lngs);
  let center = new window.kakao.maps.LatLng(center_value.y, center_value.x);
  return center;
};

const convertPosList = (map, pos_list) => {
  let path = [];
  let data_list = pos_list.split(" ");
  //   console.log(data_list);
  for (let i = 0; i < data_list.length; ) {
    let lat = parseFloat(data_list[i]);
    let lng = parseFloat(data_list[i + 1]);
    path.push(new window.kakao.maps.LatLng(lng, lat));
    i += 2;
  }
  let polygon = new window.kakao.maps.Polygon({
    map: map, // 다각형을 표시할 지도 객체
    path: path,
    strokeWeight: 0,
    fillColor: "#fff",
    fillOpacity: 0.001,
  });
  handlePolygon({ type: "create", polygon: polygon });
  return polygon;
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
  const map_data = await axios.put("/api/mapInfo", {
    min_lat: min_lat,
    min_lng: min_lng,
    max_lat: max_lat,
    max_lng: max_lng,
  });
  console.log(map_data);
  let new_data = [];
  map_data.data.map((e) => {
    new_data.push(convertGeoData(map, e));
  });
  console.log("get new overlay data.");
  return new_data;
};

const handlePolygon = (action) => {
  switch (action.type) {
    case "create":
      action.polygon.setOptions({ fillColor: col_secondary });
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

export {
  getPosCenter,
  reduceOverlay,
  getOverlayData,
  handlePolygon,
  convertPosList,
};
