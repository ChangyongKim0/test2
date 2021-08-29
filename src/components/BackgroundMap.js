import React, { useEffect } from "react";

import styles from "./BackgroundMap.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

let map;

const BackgroundMap = ({ handleBldgInfo, handleAddress }) => {
  useEffect(() => {
    let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      // //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(37.5652135, 126.980985), //지도의 중심좌표.
      level: 2, //지도의 레벨(확대, 축소 정도)
    };
    map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    window.kakao.maps.event.addListener(map, "click", onClick);
    window.kakao.maps.event.addListener(map, "center_changed", onCenterChanged);
    getAddress(handleAddress);
    let area = getGeoData();
    console.log(area);
    displayGeoData(area);
  }, []);

  const getGeoData = () => {
    let polygon = [];
    let data =
      "126.98371459 37.56675117 126.98368912 37.56674981 126.98368743 37.56673143 126.98359122 37.56674034 126.98349557 37.56674402 126.98338295 37.56672237 126.98338352 37.56671066 126.98329354 37.56669614 126.9831113 37.56670702 126.98311073 37.56671197 126.98311979 37.56671738 126.983107 37.56671747 126.98310564 37.56670512 126.98309207 37.56667989 126.98308758 37.56652492 126.98308894 37.56650051 126.98327551 37.56637178 126.98337287 37.56630377 126.98345551 37.56625018 126.98352343 37.56622361 126.98358795 37.56621416 126.98379843 37.56621331 126.98391053 37.56621286 126.98391211 37.56673723 126.98391097 37.5667512 126.98389456 37.56675345 126.98388721 37.56673903 126.98385891 37.56674128 126.98385551 37.56675299 126.98371459 37.56675117";
    let data_list = data.split(" ");
    console.log(data_list);
    for (let i = 0; i < data_list.length; ) {
      let lat = parseFloat(data_list[i]);
      let lng = parseFloat(data_list[i + 1]);
      polygon.push(new window.kakao.maps.LatLng(lng, lat));
      i += 2;
    }
    return { name: "sample", path: polygon };
  };

  const displayGeoData = (area) => {
    let polygon = new window.kakao.maps.Polygon({
      map: map, // 다각형을 표시할 지도 객체
      path: area.path,
      strokeWeight: 2,
      strokeColor: "#004c80",
      strokeOpacity: 0.8,
      fillColor: "#fff",
      fillOpacity: 0.7,
    });
    polygon.setMap(map);
    window.kakao.maps.event.addListener(
      polygon,
      "mouseover",
      function (mouseEvent) {
        polygon.setOptions({ fillColor: "#09f" });
      }
    );
  };

  const getAddress = (callback) => {
    let level = map.getLevel();
    let lat = map.getCenter().getLat();
    let lng = map.getCenter().getLng();
    console.log(
      "client clicked coordinate Lat: " + lat + ", Lng: " + lng + "."
    );
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

  const onCenterChanged = (event) => {
    getAddress(handleAddress);
    //   handleAddress(new_addr);
  };

  const onClick = (event) => {
    let sample = new window.kakao.maps.LatLng(37, 126);
    console.log(sample);
    let level = map.getLevel();
    getAddress(handleAddress);
    console.log("current level is " + level);
    handleBldgInfo({ active: true, id: 1 });
    // handleAddress(new_addr);
  };

  return (
    <div className={cx("wrapper")}>
      <div id="map" className={cx("map")}></div>
    </div>
  );
};

export default BackgroundMap;
