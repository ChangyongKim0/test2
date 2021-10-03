import React, { useEffect, useReducer, useState } from "react";
import "../util/reset.css";
// import RenderAfterNavermapsLoaded from "../components/RenderAfterNavermapsLoaded";
// import Location from "../components/location";
import BackgroundMap from "../components/BackgroundMap";
import BldgInfoModal from "../components/BldgInfoModal";
import AddressModal from "../components/AddressModal";

import styles from "./Valuation.module.scss";
import classNames from "classnames/bind";
import InfoBubble from "../components/InfoBubble";
import Header from "../components/Header";
import ValuationHeader from "../components/ValuationHeader";
import ValuationFooter from "../components/ValuationFooter";
import AssumptionCard from "../components/AssumptionCard";
import { useModalStack } from "../hooks/useModal";
import useDragScroll from "../hooks/useDragScroll";

const cx = classNames.bind(styles);
// var mapDiv = document.getElementById('map');
// var map = new naver.maps.Map(mapDiv);

const addressReducer = (state, action) => {
  // console.log("primary address is changed");
  return action;
};

const sample_content_data = {
  use_mini_map: false,
  minimap: { center: "0,0", pnu: "0" },
  title: "자금 가정",
  sub_title: "필요 자금 총액과 대출 이자율",
  total_info: [
    { value: "4,000억", unit: "원" },
    { value: "5.5", unit: "%" },
  ],
  data: [
    [
      {
        data: {
          title: "PF 대출",
          base: "75",
          base_unit: "\u00A0%",
          value: "3,000억",
          value_unit: "\u00A0원",
        },
        is_placeholder: {
          base: true,
          value: false,
        },
        onEnterPress: {
          Base: () => {},
          Value: () => {},
        },
        type: "total",
        use_tooltip: {
          title: false,
          base: true,
          value: false,
        },
        tooltip: {
          title: ["tooltip.title[0]", "tooltip.title[1]"],
          base: ["사업자금 총액 대비 비율"],
          value: ["tooltip.value[0]", "tooltip.value[1]"],
        },
      },
      {
        data: {
          title: "Tr-A",
          base: "5.8",
          base_unit: "\u00A0%",
          value: "2,000억",
          value_unit: "\u00A0원",
        },
        is_placeholder: {
          base: true,
          value: true,
        },
        onEnterPress: {
          Base: () => {},
          Value: () => {},
        },
        type: "default",
        use_tooltip: {
          title: false,
          base: true,
          value: false,
        },
        tooltip: {
          title: ["tooltip.title[0]", "tooltip.title[1]"],
          base: ["이자율"],
          value: ["tooltip.value[0]", "tooltip.value[1]"],
        },
      },
      {
        data: {
          title: "Tr-B",
          base: "5.2",
          base_unit: "\u00A0%",
          value: "1,000억",
          value_unit: "\u00A0원",
        },
        is_placeholder: {
          base: true,
          value: true,
        },
        onEnterPress: {
          Base: () => {},
          Value: () => {},
        },
        type: "default",
        use_tooltip: {
          title: false,
          base: true,
          value: false,
        },
        tooltip: {
          title: ["tooltip.title[0]", "tooltip.title[1]"],
          base: ["이자율"],
          value: ["tooltip.value[0]", "tooltip.value[1]"],
        },
      },
    ],
    [
      {
        data: {
          title: "자본금",
          base: "25",
          base_unit: "\u00A0%",
          value: "1,000억",
          value_unit: "\u00A0원",
        },
        is_placeholder: {
          base: true,
          value: false,
        },
        onEnterPress: {
          Base: () => {},
          Value: () => {},
        },
        type: "total",
        use_tooltip: {
          title: false,
          base: true,
          value: false,
        },
        tooltip: {
          title: ["tooltip.title[0]", "tooltip.title[1]"],
          base: ["사업자금 총액 대비 비율"],
          value: ["tooltip.value[0]", "tooltip.value[1]"],
        },
      },
      {
        data: {
          title: "우선주",
          base: "",
          base_unit: "",
          value: "400억",
          value_unit: "\u00A0원",
        },
        is_placeholder: {
          base: false,
          value: true,
        },
        onEnterPress: {
          Base: () => {},
          Value: () => {},
        },
        type: "default",
        use_tooltip: {
          title: false,
          base: false,
          value: false,
        },
        tooltip: {
          title: ["tooltip.title[0]", "tooltip.title[1]"],
          base: [""],
          value: ["tooltip.value[0]", "tooltip.value[1]"],
        },
      },
      {
        data: {
          title: "보통주",
          base: "",
          base_unit: "",
          value: "600억",
          value_unit: "\u00A0원",
        },
        is_placeholder: {
          base: false,
          value: true,
        },
        onEnterPress: {
          Base: () => {},
          Value: () => {},
        },
        type: "default",
        use_tooltip: {
          title: false,
          base: false,
          value: false,
        },
        tooltip: {
          title: ["tooltip.title[0]", "tooltip.title[1]"],
          base: [""],
          value: ["tooltip.value[0]", "tooltip.value[1]"],
        },
      },
    ],
  ],
  style: "white",
  use_plus: true,
  handlePlus: () => {},
  force_use_tooltip: false,
};

const data = {
  valuation_header: {
    title: "서울시 강남구 강남로 1",
    sub_title: "강욱 빌딩",
    saved_name: "강남로 1, 210906-1",
  },
  cards: [
    [sample_content_data, sample_content_data],
    [sample_content_data, sample_content_data, sample_content_data],
    [sample_content_data],
    [sample_content_data, sample_content_data],
    [sample_content_data],
  ],
  footer: {
    data: [
      { title: "예상 사업 기간", value: "30", unit: "개월" },
      { title: "매각금액 가정", value: "5,424", unit: "억 원" },
      { title: "수익률", value: "4.34", unit: "%" },
    ],
  },
};

const Valuation = () => {
  const [modal_stack, useModalParam] = useModalStack();

  useDragScroll("container");

  return (
    <div className={cx("wrapper")}>
      <div className={cx("frame-page")}>
        <div className={cx("frame-header")}>
          <Header nav_emph="valuation" is_searchable={false} />
          <ValuationHeader
            useModalParam={useModalParam}
            {...data.valuation_header}
          />
        </div>
        <div id="container" className={cx("frame-content")}>
          {data.cards.map((e, idx) => {
            let comp = e.map((e2, idx2) => {
              return <AssumptionCard key={idx2} {...e2} />;
            });
            return (
              <div key={idx} className={cx("frame-column")}>
                {comp}
              </div>
            );
          })}
        </div>
        <div className={cx("frame-footer")}>
          <ValuationFooter {...data.footer} />
        </div>
      </div>
      <div className={cx("frame-modal")}>
        <div>{Object.values(modal_stack).map((e) => e.component)}</div>
      </div>
    </div>
  );
};

export default Valuation;
