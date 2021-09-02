import React from "react";

const Home = () => {
  console.log(1);
  console.log(window)
  return (
    <div>
      <script>
        console.log(1);
      </script>
      <script src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=843rt7rkkc"></script>
      <h2>Home</h2>
      <div id="map"></div>
      <script>

        var map = new naver.maps.Map('map', mapOptions);</script>
    </div>
  );
};

export default Home;
