import React, { useEffect, useState } from "react";
import "../util/reset.css";
import useToggleState from "../hooks/useToggle";
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
import Dropdown from "../components/Dropdown";
import ValuationHeader from "../components/ValuationHeader";
import axios from "axios";
import CtaButton from "../atom/CtaButton";
import useModalStack from "../hooks/useModal";
import ComparisonHeader from "../components/ComparisonHeader";
import ValuationFooter from "../components/ValuationFooter";

const cx = classNames.bind(styles);
// var mapDiv = document.getElementById('map');
// var map = new naver.maps.Map(mapDiv);

const newFunction = () => {
  axios.get("/api");
};

const ctaButtonBundle = () => {
  return (
    <>
      <CtaButton
        size="small"
        icon="none"
        shape="round"
        background="color"
        is_clickable={false}
      >
        클릭불가형태
      </CtaButton>
      <CtaButton size="small" icon="none" shape="round" background="color">
        밸류에이션 저장
      </CtaButton>
      <CtaButton size="medium" icon="none" shape="round" background="color">
        밸류에이션 저장
      </CtaButton>
      <CtaButton size="big" icon="none" shape="round" background="color">
        밸류에이션 저장
      </CtaButton>
      <CtaButton size="small" icon="chart" shape="square" background="color">
        밸류에이션 저장
      </CtaButton>
      <CtaButton size="medium" icon="chart" shape="square" background="color">
        밸류에이션 저장
      </CtaButton>
      <CtaButton size="big" icon="chart" shape="square" background="color">
        밸류에이션 저장
      </CtaButton>
      <CtaButton size="small" icon="change" shape="round" background="white">
        밸류에이션 저장
      </CtaButton>
      <CtaButton size="medium" icon="change" shape="round" background="white">
        밸류에이션 저장
      </CtaButton>
      <CtaButton size="big" icon="change" shape="round" background="white">
        밸류에이션 저장
      </CtaButton>
      <CtaButton
        size="small"
        icon="change"
        shape="round"
        background="white"
        border="gray"
      >
        밸류에이션 저장
      </CtaButton>
      <CtaButton
        size="medium"
        icon="change"
        shape="round"
        background="white"
        border="gray"
      >
        밸류에이션 저장
      </CtaButton>
      <CtaButton
        size="big"
        icon="change"
        shape="round"
        background="white"
        border="gray"
      >
        밸류에이션 저장
      </CtaButton>
      <CtaButton
        size="small"
        icon="default"
        shape="round"
        background="transparent"
      >
        밸류에이션 저장
      </CtaButton>
      <CtaButton
        size="medium"
        icon="default"
        shape="round"
        background="transparent"
      >
        밸류에이션 저장
      </CtaButton>
      <CtaButton
        size="big"
        icon="default"
        shape="round"
        background="transparent"
      >
        밸류에이션 저장
      </CtaButton>
    </>
  );
};

const TestPage = () => {
  const [SSM_open, setSSMOpen] = useState(false);
  const [toggle_type_state, setTTState] = useToggleState({
    SSM: false,
    Dropdown: false,
  });

  const [modal_stack, createUseModal] = useModalStack();

  useEffect(() => {
    // console.log("useEffect");
  }, []);

  return (
    <div>
      <div className={cx("wrapper")}>
        <p className={cx("title")}>TEST PAGE</p>
        <p className={cx("title")}>UseAutoComplete</p>
        <UseAutocomplete />
        <p className={cx("title")}>AddressSearcher</p>
        <AddressSearcher />
        <p className={cx("title")}>Header</p>
        <Header nav_emph="map" />
        <Header nav_emph="map" is_searchable={false} />
        <p className={cx("title")}>ValuationHeader</p>
        <ValuationHeader createUseModal={createUseModal} />
        {/* <div>{Object.keys(modal_stack).map((e) => e)}</div>
        <ValuationHeader createUseModal={createUseModal} /> */}
        <ValuationHeader
          createUseModal={createUseModal}
          title="서울시 강남구 강남로 1"
          sub_title="강욱 빌딩"
          saved_name="강남로 1, 210906-1"
        />
        <p className={cx("title")}>ComparisonHeader</p>
        <ComparisonHeader createUseModal={createUseModal} />
        <ComparisonHeader createUseModal={createUseModal} type="land" />
        <p className={cx("title")}>InfoBubble</p>
        <InfoBubble />
        <InfoBubble
          data={{
            price: "2,000억",
            date: "'20.03",
            price_per_py: "250,000원/평",
          }}
        />
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
        <p className={cx("title")}>Dropdown</p>
        <div className={cx("relative")}>
          <div
            className={cx("event")}
            onClick={() => {
              setTTState("Dropdown");
              newFunction();
            }}
          >
            CLICK_EVENT
          </div>
          <Dropdown
            open={toggle_type_state.Dropdown}
            handleOpen={() => {
              setTTState("Dropdown");
            }}
          ></Dropdown>
        </div>
        <p className={cx("title")}>CtaButton</p>
        <CtaButton />
        {ctaButtonBundle()}
        <p className={cx("title")}>ValuationFooter</p>
        <ValuationFooter />
        <ValuationFooter
          data={[
            { title: "예상 사업 기간", value: "30", unit: "개월" },
            { title: "매각금액 가정", value: "5,424", unit: "억 원" },
            { title: "수익률", value: "4.34", unit: "%" },
          ]}
        />
        <p className={cx("title")}>END OF PAGE</p>
      </div>
      <div className={cx("modal-area")}>
        <div>{Object.values(modal_stack).map((e) => e.component)}</div>
      </div>
    </div>
  );
};

export default TestPage;
