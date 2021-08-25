import React, { useEffect } from "react";
import $, { map } from "jquery";

import styles from "./location.module.scss";
import classNames from "classnames/bind";

const Location = () => {
  // console.log(window.naver);

  useEffect(() => {
    var container = document.getElementById("map");
    var mapOptions = {
      background: "#0061ff",
      zoom: 10,
      scaleControl: true,
      //   logoControl: true,
      mapDataControl: true,
      //   zoomControl: true,
      mapTypeControl: true,
      disableKineticPan: false,
      tileTransition: true,
    };

    var map = new window.naver.maps.Map(container, mapOptions);
    // var HOME_PATH = window.HOME_PATH || ".",

    var GITHUB_PATH =
        "https://raw.githubusercontent.com/ChangyongKim0/test2/master/src",
      urlPrefix = GITHUB_PATH + "/data/region",
      urlSuffix = ".json",
      regionGeoJson = [];
    let loadCount = 0;

    window.naver.maps.Event.addListener(map, "init_stylemap", function () {
      loadDataLayer();
    });

    window.naver.maps.Event.addListener(map, "zoom_changed", function () {
      if (isWiderThan(0.3, 1)) {
        startDataLayer();
        console.log("listening and wider.");
      } else {
        endDataLayer();
      }
    });

    function isWiderThan(lng_thres, lat_thres) {
      var bounds = map.getBounds(),
        southWest = bounds.getSW(),
        northEast = bounds.getNE(),
        lngSpan = northEast.lng() - southWest.lng(),
        latSpan = northEast.lat() - southWest.lat();
      console.log(lngSpan, latSpan);
      if (lngSpan > lng_thres || latSpan > lat_thres) {
        return true;
      } else {
        return false;
      }
    }

    // function isNarrowerThan(lng_thres, lat_thres) {
    //   var bounds = map.getBounds(),
    //     southWest = bounds.getSW(),
    //     northEast = bounds.getNE(),
    //     lngSpan = northEast.lng() - southWest.lng(),
    //     latSpan = northEast.lat() - southWest.lat();
    //   if (lngSpan < lng_thres || latSpan < lat_thres) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }

    function loadDataLayer() {
      for (var i = 1; i < 3; i++) {
        var keyword = i + "";

        if (keyword.length === 1) {
          keyword = "0" + keyword;
        }
        // console.log(urlPrefix + keyword + urlSuffix);

        $.ajax({
          url: urlPrefix + keyword + urlSuffix,
          success: (function (idx) {
            return function (geojson) {
              regionGeoJson[idx] = eval("(" + geojson + ")");

              loadCount++;
              // console.log(loadCount);

              if (loadCount === 2) {
                startDataLayer();
              }
            };
          })(i - 1),
        });
      }
    }

    var tooltip = $(
      '<div style="position:absolute;z-index:1000;padding:5px 10px;background-color:#fff;border:solid 2px #000;font-size:14px;pointer-events:none;display:none;"></div>'
    );

    tooltip.appendTo(map.getPanes().floatPane);

    function startDataLayer() {
      // console.log(regionGeoJson);
      map.data.setStyle(function (feature) {
        var styleOptions = {
          fillColor: "#0061ff",
          fillOpacity: 0,
          strokeColor: "#0061ff",
          strokeWeight: 2,
          strokeOpacity: 0,
        };

        if (feature.getProperty("hover")) {
          styleOptions.fillOpacity = 0;
          styleOptions.strokeWeight = 4;
          styleOptions.strokeOpacity = 0.5;
        }

        if (feature.getProperty("focus")) {
          styleOptions.fillOpacity = 0.6;
          styleOptions.strokeWeight = 4;
          styleOptions.strokeOpacity = 1;
        }

        return styleOptions;
      });

      regionGeoJson.forEach(function (geojson) {
        map.data.addGeoJson(geojson);
      });

      map.data.addListener("click", function (e) {
        var feature = e.feature;

        if (feature.getProperty("focus") !== true) {
          feature.setProperty("focus", true);
        } else {
          feature.setProperty("focus", false);
        }
      });

      map.data.addListener("mouseover", function (e) {
        var feature = e.feature,
          regionName = feature.getProperty("area1");

        feature.setProperty("hover", true);

        tooltip
          .css({
            display: "",
            left: e.offset.x,
            top: e.offset.y,
          })
          .text(regionName);
      });

      map.data.addListener("mouseout", function (e) {
        tooltip.hide().empty();
        map.data.revertStyle();

        e.feature.setProperty("hover", false);
      });
    }

    function endDataLayer() {
      map.data.setStyle(function (feature) {
        var styleOptions = {
          fillColor: "#0061ff",
          fillOpacity: 0,
          strokeColor: "#0061ff",
          strokeWeight: 2,
          strokeOpacity: 0,
        };
        return styleOptions;
      });
      map.data.clearListeners();
    }
  }, []);

  return (
    <div>
      <div id="map" className={cx("map")}></div>
    </div>
  );
};

export default Location;
