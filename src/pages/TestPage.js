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
import BackgroundMap from "../components/BackgroundMap";
import InfoBubble from "../components/InfoBubble";
import BldgInfo from "../components/BldgInfo";
import BldgInfoModal from "../components/BldgInfoModal";
import InfoWindow from "../components/InfoWindow";
import BarChart from "../components/BarChart";

const cx = classNames.bind(styles);
// var mapDiv = document.getElementById('map');
// var map = new naver.maps.Map(mapDiv);

const TestPage = () => {
  const [SSM_open, setSSMOpen] = useState(false);

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
      <p className={cx("title")}>InfoBubble</p>
      <InfoBubble />
      <p className={cx("title")}>BackgroundMap</p>
      <div className={cx("map-wrapper")}>
        <BackgroundMap />
      </div>
      <p className={cx("title")}>AddressModal</p>
      <AddressModal address={"address"} />
      <p className={cx("title")}>InfoWindow</p>
      <InfoWindow />
      <p className={cx("title")}>BldgInfo</p>
      <BldgInfo />
      <p className={cx("title")}>BldgInfoModal</p>
      <BldgInfoModal />
      <p className={cx("title")}>BookMarkModal</p>
      <BookMarkModal
        onClick2={() => {
          setSSMOpen(true);
        }}
      />
      <p className={cx("title")}>BookMarkModal with text</p>
      <BookMarkModal
        title="밸류에이션 저장"
        placeholder="강남로 1, 210906-1"
        onClick2={() => {
          setSSMOpen(true);
        }}
      />
      <p className={cx("title")}>SaveSuccessModal</p>
      {/* <SaveSuccessModal /> */}
      <div
        className={cx("event")}
        onClick={() => {
          setSSMOpen(true);
        }}
      >
        CLICK_EVENT
      </div>
      <p className={cx("title")}>BarChart</p>
      <BarChart />
      <SaveSuccessModal open={SSM_open} setOpen={setSSMOpen} />
      <p className={cx("title")}>END OF PAGE</p>
    </div>
  );
};

export default TestPage;
