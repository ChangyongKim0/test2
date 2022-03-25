import React, { useEffect } from "react";
import { convertPosList, getPosCenter } from "../functions/reduceOverlay";

import styles from "./MiniMap.module.scss";
import classNames from "classnames/bind";
import { col_secondary } from "../util/style";

const cx = classNames.bind(styles);

let map;

const MiniMap = ({ pos_list, level, id }) => {
  useEffect(() => {
    const center = getPosCenter(pos_list);
    let container = document.getElementById("mini_map_" + id); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      // //지도를 생성할 때 필요한 기본 옵션
      center: center, //지도의 중심좌표.
      level: level, //지도의 레벨(확대, 축소 정도)
    };
    map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    const polygon = convertPosList(map, pos_list);
    polygon.setOptions({ fillColor: col_secondary, fillOpacity: 0.7});
    // window.kakao.maps.event.addListener(map, "click", onClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pos_list]);

  return (
    <div className={cx("wrapper")}>
      <div id={"mini_map_" + id} className={cx("map")}></div>
    </div>
  );
};

MiniMap.defaultProps = {
  level: 3,
  pos_list:
    "127.02473058 37.49791889 127.02435588 37.49780526 127.02440471 37.4977032 127.02441654 37.49767838 127.02403691 37.49756322 127.02409308 37.49744545 127.02414913 37.49732768 127.0242053 37.49720991 127.02422135 37.49717621 127.0243247 37.49713961 127.02462926 37.49723307 127.02481451 37.49728998 127.02500339 37.49734796 127.02492292 37.49751638 127.02484788 37.49767344 127.02477937 37.49781679 127.02473058 37.49791889",
  id: 1,
};

export default MiniMap;
