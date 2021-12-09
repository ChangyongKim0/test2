import React, {
  // useContext,
  useEffect,
  // useLayoutEffect,
  useReducer,
  useState,
} from "react";
import {
  reduceOverlay,
  getOverlayData,
  handlePolygon,
} from "../functions/reduceOverlay";
import axios from "axios";

import useBldgInfoData from "../hooks/useBldgInfoData";

import InfoBubble from "./InfoBubble";
import styles from "./BackgroundMap.module.scss";
import classNames from "classnames/bind";
import { setCookie } from "../hooks/useCookieData";
import { formatData, formatUnit } from "../hooks/useFormatter";
import useUnitType from "../hooks/useUnitType";
import useToggleState from "../hooks/useToggle";
import useCookieData from "../hooks/useCookieData";
import useOverlayReloader from "../hooks/useOverlayReloader";

const cx = classNames.bind(styles);

let map;
let event_handlers_for_kakao = {};
let info_bubbles = {};
let polygons = {};

const getMapState = () => {
  let level = map.getLevel();
  let lat = map.getCenter().getLat();
  let lng = map.getCenter().getLng();
  return { level: level, lat: lat, lng: lng };
};

const checkFarMove = (state, map_state, thres_lat, thres_lng) => {
  let lat_moves = state.map_base_state.lat - map_state.lat;
  let lng_moves = state.map_base_state.lng - map_state.lng;
  console.log(lat_moves, lng_moves);
  return Math.abs(lat_moves) > thres_lat || Math.abs(lng_moves) > thres_lng;
};

