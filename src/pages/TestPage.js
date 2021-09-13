import React, { useEffect, useState } from "react";
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
import SaveSuccessModal from "../components/SaveSuccessModal";
import Overlay from "../components/Overlay";

const cx = classNames.bind(styles);
// var mapDiv = document.getElementById('map');
// var map = new naver.maps.Map(mapDiv);

const TestPage = () => {
  useEffect(() => {
    // console.log("useEffect");
  }, []);

  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>TEST PAGE</p>
      <p className={cx("title")}>UseAutoComplete</p>
      <UseAutocomplete />
      <p className={cx("title")}>AddressSearcher</p>
      <AddressSearcher />
      <p className={cx("title")}>Header</p>
      <Header nav_emph="map" />
      <p className={cx("title")}>AddressModal</p>
      <AddressModal address={"address"} />
      <p className={cx("title")}>BookMarkModal</p>
      <BookMarkModal />
      <p className={cx("title")}>BookMarkModal with text</p>
      <BookMarkModal title="밸류에이션 저장" placeholder="강남로 1, 210906-1" />
      <p className={cx("title")}>SaveSuccessModal</p>
      <SaveSuccessModal />
      <p className={cx("title")}>END OF PAGE</p>
      <Overlay>
        <SaveSuccessModal />
      </Overlay>
    </div>
  );
};

export default TestPage;
