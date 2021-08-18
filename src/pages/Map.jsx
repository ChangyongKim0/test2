import React from "react";
import RenderAfterNavermapsLoaded from "../components/RenderAfterNavermapsLoaded";
import Location from "../components/location";

// var mapDiv = document.getElementById('map');
// var map = new naver.maps.Map(mapDiv);


const Map = () => {
  return (
    <div className='wrapper'>
      <RenderAfterNavermapsLoaded clientId='843rt7rkkc' loading={<h2>MAP</h2>} error={<div>ERROR</div>}>
        <Location/>
      </RenderAfterNavermapsLoaded>
    </div>
  );
};

export default Map;