const BackgroundMap = ({
  handleBldgInfo,
  handleAddress,
  is_clicked,
  setIsClicked,
}) => {
  let [overlay, handleOverlay] = useReducer(reduceOverlay, {
    show: false,
    data: [],
    data_pushed: [],
    data_removed: [],
    is_clicked: false,
    clicked_data: { id: -1, polygon: -1 },
    clicked_data_before: { id: -1, polygon: -1 },
    map_base_state: { level: 2, lat: 0, lng: 0 },
  });

  const [need_update_overlay, setNeedUpdateOverlay] = useState(false);
  const [bldg_info_data, handleBldgInfoData] = useBldgInfoData();
  const [overlay_reloader, handleOverlayReloader] = useOverlayReloader();

  const handleKakaoListener = ({ type, id, object, mouse_event, handler }) => {
    switch (type) {
      case "create":
        var onEvent = function event() {
          handler();
        };
        if (event_handlers_for_kakao[id] === undefined) {
          event_handlers_for_kakao[id] = {};
        }
        event_handlers_for_kakao[id][mouse_event] = onEvent;
        window.kakao.maps.event.addListener(
          object,
          mouse_event,
          event_handlers_for_kakao[id][mouse_event]
        );
        // console.log(event_handlers_for_kakao);
        break;
      case "remove":
        window.kakao.maps.event.removeListener(
          object,
          mouse_event,
          event_handlers_for_kakao[id][mouse_event]
        );
        delete event_handlers_for_kakao[id][mouse_event];
        // console.log(event_handlers_for_kakao);
        break;
      default:
    }
  };

  useEffect(() => {
    let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      // //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(
        bldg_info_data.lat,
        bldg_info_data.lng
      ), //지도의 중심좌표.
      level: bldg_info_data.level, //지도의 레벨(확대, 축소 정도)
    };
    map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    var zoomControl = new window.kakao.maps.ZoomControl();
    map.addControl(zoomControl, window.kakao.maps.ControlPosition.BOTTOMRIGHT);

    handleOverlay({ type: "create", map: map, getMapState: getMapState });
    getOverlayData(map).then((data) => {
      handleOverlayReloader({ type: "update data", data: data });
      handleOverlay({ type: "update", data: data });
    });
    // window.kakao.maps.event.addListener(map, "click", onClick);
    window.kakao.maps.event.addListener(map, "bounds_changed", onCenterChanged);
    window.kakao.maps.event.addListener(map, "idle", () =>
      setTimeout(() => setUnitUpdate("update"), 1000)
    );
    pushAddress(getMapState(), handleAddress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("move data updated.");
    map.setCenter(
      new window.kakao.maps.LatLng(bldg_info_data.lat, bldg_info_data.lng)
    );
  }, [bldg_info_data.move_toggle]);

  useEffect(() => {
    let bounds = map.getBounds();
    var min_lat = bounds.getSouthWest().getLat();
    var min_lng = bounds.getSouthWest().getLng();
    var max_lat = bounds.getNorthEast().getLat();
    var max_lng = bounds.getNorthEast().getLng();
    console.log("bounds: ", max_lat - min_lat, max_lng - min_lng);
    if (
      need_update_overlay &&
      (checkFarMove(overlay, getMapState(), 0.002, 0.004) ||
        overlay.show == false)
    ) {
      setTimeout(
        () =>
          getOverlayData(map).then((data) => {
            handleOverlayReloader({ type: "update data", data: data });
            handleOverlay({ type: "update", data: data });
          }),
        50
      );
    } else {
      setNeedUpdateOverlay(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [need_update_overlay]);

  const onCenterChanged = (event) => {
    // console.log("center changed.");
    let level = map.getLevel();
    pushAddress(getMapState(), handleAddress);
    if (level <= 3) {
      setNeedUpdateOverlay(true);
    } else {
      console.log("remove all overlays");
      handleOverlay({ type: "remove all" });
      setNeedUpdateOverlay(false);
    }
  };

  useEffect(() => {
    if (overlay_reloader.is_activated) {
      handleOverlay({ type: "remove all" });
      setTimeout(
        () => handleOverlay({ type: "update", data: overlay_reloader.data }),
        10
      );
      handleOverlayReloader({ type: "deactivate" });
    }
  }, [overlay_reloader]);

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    overlay.data_pushed.map((each) => {
      if (each.price != -1) {
        const content = document.getElementById(each.id);
        const position = each.center;
        const customOverlay = new window.kakao.maps.CustomOverlay({
          position: position,
          content: content,
          xAnchor: 0.5,
          yAnchor: 1.0,
          clickable: false,
        });
        info_bubbles[each.id] = customOverlay;
        // info_bubbles[each.id].setMap(map);
        setTimeout(() => info_bubbles[each.id].setMap(map), 0);
      }
      polygons[each.id] = each.polygon;
      polygons[each.id].setMap(map);
      // polygons[each.id].setMap(null);

      // setTimeout(() => each.polygon.setMap(map), 0);
    });
  }, [overlay.data_pushed]);

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    overlay.data_pushed.map((each) => {
      handleKakaoListener({
        type: "create",
        id: each.id,
        object: polygons[each.id],
        mouse_event: "mouseover",
        handler: () =>
          handlePolygon({ type: "opaque", polygon: polygons[each.id] }),
      });
      handleKakaoListener({
        type: "create",
        id: each.id,
        object: polygons[each.id],
        mouse_event: "mouseout",
        handler: () =>
          handlePolygon({ type: "hide", polygon: polygons[each.id] }),
      });
      handleKakaoListener({
        type: "create",
        id: each.id,
        object: polygons[each.id],
        mouse_event: "click",
        handler: () => {
          handleOverlay({ type: "click", clicked_data: each });
          handlePolygon({
            type: "show",
            polygon: polygons[each.id],
          });
        },
      });
    });
    console.log("update polygons:");
    console.log(overlay.data_pushed);
    // console.log(info_bubbles);
    setNeedUpdateOverlay(false);
    // console.log(overlay);
  }, [overlay.data_pushed]);

  useEffect(() => {
    if (is_clicked && overlay.clicked_data.id != -1) {
      handlePolygon({ type: "hide", polygon: overlay.clicked_data.polygon });
      handleOverlay({ type: "click", clicked_data: overlay.clicked_data });
      setIsClicked(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [is_clicked]);

  useEffect(() => {
    // console.log("time to remove?");
    if (overlay.need_to_remove) {
      // console.log(overlay);
      // console.log("time to remove");
      // eslint-disable-next-line array-callback-return
      overlay.data_to_remove.map((each) => {
        handleKakaoListener({
          type: "remove",
          id: each.id,
          object: polygons[each.id],
          mouse_event: "mouseover",
        });
        handleKakaoListener({
          type: "remove",
          id: each.id,
          object: polygons[each.id],
          mouse_event: "mouseout",
        });
        handleKakaoListener({
          type: "remove",
          id: each.id,
          object: polygons[each.id],
          mouse_event: "click",
        });
        polygons[each.id].setMap(null);
        // console.log(polygons);
        // console.log(each.id, polygons[each.id]);
        // delete polygons[each.id];
        if (each.price != -1) {
          info_bubbles[each.id].setMap(null);
          // delete info_bubbles[each.id];
        }
      });
      console.log(
        "DATA LENGHT: info_bubbles: " +
          Object.keys(info_bubbles).length +
          "; polygons: " +
          Object.keys(polygons).length
      );
      handleOverlay({ type: "remove end" });
    }
    // console.log(info_bubbles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [overlay.need_to_remove]);

  useEffect(() => {
    if (overlay.clicked_data.id !== -1) {
      console.log("polygon clicked: " + overlay.clicked_data.id);
      let new_id = overlay.clicked_data.id;
      let new_polygon = overlay.clicked_data.polygon;
      setTimeout(() => {
        axios
          .put("/api/bldgInfo", {
            id: overlay.clicked_data.id,
            latlng: overlay.clicked_data.latlng,
          })
          .then((res) => {
            console.log(res);
            handleBldgInfoData({
              type: "update",
              pnu: overlay.clicked_data.id,
              data: res.data,
            });
          });
      }, 0);
      handlePolygon({ type: "show", polygon: new_polygon });
      handleKakaoListener({
        type: "remove",
        id: new_id,
        object: new_polygon,
        mouse_event: "mouseover",
      });
      handleKakaoListener({
        type: "remove",
        id: new_id,
        object: new_polygon,
        mouse_event: "mouseout",
      });
      handleKakaoListener({
        type: "remove",
        id: new_id,
        object: new_polygon,
        mouse_event: "click",
      });
      handleKakaoListener({
        type: "create",
        id: new_id,
        object: new_polygon,
        mouse_event: "click",
        handler: () => {
          handleOverlay({ type: "click", clicked_data: overlay.clicked_data });
          handlePolygon({ type: "hide", polygon: new_polygon });
        },
      });
      handleBldgInfo({ show: true, id: overlay.clicked_data.id });
    } else {
      handleBldgInfo({ show: false, id: overlay.clicked_data.id });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [overlay.clicked_data]);

  useEffect(() => {
    if (overlay.clicked_data_before.id !== -1) {
      // console.log(event_handlers_for_kakao);
      let new_id = overlay.clicked_data_before.id;
      let new_polygon = overlay.clicked_data_before.polygon;
      handlePolygon({ type: "hide", polygon: new_polygon });
      handleKakaoListener({
        type: "create",
        id: new_id,
        object: new_polygon,
        mouse_event: "mouseover",
        handler: () => handlePolygon({ type: "opaque", polygon: new_polygon }),
      });
      handleKakaoListener({
        type: "create",
        id: new_id,
        object: new_polygon,
        mouse_event: "mouseout",
        handler: () => handlePolygon({ type: "hide", polygon: new_polygon }),
      });
      handleKakaoListener({
        type: "remove",
        id: new_id,
        object: new_polygon,
        mouse_event: "click",
      });
      handleKakaoListener({
        type: "create",
        id: new_id,
        object: new_polygon,
        mouse_event: "click",
        handler: () => {
          handleOverlay({
            type: "click",
            clicked_data: overlay.clicked_data_before,
          });
          handlePolygon({ type: "show", polygon: new_polygon });
        },
      });
    }
  }, [overlay.clicked_data_before]);

  const pushAddress = ({ level, lat, lng }, callback) => {
    let geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.coord2RegionCode(lng, lat, (result, status) => {
      // console.log(result);
      if (level <= 2) {
        handleAddress(result[0].address_name);
      } else if (level <= 5) {
        handleAddress(
          result[0].region_1depth_name + " " + result[0].region_2depth_name
        );
      } else if (level <= 9) {
        handleAddress(result[0].region_1depth_name);
      } else {
        handleAddress("대한민국");
      }
    });
  };

  // const onClick = () =>
  //   handleBldgInfo({
  //     active: true,
  //     id: -1,
  //   });

  const handleMapUpdate = () => {
    const map_state = getMapState();
    handleBldgInfoData({
      type: "location_update",
      lat: map_state.lat,
      lng: map_state.lng,
      level: map_state.level,
    });
  };

  const [unit_type, _] = useUnitType();
  const [unit_update, setUnitUpdate] = useToggleState({ update: true });
  const [cookie_data, handleCookieData] = useCookieData();

  const reloadInfoBubble = (unit_type) => {
    // console.log(content);
    Array.from(document.getElementsByClassName("info-bubble-unit-field")).map(
      (e) => {
        let price_per_area = parseFloat(
          e.innerHTML.replace(/,/g, "").replace(/[^0-9.]/g, "")
        );
        if (e.innerHTML.includes("만")) {
          price_per_area *= 10000;
        } else if (e.innerHTML.includes("억")) {
          price_per_area *= 100000000;
        } else if (e.innerHTML.includes("조")) {
          price_per_area *= 1000000000000;
        }
        const previous_unit = e.innerHTML.replace(/.*\//g, "");
        if (previous_unit == "평" && unit_type == "sqm") {
          e.innerHTML =
            formatData(price_per_area * 0.3025, "number") +
            formatUnit("원[/area]", unit_type);
        } else if (previous_unit == "㎡" && unit_type == "py") {
          e.innerHTML =
            formatData(price_per_area / 0.3025, "number") +
            formatUnit("원[/area]", unit_type);
        }
      }
    );
  };

  const [pilji_list, setPiljiList] = useState([]);

  useEffect(() => {
    setPiljiList(cookie_data.data.pilji_list);
  }, [cookie_data]);

  useEffect(() => reloadInfoBubble(unit_type), [unit_update, unit_type]);

  const isBookMarked = (pnu, pilji_list) => {
    // console.log(pilji_list, pnu);
    if (pilji_list != undefined) {
      return pilji_list.map((e) => e.id).includes(pnu);
    } else {
      return false;
    }
  };

  return (
    <div
      className={cx("wrapper")}
      onMouseUp={handleMapUpdate}
      onWheel={handleMapUpdate}
    >
      <div id="map" className={cx("map")}></div>
      {overlay.data_pushed
        .filter((e) => e.price != -1 || isBookMarked(e.id, pilji_list))
        .map((each) => (
          <InfoBubble
            key={each.id}
            id={each.id}
            handler={handlePolygon}
            data={{
              price: formatData(each.price, "number"),
              date:
                "'" + each.tr_date.slice(2, 4) + "." + each.tr_date.slice(4, 6),
              price_per_py:
                formatData(
                  each.price_per_area,
                  "number",
                  "원[/area]",
                  unit_type
                ) + formatUnit("원[/area]", unit_type),
              polygon: each.polygon,
            }}
            tr_exists={each.price != -1}
            is_saved={isBookMarked(each.id, pilji_list)}
          />
        ))}
    </div>
  );
};

BackgroundMap.defaultProps = {
  handleBldgInfo: (_) => {},
  handleAddress: (_) => {},
  is_clicked: false,
  setIsClicked: (_) => {},
};

export default BackgroundMap;
