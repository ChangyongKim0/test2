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
import useCookieData from "../hooks/useCookieData";

const cx = classNames.bind(styles);
// var mapDiv = document.getElementById('map');
// var map = new naver.maps.Map(mapDiv);

const addressReducer = (state, action) => {
  // console.log("primary address is changed");
  return action;
};

const shrinkAddr = (addr) => {
  return addr.split(" ").slice(1).join(" ");
}

const formatLandData = (naked_data) => {
  const data = naked_data.data;

  return {
    id: naked_data.id,
    mini_map: {
      level: 3,
      pos_list: data.land.pos_list,
    },
    title: shrinkAddr(data.addr),
    naked_data: naked_data.data,
    data: {
      content: [
        [
          {
            data: {
              title: "거래 시기",
              value: data.transaction_exists? data.transaction.date: "최근 거래 없음",
              unit: "",
              unit_type: "string",
            },
          },
          {
            data: {
              title: "최근 실거래가",
              value: data.transaction_exists? data.transaction.price: "-",
              unit: "\u00A0원",
              unit_type: "number",
            },
          },
          {
            data: {
              title: "평당 토지 단가",
              value: data.transaction_exists? data.transaction.price_per_area: "-",
              unit: "\u00A0원[/area]",
              unit_type: "number",
            },
          },
          {
            data: {
              title: "명목 NOC",
              value: "-",
              unit: "\u00A0원",
              unit_type: "number",
            },
          },
          {
            data: {
              title: "평당 임대료",
              value: "-",
              unit: "\u00A0원",
              unit_type: "number",
            },
          },
          {
            data: {
              title: "평당 관리비",
              value: "-",
              unit: "\u00A0원",
              unit_type: "number",
            },
          },
        ],
        [
          {
            data: {
              title: "토지 면적",
              value: data.land.area,
              unit: "\u00A0[area]",
              unit_type: "number_detail",
            },
          },
          {
            data: {
              title: "연면적",
              value: data.bldg_exists? data.bldg.bldg_info_list[data.bldg_idx].farea: "-",
              unit: "\u00A0[area]",
              unit_type: "number_detail",
            },
          },
          {
            data: {
              title: "용적률",
              value: data.bldg_exists? data.bldg.bldg_info_list[data.bldg_idx].farea/data.land.area: "-",
              unit: "\u00A0%",
              unit_type: "rate_over",
            },
          },
          {
            data: {
              title: "규모",
              value: data.bldg_exists? data.bldg.bldg_info_list[data.bldg_idx].size: ["-","-"],
              unit: "",
              unit_type: "floor_range",
            },
          },
          {
            data: {
              title: "준공년도",
              value: data.bldg_exists? data.bldg.bldg_info_list[data.bldg_idx].const_year: "-",
              unit: "",
              unit_type: "string",
            },
          },
        ],
      ],
    },
    handleClick: () => {},
    force_use_tooltip: false,
  };
}

const sample_content_data = {
  mini_map: {
    level: 3,
    pos_list:
      "17.02473058 37.49791889 127.02435588 37.49780526 127.02440471 37.4977032 127.02441654 37.49767838 127.02403691 37.49756322 127.02409308 37.49744545 127.02414913 37.49732768 127.0242053 37.49720991 127.02422135 37.49717621 127.0243247 37.49713961 127.02462926 37.49723307 127.02481451 37.49728998 127.02500339 37.49734796 127.02492292 37.49751638 127.02484788 37.49767344 127.02477937 37.49781679 127.02473058 37.49791889",
  },
  title: "로딩중 내용",
  data: {
    content: [
      [
        {
          data: {
            title: "거래 시기",
            value: "최근 거래 없음",
            unit: "",
            unit_type: "string",
          },
        },
        {
          data: {
            title: "최근 실거래가",
            value: "-",
            unit: "\u00A0원",
            unit_type: "number",
          },
        },
        {
          data: {
            title: "평당 토지 단가",
            value: "-",
            unit: "\u00A0원[/area]",
            unit_type: "number",
          },
        },
        {
          data: {
            title: "명목 NOC",
            value: "-",
            unit: "\u00A0원",
            unit_type: "number",
          },
        },
        {
          data: {
            title: "평당 임대료",
            value: "-",
            unit: "\u00A0원",
            unit_type: "number",
          },
        },
        {
          data: {
            title: "평당 관리비",
            value: "-",
            unit: "\u00A0원",
            unit_type: "number",
          },
        },
      ],
      [
        {
          data: {
            title: "토지 면적",
            value: 10000,
            unit: "\u00A0[area]",
            unit_type: "number_detail",
          },
        },
        {
          data: {
            title: "연면적",
            value: 50000,
            unit: "\u00A0[area]",
            unit_type: "number_detail",
          },
        },
        {
          data: {
            title: "용적률",
            value: 500,
            unit: "\u00A0%",
            unit_type: "rate_over",
          },
        },
        {
          data: {
            title: "규모",
            value: [0,2],
            unit: "",
            unit_type: "floor_range",
          },
        },
        {
          data: {
            title: "준공년도",
            value: "-",
            unit: "",
            unit_type: "string",
          },
        },
      ],
    ],
  },
  handleClick: () => {},
  force_use_tooltip: false,
};



const MapComp = () => {
  const [modal_stack, useModalParam] = useModalStack();

  const [cookie_data, _] = useCookieData();

  const [data, setData] = useState({
     valuation_header: {
      title: "서울시 강남구 강남로 1",
      sub_title: "강욱 빌딩",
      saved_name: "강남로 1, 210906-1",
    },
    cards: [],
  })

  useEffect(()=> {
      console.log(cookie_data);
      if(cookie_data?.data?.pilji_list != undefined){
        setData({
          valuation_header: {
            title: "서울시 강남구 강남로 1",
            sub_title: "강욱 빌딩",
            saved_name: "강남로 1, 210906-1",
          },
          cards: cookie_data.data.pilji_list.map(e => formatLandData(e)),
          // cookie_data.pilji_list.map(e => formatLandData(e)),
        }
      );
    }
  }, [cookie_data]);

  useDragScroll("container", () => {});

  return (
    <div className={cx("wrapper")}>
      <div className={cx("frame-page")}>
        <div className={cx("frame-header")}>
          <Header nav_emph="map" is_searchable={false} />
          <ComparisonHeader type="land" />
        </div>
        <div className={cx("frame-content")}>
          <div className={cx("frame-title")}>
            <LandDataCompCard id="-1" type="title" data={sample_content_data.data} />
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
