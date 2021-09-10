import React, { useEffect } from "react";
import "../util/reset.css";
// import RenderAfterNavermapsLoaded from "../components/RenderAfterNavermapsLoaded";
// import Location from "../components/location";
import AddressModal from "../components/AddressModal";
import Header from "../components/Header";

import styles from "./TestPage.module.scss";
import classNames from "classnames/bind";
import AddressSearcher from "../components/AddressSearcher";
import UseAutocomplete from "../components/UseAutoComplete";
import BookMarkModal from "../components/BookMarkModal";

const cx = classNames.bind(styles);
// var mapDiv = document.getElementById('map');
// var map = new naver.maps.Map(mapDiv);

const TestPage = () => {
  useEffect(() => {
    // console.log("useEffect");
  });
  return (
    <div className={cx("wrapper")}>
      <p>UseAutoComplete</p>
      <UseAutocomplete />
      <p>AddressSearcher</p>
      <AddressSearcher />
      <p>Header</p>
      <Header nav_emph="map" />
      <p>AddressModal</p>
      <AddressModal address={"address"} />
      <p></p>
      <BookMarkModal />
    </div>
  );
};

export default TestPage;
