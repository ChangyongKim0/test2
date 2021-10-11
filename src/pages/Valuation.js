import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
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
import wrapValuation from "../data/wrapValuation";
import useEnterAsTab from "../hooks/useEnterAsTab";
import useValuationCalculator from "../hooks/useValuationCalculator";

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

const Valuation = () => {
  const [modal_stack, useModalParam] = useModalStack();

  const [new_formatted_data, setValuationCalculator] = useValuationCalculator();

  const mini_map_data = {
    level: 3,
    pos_list:
      "127.02473058 37.49791889 127.02435588 37.49780526 127.02440471 37.4977032 127.02441654 37.49767838 127.02403691 37.49756322 127.02409308 37.49744545 127.02414913 37.49732768 127.0242053 37.49720991 127.02422135 37.49717621 127.0243247 37.49713961 127.02462926 37.49723307 127.02481451 37.49728998 127.02500339 37.49734796 127.02492292 37.49751638 127.02484788 37.49767344 127.02477937 37.49781679 127.02473058 37.49791889",
  };

  const wrapped_data = useMemo(
    () => wrapValuation(new_formatted_data, mini_map_data),
    [new_formatted_data, mini_map_data]
  );

  // const [mouse_press_container, handleMousePressContainer] = useReducer(
  //   reduceMousePressContainer,
  //   ""
  // );

  // useLayoutEffect(() => {
  //   setValuationCalculator({ type: "create", data: formatted_data });
  // }, []);

  const handleFocus = ({ id, type, value }) => {
    console.log(id, type, value);
    setValuationCalculator({ id: id, type: "updated", value: value });
  };

  const data = useMemo(() => {
    return {
      valuation_header: {
        title: "서울시 강남구 강남로 1",
        sub_title: "강욱 빌딩",
        saved_name: "강남로 1, 210906-1",
      },
      cards: [
        [wrapped_data.base],
        [wrapped_data.archi, wrapped_data.rent],
        [wrapped_data.use],
        [wrapped_data.src, wrapped_data.other],
      ],
      footer: wrapped_data.footer,
    };
  }, [new_formatted_data, mini_map_data]);

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
