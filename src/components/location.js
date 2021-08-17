import React, { useEffect } from "react";
import $ from "jquery";

import "./location.scss";

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
        "https://raw.githubusercontent.com/navermaps/maps.js.ncp/master/docs",
      urlPrefix = GITHUB_PATH + "/data/region",
      urlSuffix = ".json",
      regionGeoJson = [];
    let loadCount = 0;

    window.naver.maps.Event.once(map, "init_stylemap", function () {
      for (var i = 1; i < 18; i++) {
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

              if (loadCount === 17) {
                startDataLayer();
              }
            };
          })(i - 1),
        });
      }
    });

    var tooltip = $(
      '<div style="position:absolute;z-index:1000;padding:5px 10px;background-color:#fff;border:solid 2px #000;font-size:14px;pointer-events:none;display:none;"></div>'
    );

    tooltip.appendTo(map.getPanes().floatPane);

    function startDataLayer() {
      console.log(regionGeoJson);
      map.data.setStyle(function (feature) {
        var styleOptions = {
          fillColor: "#ff0000",
          fillOpacity: 0.0001,
          strokeColor: "#ff0000",
          strokeWeight: 2,
          strokeOpacity: 0.4,
        };

        if (feature.getProperty("focus")) {
          styleOptions.fillOpacity = 0.6;
          styleOptions.fillColor = "#0f0";
          styleOptions.strokeColor = "#0f0";
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

        tooltip
          .css({
            display: "",
            left: e.offset.x,
            top: e.offset.y,
          })
          .text(regionName);

        map.data.overrideStyle(feature, {
          fillOpacity: 0.6,
          strokeWeight: 4,
          strokeOpacity: 1,
        });
      });

      map.data.addListener("mouseout", function (e) {
        tooltip.hide().empty();
        map.data.revertStyle();
      });
    }
  }, []);

  return (
    <div>
      <div id="map" className="map"></div>
    </div>
  );
};

export default Location;
