import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import "../util/reset.css";
import axios from "axios";
import { API_URI } from "../src_shortcut";
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
import { createModalStack } from "../hooks/useModal";
import useDragScroll from "../hooks/useDragScroll";
import wrapValuation from "../data/wrapValuation";
import useEnterAsTab from "../hooks/useEnterAsTab";
import useValuationCalculator from "../hooks/useValuationCalculator";
import useUnitType from "../hooks/useUnitType";
import formatValuation from "../data/formatValuation";
import useBldgInfoData from "../hooks/useBldgInfoData";
import { SERVICE_URI } from "../src_shortcut";
import useCookieData from "../hooks/useCookieData";

const cx = classNames.bind(styles);
// var mapDiv = document.getElementById('map');
// var map = new naver.maps.Map(mapDiv);

const addressReducer = (state, action) => {
  // console.log("primary address is changed");
  return action;
};

const reduceMousePressContainer = (state, action) => {
  if (action.type) {
    return "not-draggable";
  } else {
    return "";
  }
};

const luseModalStack = createModalStack();

const Valuation = ({ history }) => {
  
  const [modal_stack, useModalParam] = luseModalStack();
  const [unit_type, _] = useUnitType();

  const [naked_data, setValuationCalculator] = useValuationCalculator();
  const [bldg_info_data, handleBldgInfoData] = useBldgInfoData();
  const [cookie_data, _2] = useCookieData();

  const mini_map_data = useMemo(() => {
    if (bldg_info_data?.data?.land?.pos_list == undefined && cookie_data?.data?.pnu != undefined){
      // window.location.href = SERVICE_URI;
      console.log(bldg_info_data);
      console.log(cookie_data);
      setTimeout(() => {
        axios
          .put(API_URI + "bldgInfo", {
            id: cookie_data.data.pnu,
            latlng: cookie_data.data.latlng,
          })
          .then((res) => {
            console.log(res);
            handleBldgInfoData({
              type: "update",
              pnu: cookie_data.data.pnu,
              latlng: cookie_data.data.latlng,
              data: res.data,
            });
          });
      }, 0);
    }
    console.log(bldg_info_data);
    return {
      level: 3,
      pos_list: bldg_info_data?.data?.land?.pos_list || "127.02473058 37.49791889 127.02435588 37.49780526 127.02440471 37.4977032 127.02441654 37.49767838 127.02403691 37.49756322 127.02409308 37.49744545 127.02414913 37.49732768 127.0242053 37.49720991 127.02422135 37.49717621 127.0243247 37.49713961 127.02462926 37.49723307 127.02481451 37.49728998 127.02500339 37.49734796 127.02492292 37.49751638 127.02484788 37.49767344 127.02477937 37.49781679 127.02473058 37.49791889",
      pnu: bldg_info_data?.pnu,
      latlng: bldg_info_data?.latlng,
    };
  },[cookie_data, bldg_info_data]);

  const wrapped_data = useMemo(() => {
    console.log("data wrapped.");
    console.log(naked_data);
    return wrapValuation(formatValuation(naked_data, unit_type),mini_map_data);
  }, [naked_data, mini_map_data]);

  // const [mouse_press_container, handleMousePressContainer] = useReducer(
  //   reduceMousePressContainer,
  //   ""
  // );

  useLayoutEffect(() => {
    setValuationCalculator({ type: "update base data", data: bldg_info_data.data, id: "base" });
    console.log(bldg_info_data);
  }, [bldg_info_data]);

  const handleFocus = ({ id, type, value }) => {
    console.log(id, type, value);
    setValuationCalculator({
      id: id,
      type: "update",
      value: value,
      unit_type: unit_type,
    });
  };

  const data = useMemo(() => {
    return {
      valuation_header: {
        title: bldg_info_data.data.addr || "주소 없음",
        sub_title: bldg_info_data.data.bldg_exists? bldg_info_data.data.bldg.bldg_info_list[bldg_info_data.data.bldg_idx]?.road_addr:"도로명 주소 없음",
        saved_name: bldg_info_data.saved_name || "아직 저장되지 않았어요",
      },
      cards: [
        [wrapped_data.base],
        [wrapped_data.archi, wrapped_data.rent],
        [wrapped_data.use],
        [wrapped_data.src, wrapped_data.other],
      ],
      footer: wrapped_data.footer,
    };
  }, [naked_data, mini_map_data, bldg_info_data]);

  useDragScroll("container", () => {});

  useEnterAsTab("container");

  return (
    <div className={cx("wrapper")}>
      <div className={cx("frame-page")}>
        <div className={cx("frame-header")}>
          <Header
            nav_emph="valuation"
            is_searchable={false}
            use_sub_button={true}
            sub_button_name="밸류에이션 비교하기"
            link_sub_button_to="/valuation/comp"
          />
          <ValuationHeader
            useModalParam={useModalParam}
            {...data.valuation_header}
            history={history}
            save_data={{
              naked_data: naked_data,
              mini_map_data: mini_map_data,
              valuation_header: data.valuation_header,
            }}
          />
        </div>
        <div id="container" className={cx("frame-content")}>
          {data.cards.map((e, idx) => {
            let comp = e.map((e2, idx2) => {
              return (
                <AssumptionCard
                  key={idx2}
                  {...e2}
                  useModalParam={useModalParam}
                  handleFocus={handleFocus}
                />
              );
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
