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

import InfoBubble from "./InfoBubble";
import styles from "./BackgroundMap.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

let map;
let event_handlers_for_kakao = {};
let info_bubbles = {};

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
      center: new window.kakao.maps.LatLng(37.497928, 127.027583), //지도의 중심좌표.
      level: 2, //지도의 레벨(확대, 축소 정도)
    };
    map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    var zoomControl = new window.kakao.maps.ZoomControl();
    map.addControl(zoomControl, window.kakao.maps.ControlPosition.BOTTOMRIGHT);

    handleOverlay({ type: "create", map: map, getMapState: getMapState });
    getOverlayData(map).then((data) => {
      handleOverlay({ type: "update", data: data });
    });
    // window.kakao.maps.event.addListener(map, "click", onClick);
    window.kakao.maps.event.addListener(map, "center_changed", onCenterChanged);
    pushAddress(getMapState(), handleAddress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let bounds = map.getBounds();
    var min_lat = bounds.getSouthWest().getLat();
    var min_lng = bounds.getSouthWest().getLng();
    var max_lat = bounds.getNorthEast().getLat();
    var max_lng = bounds.getSouthWest().getLng();
    if (
      need_update_overlay &&
      (checkFarMove(overlay, getMapState(), 0.002, 0.004) ||
        overlay.show === false)
    ) {
      getOverlayData(map).then((data) => {
        handleOverlay({ type: "update", data: data });
      });
    } else {
      setNeedUpdateOverlay(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [need_update_overlay]);

  const onCenterChanged = (event) => {
    // console.log("center changed.");
    let level = map.getLevel();
    pushAddress(getMapState(), handleAddress);
    if (level <= 2) {
      setNeedUpdateOverlay(true);
    } else {
      handleOverlay({ type: "remove start" });
    }
  };

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    overlay.data_pushed.map((each) => {
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
      each.polygon.setMap(map);
      info_bubbles[each.id].setMap(map);
    });
  }, [overlay.data_pushed]);

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    overlay.data_pushed.map((each) => {
      handleKakaoListener({
        type: "create",
        id: each.id,
        object: each.polygon,
        mouse_event: "mouseover",
        handler: () => handlePolygon({ type: "opaque", polygon: each.polygon }),
      });
      handleKakaoListener({
        type: "create",
        id: each.id,
        object: each.polygon,
        mouse_event: "mouseout",
        handler: () => handlePolygon({ type: "hide", polygon: each.polygon }),
      });
      handleKakaoListener({
        type: "create",
        id: each.id,
        object: each.polygon,
        mouse_event: "click",
        handler: () => {
          handleOverlay({ type: "click", clicked_data: each });
          handlePolygon({ type: "show", polygon: each.polygon });
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
    console.log("time to remove?");
    if (overlay.need_to_remove) {
      // console.log(overlay);
      console.log("time to remove");
      // eslint-disable-next-line array-callback-return
      overlay.data_removed.map((each) => {
        handleKakaoListener({
          type: "remove",
          id: each.id,
          object: each.polygon,
          mouse_event: "mouseover",
        });
        handleKakaoListener({
          type: "remove",
          id: each.id,
          object: each.polygon,
          mouse_event: "mouseout",
        });
        handleKakaoListener({
          type: "remove",
          id: each.id,
          object: each.polygon,
          mouse_event: "click",
        });
        each.polygon.setMap(null);
        info_bubbles[each.id].setMap(null);
        delete info_bubbles[each.id];
      });
      handleOverlay({ type: "remove end" });
    }
    // console.log(info_bubbles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [overlay.need_to_remove]);

  useEffect(() => {
    if (overlay.clicked_data.id !== -1) {
      // console.log(overlay.clicked_data.id);
      let new_id = overlay.clicked_data.id;
      let new_polygon = overlay.clicked_data.polygon;
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

  return (
    <div className={cx("wrapper")}>
      <div id="map" className={cx("map")}></div>
      {overlay.data_pushed.map((each) => {
        return (
          <InfoBubble
            key={each.id}
            id={each.id}
            handler={handlePolygon}
            data={{
              price: "2,000억",
              date: "'20. 03",
              price_per_py: "250,000원/평",
              polygon: each.polygon,
            }}
          />
        );
      })}
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
