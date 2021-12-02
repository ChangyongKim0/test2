import React, { useEffect, useReducer, useState } from "react";
import "../util/reset.css";
// import RenderAfterNavermapsLoaded from "../components/RenderAfterNavermapsLoaded";
// import Location from "../components/location";
import BackgroundMap from "../components/BackgroundMap";
import BldgInfoModal from "../components/BldgInfoModal";
import AddressModal from "../components/AddressModal";

import styles from "./MapComp.module.scss";
import classNames from "classnames/bind";
import InfoBubble from "../components/InfoBubble";
import Header from "../components/Header";
import ComparisonHeader from "../components/ComparisonHeader";
import ValuationFooter from "../components/ValuationFooter";
import AssumptionCard from "../components/AssumptionCard";
import { useModalStack } from "../hooks/useModal";
import useDragScroll from "../hooks/useDragScroll";
import LandDataCompCard from "../components/LandDataCompCard";
import CtaButton from "../atom/CtaButton";

const cx = classNames.bind(styles);
// var mapDiv = document.getElementById('map');
// var map = new naver.maps.Map(mapDiv);

const addressReducer = (state, action) => {
  // console.log("primary address is changed");
  return action;
};

const sample_content_data = {
  minimap: {
    level: 3,
    pos_list:
      "127.02473058 37.49791889 127.02435588 37.49780526 127.02440471 37.4977032 127.02441654 37.49767838 127.02403691 37.49756322 127.02409308 37.49744545 127.02414913 37.49732768 127.0242053 37.49720991 127.02422135 37.49717621 127.0243247 37.49713961 127.02462926 37.49723307 127.02481451 37.49728998 127.02500339 37.49734796 127.02492292 37.49751638 127.02484788 37.49767344 127.02477937 37.49781679 127.02473058 37.49791889",
  },
  title: "서울시 강남구 역삼동 120",
  data: {
    content: [
      [
        {
          data: {
            title: "거래 시기",
            value: "2019 1Q",
            unit: "",
          },
        },
        {
          data: {
            title: "최근 실거래가",
            value: "2,000억",
            unit: "\u00A0원",
          },
        },
        {
          data: {
            title: "평당 토지 단가",
            value: "6.9억",
            unit: "\u00A0원/평",
          },
        },
        {
          data: {
            title: "명목 NOC",
            value: "274,987",
            unit: "\u00A0원",
          },
        },
        {
          data: {
            title: "평당 임대료",
            value: "111,000",
            unit: "\u00A0원",
          },
        },
        {
          data: {
            title: "평당 관리비",
            value: "47,500",
            unit: "\u00A0원",
          },
        },
      ],
      [
        {
          data: {
            title: "토지 면적",
            value: "3,537",
            unit: "\u00A0평",
          },
        },
        {
          data: {
            title: "연면적",
            value: "16,234",
            unit: "\u00A0평",
          },
        },
        {
          data: {
            title: "용적률",
            value: "459",
            unit: "\u00A0%",
          },
        },
        {
          data: {
            title: "규모",
            value: "B6 / 32F",
            unit: "",
          },
        },
        {
          data: {
            title: "준공년도",
            value: "2019",
            unit: "",
          },
        },
      ],
    ],
  },
  handleClick: () => {},
  force_use_tooltip: false,
};

const data = {
  valuation_header: {
    title: "서울시 강남구 강남로 1",
    sub_title: "강욱 빌딩",
    saved_name: "강남로 1, 210906-1",
  },
  cards: [
    sample_content_data,
    sample_content_data,
    sample_content_data,
    sample_content_data,
    sample_content_data,
    sample_content_data,
  ],
};

const MapComp = () => {
  const [modal_stack, useModalParam] = useModalStack();

  useDragScroll("container", () => {});

  return (
    <div className={cx("wrapper")}>
      <div className={cx("frame-page")}>
        <div className={cx("frame-header")}>
          <Header nav_emph="valuation" is_searchable={false} />
          <ComparisonHeader type="valuation" />
        </div>
        <div className={cx("frame-content")}>
          <div className={cx("frame-title")}>
            <LandDataCompCard id="-1" type="title" data={data.cards[0].data} />
          </div>
          <div className={cx("frame-content-wrap")}>
            <div id="container" className={cx("frame-content-list")}>
              {data.cards.map((e, idx) => {
                return (
                  <div key={idx} className={cx("frame-content-box")}>
                    <LandDataCompCard key={idx} id={idx} {...e} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={cx("frame-modal")}>
        <div>{Object.values(modal_stack).map((e) => e.component)}</div>
      </div>
    </div>
  );
};

export default MapComp;
