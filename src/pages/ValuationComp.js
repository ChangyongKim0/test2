import React, { useEffect, useReducer, useState } from "react";
import "../util/reset.css";
// import RenderAfterNavermapsLoaded from "../components/RenderAfterNavermapsLoaded";
// import Location from "../components/location";
import BackgroundMap from "../components/BackgroundMap";
import BldgInfoModal from "../components/BldgInfoModal";
import AddressModal from "../components/AddressModal";

import styles from "./ValuationComp.module.scss";
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
import useCookieData from "../hooks/useCookieData";
import useUnitType from "../hooks/useUnitType";
import wrapValuationComp from "../data/wrapValucationComp";
import formatValuation from "../data/formatValuation";

const cx = classNames.bind(styles);
// var mapDiv = document.getElementById('map');
// var map = new naver.maps.Map(mapDiv);

const addressReducer = (state, action) => {
  // console.log("primary address is changed");
  return action;
};

const sample_content_data = {
  data: {},
  style: "white",
  handleClick: () => {},
  force_use_tooltip: false,
};

const wrapDataFromCookie = (cookie_data, unit_type) => {
  console.log(cookie_data);
  if (cookie_data.data.valuation_list == undefined) {
    return [];
  } else {
    return cookie_data.data.valuation_list.map((e) => {
      return {
        saved_name: e.save_name,
        content: wrapValuationComp(
          formatValuation(e.naked_data, unit_type),
          e.valuation_header.title
        ),
      };
    });
  }
};

const ValuationComp = () => {
  const [modal_stack, useModalParam] = useModalStack();
  const [cookie_data, handleCookieData] = useCookieData();
  const [unit_type, _] = useUnitType();

  useDragScroll("container", () => {});

  return (
    <div className={cx("wrapper")}>
      <div className={cx("frame-page")}>
        <div className={cx("frame-header")}>
          <Header nav_emph="valuation" is_searchable={false} />
          <ComparisonHeader type="valuation" />
        </div>
        <div id="container" className={cx("frame-content")}>
          {wrapDataFromCookie(cookie_data, unit_type).map((e, idx) => {
            return (
              <div className={cx("frame-column")} key={idx}>
                <CtaButton
                  size="big"
                  background="transparent"
                  icon="chart"
                  is_clickable={false}
                >
                  {e.saved_name}
                </CtaButton>
                <div>
                  <ValuationCompCard key={idx} {...e.content} />
                </div>
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

export default ValuationComp;
