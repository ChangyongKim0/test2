import React, { useEffect } from "react";

import styles from "./BackgroundMap.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const BackgroundMap = ({ handleBldgInfo }) => {
  useEffect(() => {
    var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    var options = {
      // //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(37.5652135, 126.980985), //지도의 중심좌표.
      level: 2, //지도의 레벨(확대, 축소 정도)
    };

    var map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, []);

  return (
    <div className={cx("wrapper")} onClick={() => handleBldgInfo({ id: true })}>
      <div id="map" className={cx("map")}></div>
    </div>
  );
};

export default BackgroundMap;
