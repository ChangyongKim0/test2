import React from "react";
import RenderAfterNavermapsLoaded from "../components/RenderAfterNavermapsLoaded";
import Location from "../components/location";

// var mapDiv = document.getElementById('map');
// var map = new naver.maps.Map(mapDiv);


const Map = () => {
  return (
    <div className='wrapper'>
      <div>
        <h2>MAP</h2>
      </div>
      <RenderAfterNavermapsLoaded clientId='843rt7rkkc' loading={<div>LOADING</div>} error={<div>ERROR</div>}>
        <Location/>
      </RenderAfterNavermapsLoaded>
    </div>
  );
};

export default Map;
