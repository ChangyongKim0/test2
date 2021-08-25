import React from "react";
import RenderAfterNavermapsLoaded from "../components/RenderAfterNavermapsLoaded";
import Location from "../components/location";
import BackgroundMap from "../components/BackgroundMap";
import BldgInfoModal from "../components/BldgInfoModal";

// var mapDiv = document.getElementById('map');
// var map = new naver.maps.Map(mapDiv);

const Valuation = () => {
  return (
    <div className="wrapper">
      <BackgroundMap />
      <BldgInfoModal />
    </div>
  );
};

export default Valuation;
