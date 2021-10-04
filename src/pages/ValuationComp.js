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
import ComparisonHeader from "../components/ComparisonHeader";
import ValuationFooter from "../components/ValuationFooter";
import AssumptionCard from "../components/AssumptionCard";
import { useModalStack } from "../hooks/useModal";
import useDragScroll from "../hooks/useDragScroll";
import ValuationCompCard from "../components/ValuationCompCard";
import CtaButton from "../atom/CtaButton";

const cx = classNames.bind(styles);
// var mapDiv = document.getElementById('map');
// var map = new naver.maps.Map(mapDiv);

const addressReducer = (state, action) => {
  // console.log("primary address is changed");
  return action;
};

const sample_content_data = {
  data: {
    content: [
      [
        {
          data: {
            title: "주소",
            value: "서울시 강남구 역삼동 101-1",
            unit: "",
            second_value: "",
            second_unit: "",
          },
          use_tooltip: {
            title: false,
            value: false,
            second_value: false,
          },
          use_toggle: false,
          tooltip: {
            title: [],
            value: [],
            second_value: [],
          },
          style: "default",
        },
        {
          data: {
            title: "토지 면적",
            value: "1,070",
            unit: "\u00A0평",
            second_value: "",
            second_unit: "",
          },
          use_tooltip: {
            title: false,
            value: false,
            second_value: false,
          },
          use_toggle: false,
          tooltip: {
            title: [],
            value: [],
            second_value: [],
          },
          style: "default",
        },
        {
          data: {
            title: "최대 건폐율",
            value: "60",
            unit: "\u00A0%",
            second_value: "",
            second_unit: "",
          },
          use_tooltip: {
            title: false,
            value: false,
            second_value: false,
          },
          use_toggle: false,
          tooltip: {
            title: [],
            value: [],
            second_value: [],
          },
          style: "default",
        },
        {
          data: {
            title: "용도지역",
            value: "일반상업지역",
            unit: "",
            second_value: "",
            second_unit: "",
          },
          use_tooltip: {
            title: false,
            value: false,
            second_value: false,
          },
          use_toggle: false,
          tooltip: {
            title: [],
            value: [],
            second_value: [],
          },
          style: "default",
        },
        {
          data: {
            title: "최근 실거래가",
            value: "2,000억",
            unit: "\u00A0원",
            second_value: "",
            second_unit: "",
          },
          use_tooltip: {
            title: false,
            value: false,
            second_value: false,
          },
          use_toggle: false,
          tooltip: {
            title: [],
            value: [],
            second_value: [],
          },
          style: "default",
        },
        {
          data: {
            title: "임대료(명목 NOC)",
            value: "20만",
            unit: "\u00A0원/전용평/월",
            second_value: "",
            second_unit: "",
          },
          use_tooltip: {
            title: false,
            value: false,
            second_value: false,
          },
          use_toggle: false,
          tooltip: {
            title: [],
            value: [],
            second_value: [],
          },
          style: "default",
        },
      ],
      [
        {
          data: {
            title: "적용 건폐율",
            value: "58",
            unit: "\u00A0%",
            second_value: "",
            second_unit: "",
          },
          use_tooltip: {
            title: false,
            value: true,
            second_value: false,
          },
          use_toggle: false,
          tooltip: {
            title: [],
            value: ["무언가 기준"],
            second_value: [],
          },
          style: "default",
        },
        {
          data: {
            title: "적용 용적률",
            value: "754",
            unit: "\u00A0%",
            second_value: "",
            second_unit: "",
          },
          use_tooltip: {
            title: false,
            value: true,
            second_value: false,
          },
          use_toggle: false,
          tooltip: {
            title: [],
            value: ["무언가 기준"],
            second_value: [],
          },
          style: "default",
        },
        {
          data: {
            title: "적용 전용률",
            value: "54",
            unit: "\u00A0%",
            second_value: "",
            second_unit: "",
          },
          use_tooltip: {
            title: false,
            value: true,
            second_value: false,
          },
          use_toggle: false,
          tooltip: {
            title: [],
            value: ["무언가 기준"],
            second_value: [],
          },
          style: "default",
        },
        {
          data: {
            title: "연면적",
            value: "4,949",
            unit: "\u00A0평",
            second_value: "",
            second_unit: "",
          },
          use_tooltip: {
            title: false,
            value: true,
            second_value: false,
          },
          use_toggle: false,
          tooltip: {
            title: [],
            value: ["무언가 기준"],
            second_value: [],
          },
          style: "default",
        },
      ],
      [
        {
          data: {
            title: "구매 비용",
            value: "3,200억",
            unit: "\u00A0원",
            second_value: "",
            second_unit: "",
          },
          use_tooltip: {
            title: false,
            value: false,
            second_value: false,
          },
          use_toggle: false,
          tooltip: {
            title: [],
            value: [],
            second_value: [],
          },
          style: "default",
        },
        {
          data: {
            title: "구매 대금",
            value: "3,200억",
            unit: "\u00A0원",
            second_value: "",
            second_unit: "",
          },
          use_tooltip: {
            title: false,
            value: false,
            second_value: false,
          },
          use_toggle: false,
          tooltip: {
            title: [],
            value: [],
            second_value: [],
          },
          style: "detail",
        },
        {
          data: {
            title: "취득세 등 부대비용",
            value: "18,700백만",
            unit: "\u00A0원",
            second_value: "5.5",
            second_unit: "\u00A0%",
          },
          use_tooltip: {
            title: false,
            value: false,
            second_value: false,
          },
          use_toggle: false,
          tooltip: {
            title: [],
            value: [],
            second_value: [],
          },
          style: "detail",
        },
        {
          data: {
            title: "매입보수",
            value: "18,700백만",
            unit: "\u00A0원",
            second_value: "1.0",
            second_unit: "\u00A0%",
          },
          use_tooltip: {
            title: false,
            value: false,
            second_value: false,
          },
          use_toggle: false,
          tooltip: {
            title: [],
            value: [],
            second_value: [],
          },
          style: "detail",
        },
        {
          data: {
            title: "중개보수",
            value: "2,040백만",
            unit: "\u00A0원",
            second_value: "0.6",
            second_unit: "\u00A0%",
          },
          use_tooltip: {
            title: false,
            value: false,
            second_value: false,
          },
          use_toggle: false,
          tooltip: {
            title: [],
            value: [],
            second_value: [],
          },
          style: "detail",
        },
        {
          data: {
            title: "건설기간보유세",
            value: "2,400백만",
            unit: "\u00A0원",
            second_value: "1,200백만",
            second_unit: "\u00A0원/년",
          },
          use_tooltip: {
            title: false,
            value: false,
            second_value: false,
          },
          use_toggle: false,
          tooltip: {
            title: [],
            value: [],
            second_value: [],
          },
          style: "detail",
        },
        {
          data: {
            title: "AM/PM보수",
            value: "2,400백만",
            unit: "\u00A0원",
            second_value: "1,200백만",
            second_unit: "\u00A0원/년",
          },
          use_tooltip: {
            title: false,
            value: false,
            second_value: false,
          },
          use_toggle: false,
          tooltip: {
            title: [],
            value: [],
            second_value: [],
          },
          style: "detail",
        },
        {
          data: {
            title: "예비비",
            value: "2,000백만",
            unit: "\u00A0원",
            second_value: "1,200백만",
            second_unit: "\u00A0원/년",
          },
          use_tooltip: {
            title: false,
            value: false,
            second_value: false,
          },
          use_toggle: false,
          tooltip: {
            title: [],
            value: [],
            second_value: [],
          },
          style: "detail",
        },
      ],
      [
        {
          data: {
            title: "건축 비용",
            value: "760억",
            unit: "\u00A0원",
            second_value: "",
            second_unit: "",
          },
          use_tooltip: {
            title: false,
            value: false,
            second_value: false,
          },
          use_toggle: false,
          tooltip: {
            title: [],
            value: [],
            second_value: [],
          },
          style: "default",
        },
      ],
      [
        {
          data: {
            title: "대출 이자",
            value: "5.5",
            unit: "\u00A0%",
            second_value: "",
            second_unit: "",
          },
          use_tooltip: {
            title: false,
            value: false,
            second_value: false,
          },
          use_toggle: false,
          tooltip: {
            title: [],
            value: [],
            second_value: [],
          },
          style: "default",
        },
      ],
      [
        {
          data: {
            title: "임대료",
            value: "28만",
            unit: "\u00A0원/전용평/월",
            second_value: "",
            second_unit: "",
          },
          use_tooltip: {
            title: false,
            value: false,
            second_value: false,
          },
          use_toggle: false,
          tooltip: {
            title: [],
            value: [],
            second_value: [],
          },
          style: "default",
        },
      ],
    ],
    footer: [
      {
        data: {
          title: "사업비",
          value: "4,000억",
          unit: "\u00A0원",
          second_value: "",
          second_unit: "",
        },
        use_tooltip: {
          title: false,
          value: false,
          second_value: false,
        },
        use_toggle: false,
        tooltip: {
          title: [],
          value: [],
          second_value: [],
        },
      },
      {
        data: {
          title: "총이익",
          value: "673.6억",
          unit: "\u00A0원",
          second_value: "",
          second_unit: "",
        },
      },
      {
        data: {
          title: "매각예상가",
          value: "4,600억",
          unit: "\u00A0원",
          second_value: "",
          second_unit: "",
        },
      },
      {
        data: {
          title: "수익률",
          value: "17.1",
          unit: "\u00A0%",
          second_value: "",
          second_unit: "",
        },
      },
    ],
  },
  style: "white",
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
    {
      saved_name: "역삼동 101-1, 210906-1",
      content: sample_content_data,
    },
    {
      saved_name: "역삼동 101-1, 210906-1",
      content: sample_content_data,
    },
    {
      saved_name: "역삼동 101-1, 210906-1",
      content: sample_content_data,
    },
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
          <ComparisonHeader type="valuation" />
        </div>
        <div id="container" className={cx("frame-content")}>
          {data.cards.map((e, idx) => {
            return (
              <div className={cx("frame-column")}>
                <CtaButton size="big" background="transparent" icon="chart">
                  {e.saved_name}
                </CtaButton>
                <ValuationCompCard key={idx} {...e.content} />
              </div>
            );
          })}
        </div>
      </div>
      <div className={cx("frame-modal")}>
        <div>{Object.values(modal_stack).map((e) => e.component)}</div>
      </div>
    </div>
  );
};

export default Valuation;
