import React, { useEffect } from "react";
import axios from "axios";

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
    axios
      .get(
        "https://raw.githubusercontent.com/ChangyongKim0/test2/master/src/data/junggu.json"
      )
      .then((response) => {
        let data_list = response.data;
        console.log(data_list);
        for (let data in data_list) {
          let area = convertGeoData(data."gml:posList");
          displayGeoData(area);
        }
      });
  }, []);

  const convertGeoData = (data) => {
    let polygon = [];
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
