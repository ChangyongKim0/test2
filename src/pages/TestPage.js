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
import MiniMap from "../atom/MiniMap";
import InfoBubble from "../components/InfoBubble";
import BldgInfo from "../components/BldgInfo";
import BldgInfoModal from "../components/BldgInfoModal";
import ToolTip from "../components/ToolTip";
import BarChart from "../components/BarChart";
import Dropdown from "../components/Dropdown";
import ValuationHeader from "../components/ValuationHeader";
import axios from "axios";
import CtaButton from "../atom/CtaButton";
import { useModalStack } from "../hooks/useModal";
import ComparisonHeader from "../components/ComparisonHeader";
import ValuationFooter from "../components/ValuationFooter";
import AssumptionText from "../components/AssumptionText";
import ValuationCompText from "../components/ValuationCompText";
import LandDataCompText from "../components/LandDataCompText";
import AddModal from "../components/AddModal";
import AssumptionCard from "../components/AssumptionCard";
import ValuationCompCard from "../components/ValuationCompCard";
import LandDataCompCard from "../components/LandDataCompCard";
import BldgInfoText from "../components/BldgInfoText";
import BldgInfoBlob from "../components/BldgInfoBlob";
import BldgInfoList from "../components/BldgInfoList";

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
        ??????????????????
      </CtaButton>
      <CtaButton size="small" icon="none" shape="round" background="color">
        ??????????????? ??????
      </CtaButton>
      <CtaButton size="medium" icon="none" shape="round" background="color">
        ??????????????? ??????
      </CtaButton>
      <CtaButton size="big" icon="none" shape="round" background="color">
        ??????????????? ??????
      </CtaButton>
      <CtaButton size="small" icon="chart" shape="square" background="color">
        ??????????????? ??????
      </CtaButton>
      <CtaButton size="medium" icon="chart" shape="square" background="color">
        ??????????????? ??????
      </CtaButton>
      <CtaButton size="big" icon="chart" shape="square" background="color">
        ??????????????? ??????
      </CtaButton>
      <CtaButton size="small" icon="change" shape="round" background="white">
        ??????????????? ??????
      </CtaButton>
      <CtaButton size="medium" icon="change" shape="round" background="white">
        ??????????????? ??????
      </CtaButton>
      <CtaButton size="big" icon="change" shape="round" background="white">
        ??????????????? ??????
      </CtaButton>
      <CtaButton
        size="small"
        icon="change"
        shape="round"
        background="white"
        border="gray"
      >
        ??????????????? ??????
      </CtaButton>
      <CtaButton
        size="medium"
        icon="change"
        shape="round"
        background="white"
        border="gray"
      >
        ??????????????? ??????
      </CtaButton>
      <CtaButton
        size="big"
        icon="change"
        shape="round"
        background="white"
        border="gray"
      >
        ??????????????? ??????
      </CtaButton>
      <CtaButton
        size="small"
        icon="default"
        shape="round"
        background="transparent"
      >
        ??????????????? ??????
      </CtaButton>
      <CtaButton
        size="medium"
        icon="default"
        shape="round"
        background="transparent"
      >
        ??????????????? ??????
      </CtaButton>
      <CtaButton
        size="big"
        icon="default"
        shape="round"
        background="transparent"
      >
        ??????????????? ??????
      </CtaButton>
    </>
  );
};

const assumptionTextBundle = () => {
  return (
    <>
      <AssumptionText
        data={{
          title: "???????????? ???",
          base: "5",
          base_unit: "\u00A0%",
          value: "3,200",
          value_unit: "??? ???",
        }}
        is_placeholder={{
          base: true,
          value: true,
        }}
        type="default"
        use_tooltip={{ title: true, base: true, value: true }}
        tooltip={{
          title: ["??????????????? ???????????????."],
          base: ["?????? ??????"],
          value: ["??? ????????????"],
        }}
      />
      <AssumptionText
        data={{
          title: "???????????? ???",
          base: "",
          base_unit: "",
          value: "3,200",
          value_unit: "??? ???",
        }}
        is_placeholder={{
          base: false,
          value: true,
        }}
        type="default"
        use_tooltip={{ title: true, base: false, value: true }}
        tooltip={{
          title: ["??????????????? ???????????????."],
          value: ["??? ????????????"],
        }}
      />
      <AssumptionText
        data={{
          title: "???????????? ???",
          base: "5",
          base_unit: "\u00A0%",
          value: "3,200",
          value_unit: "??? ???",
        }}
        is_placeholder={{
          base: true,
          value: false,
        }}
        type="default"
        use_tooltip={{ title: true, base: false, value: false }}
        tooltip={{
          title: ["????????? ???????????? ?????????", "???????????? ???????????????."],
        }}
      />
      <AssumptionText
        data={{
          title: "???????????? ???",
          base: "5",
          base_unit: "\u00A0%",
          value: "3,200",
          value_unit: "??? ???",
        }}
        is_placeholder={{
          base: false,
          value: true,
        }}
        type="default"
      />
      <AssumptionText
        data={{
          title: "???????????? ???",
          base: "",
          base_unit: "",
          value: "3,200",
          value_unit: "??? ???",
        }}
        is_placeholder={{
          base: false,
          value: false,
        }}
        type="default"
      />
      <AssumptionText
        data={{
          title: "???????????? ???",
          base: "5",
          base_unit: "\u00A0%",
          value: "3,200",
          value_unit: "??? ???",
        }}
        is_placeholder={{
          base: false,
          value: false,
        }}
        type="default"
      />
      <AssumptionText
        data={{
          title: "???????????? ???",
          base: "5",
          base_unit: "\u00A0%",
          value: "3,200",
          value_unit: "??? ???",
        }}
        is_placeholder={{
          base: true,
          value: true,
        }}
        type="total"
      />
    </>
  );
};

const assumptionCardBundle = (useModalParam) => {
  let properties = {
    use_mini_map: false,
    minimap: { center: "0,0", pnu: "0" },
    title: "?????? ??????",
    sub_title: "?????? ?????? ????????? ?????? ?????????",
    total_info: [
      { value: "4,000???", unit: "???" },
      { value: "5.5", unit: "%" },
    ],
    data: [
      [
        {
          data: {
            title: "PF ??????",
            base: "75",
            base_unit: "\u00A0%",
            value: "3,000???",
            value_unit: "\u00A0???",
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
            base: ["???????????? ?????? ?????? ??????"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
          },
        },
        {
          data: {
            title: "Tr-A",
            base: "5.8",
            base_unit: "\u00A0%",
            value: "2,000???",
            value_unit: "\u00A0???",
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
            base: ["?????????"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
          },
        },
        {
          data: {
            title: "Tr-B",
            base: "5.2",
            base_unit: "\u00A0%",
            value: "1,000???",
            value_unit: "\u00A0???",
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
            base: ["?????????"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
          },
        },
      ],
      [
        {
          data: {
            title: "?????????",
            base: "25",
            base_unit: "\u00A0%",
            value: "1,000???",
            value_unit: "\u00A0???",
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
            base: ["???????????? ?????? ?????? ??????"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
          },
        },
        {
          data: {
            title: "?????????",
            base: "",
            base_unit: "",
            value: "400???",
            value_unit: "\u00A0???",
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
            title: "?????????",
            base: "",
            base_unit: "",
            value: "600???",
            value_unit: "\u00A0???",
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

  return (
    <>
      <AssumptionCard {...properties} useModalParam={useModalParam} />
    </>
  );
};

const valuationCompCardBundle = () => {
  let properties = {
    data: {
      content: [
        [
          {
            data: {
              title: "??????",
              value: "????????? ????????? ????????? 101-1",
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
              title: "?????? ??????",
              value: "1,070",
              unit: "\u00A0???",
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
              title: "?????? ?????????",
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
              title: "????????????",
              value: "??????????????????",
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
              title: "?????? ????????????",
              value: "2,000???",
              unit: "\u00A0???",
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
              title: "?????????(?????? NOC)",
              value: "20???",
              unit: "\u00A0???/?????????/???",
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
              title: "?????? ?????????",
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
              value: ["????????? ??????"],
              second_value: [],
            },
            style: "default",
          },
          {
            data: {
              title: "?????? ?????????",
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
              value: ["????????? ??????"],
              second_value: [],
            },
            style: "default",
          },
          {
            data: {
              title: "?????? ?????????",
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
              value: ["????????? ??????"],
              second_value: [],
            },
            style: "default",
          },
          {
            data: {
              title: "?????????",
              value: "4,949",
              unit: "\u00A0???",
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
              value: ["????????? ??????"],
              second_value: [],
            },
            style: "default",
          },
        ],
        [
          {
            data: {
              title: "?????? ??????",
              value: "3,200???",
              unit: "\u00A0???",
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
              title: "?????? ??????",
              value: "3,200???",
              unit: "\u00A0???",
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
              title: "????????? ??? ????????????",
              value: "18,700??????",
              unit: "\u00A0???",
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
              title: "????????????",
              value: "18,700??????",
              unit: "\u00A0???",
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
              title: "????????????",
              value: "2,040??????",
              unit: "\u00A0???",
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
              title: "?????????????????????",
              value: "2,400??????",
              unit: "\u00A0???",
              second_value: "1,200??????",
              second_unit: "\u00A0???/???",
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
              title: "AM/PM??????",
              value: "2,400??????",
              unit: "\u00A0???",
              second_value: "1,200??????",
              second_unit: "\u00A0???/???",
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
              title: "?????????",
              value: "2,000??????",
              unit: "\u00A0???",
              second_value: "1,200??????",
              second_unit: "\u00A0???/???",
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
              title: "?????? ??????",
              value: "760???",
              unit: "\u00A0???",
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
              title: "?????? ??????",
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
              title: "?????????",
              value: "28???",
              unit: "\u00A0???/?????????/???",
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
            title: "?????????",
            value: "4,000???",
            unit: "\u00A0???",
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
            title: "?????????",
            value: "673.6???",
            unit: "\u00A0???",
            second_value: "",
            second_unit: "",
          },
        },
        {
          data: {
            title: "???????????????",
            value: "4,600???",
            unit: "\u00A0???",
            second_value: "",
            second_unit: "",
          },
        },
        {
          data: {
            title: "?????????",
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
  return (
    <>
      <ValuationCompCard {...properties} />
    </>
  );
};

const landDataCompCardBundle = () => {
  const properties = {
    id: "land_data_comp_card_2",
    minimap: {
      level: 3,
      pos_list:
        "127.02473058 37.49791889 127.02435588 37.49780526 127.02440471 37.4977032 127.02441654 37.49767838 127.02403691 37.49756322 127.02409308 37.49744545 127.02414913 37.49732768 127.0242053 37.49720991 127.02422135 37.49717621 127.0243247 37.49713961 127.02462926 37.49723307 127.02481451 37.49728998 127.02500339 37.49734796 127.02492292 37.49751638 127.02484788 37.49767344 127.02477937 37.49781679 127.02473058 37.49791889",
    },
    title: "????????? ????????? ????????? 120",
    data: {
      content: [
        [
          {
            data: {
              title: "?????? ??????",
              value: "2019 1Q",
              unit: "",
            },
          },
          {
            data: {
              title: "?????? ????????????",
              value: "2,000???",
              unit: "\u00A0???",
            },
          },
          {
            data: {
              title: "?????? ?????? ??????",
              value: "6.9???",
              unit: "\u00A0???/???",
            },
          },
          {
            data: {
              title: "?????? NOC",
              value: "274,987",
              unit: "\u00A0???",
            },
          },
          {
            data: {
              title: "?????? ?????????",
              value: "111,000",
              unit: "\u00A0???",
            },
          },
          {
            data: {
              title: "?????? ?????????",
              value: "47,500",
              unit: "\u00A0???",
            },
          },
        ],
        [
          {
            data: {
              title: "?????? ??????",
              value: "3,537",
              unit: "\u00A0???",
            },
          },
          {
            data: {
              title: "?????????",
              value: "16,234",
              unit: "\u00A0???",
            },
          },
          {
            data: {
              title: "?????????",
              value: "459",
              unit: "\u00A0%",
            },
          },
          {
            data: {
              title: "??????",
              value: "B6 / 32F",
              unit: "",
            },
          },
          {
            data: {
              title: "????????????",
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
  return <LandDataCompCard {...properties} />;
};

const TestPage = () => {
  const [toggle_type_state, setTTState] = useToggleState({
    SSM: false,
    Dropdown: false,
  });

  const [modal_stack, useModalParam] = useModalStack();
  const [open_SSM, setOpenSSM, registerSSM] = useModalParam();

  useEffect(() => {
    registerSSM(<SaveSuccessModal open={true} setOpen={setOpenSSM} />);
  }, [open_SSM]);

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
        <ValuationHeader useModalParam={useModalParam} />
        {/* <div>{Object.keys(modal_stack).map((e) => e)}</div>
        <ValuationHeader useModalParam={useModalParam} /> */}
        <ValuationHeader
          useModalParam={useModalParam}
          title="????????? ????????? ????????? 1"
          sub_title="?????? ??????"
          saved_name="????????? 1, 210906-1"
        />
        <p className={cx("title")}>ComparisonHeader</p>
        <ComparisonHeader useModalParam={useModalParam} />
        <ComparisonHeader useModalParam={useModalParam} type="land" />
        <p className={cx("title")}>InfoBubble</p>
        <InfoBubble />
        <InfoBubble
          data={{
            price: "2,000???",
            date: "'20.03",
            price_per_py: "250,000???/???",
          }}
        />
        <p className={cx("title")}>BackgroundMap</p>
        <div className={cx("map-wrapper")}>{/* <BackgroundMap /> */}</div>
        <p className={cx("title")}>AddressModal</p>
        <AddressModal />
        <AddressModal address={"????????? ????????? ?????????"} />
        <p className={cx("title")}>ToolTip</p>
        <ToolTip />
        <ToolTip data={["????????? ?????????", "???????????????."]}>
          <div className={cx("event")}>HOVER_EVENT</div>
        </ToolTip>
        <p className={cx("title")}>BldgInfoText</p>
        <BldgInfoText />
        <BldgInfoText
          data={{
            title: "?????? ????????????",
            value: 200000000000,
            value_unit: "?????",
            base: "2019.03",
            base_unit: "",
            base_type: "string",
            value_type: "number",
          }}
          style="default"
          tooltip={[]}
        />
        <BldgInfoText
          data={{
            title: "?????? ????????????",
            value: 200000000000,
            value_unit: "?????",
            base: "2019.03",
            base_unit: "",
            base_type: "string",
            value_type: "number",
          }}
          style="emph"
          tooltip={[]}
        />
        <p className={cx("title")}>BldgInfoList</p>
        <BldgInfoList />
        <div className={cx("background-white")}>
          <p className={cx("title")}>BldgInfoBlob</p>
          <BldgInfoBlob />
          <p className={cx("title")}>BldgInfo</p>
          <BldgInfo />
        </div>
        <p className={cx("title")}>BldgInfoModal</p>
        <BldgInfoModal />
        <p className={cx("title")}>BookMarkModal</p>
        <BookMarkModal useModalParam={useModalParam} />
        <BookMarkModal
          title="??????????????? ??????"
          placeholder="????????? 1, 210906-1"
          useModalParam={useModalParam}
        />
        <p className={cx("title")}>SaveSuccessModal</p>
        {/* <SaveSuccessModal /> */}
        <div
          className={cx("event")}
          onClick={() => {
            setOpenSSM(true);
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
            { title: "?????? ?????? ??????", value: "30", unit: "??????" },
            { title: "???????????? ??????", value: "5,424", unit: "??? ???" },
            { title: "?????????", value: "4.34", unit: "%" },
          ]}
        />
        <div className={cx("background")}>
          <div className={cx("background-white")}>
            <p className={cx("title")}>AssumptionText</p>
            <AssumptionText force_use_tooltip={true} />
            {assumptionTextBundle()}
            <p className={cx("title")}>ValuationCompText</p>
            <ValuationCompText
              use_tooltip={{ title: true, value: true, second_value: true }}
            />
            <ValuationCompText
              style="detail"
              use_tooltip={{ title: true, value: true, second_value: true }}
            />
          </div>
          <div className={cx("background-dark")}>
            <ValuationCompText
              style="total"
              use_tooltip={{ title: true, value: true, second_value: true }}
            />
          </div>
          <div className={cx("background-white")}>
            <ValuationCompText
              style="default"
              data={{ title: "?????? ????????????", value: "2,000", unit: "??? ???" }}
              tooltip={{
                title: [
                  "?????? ???????????????",
                  "??????????????? ?????? ?????????",
                  "???????????? ?????????.",
                ],
                value: ["?????? ???????????? ??????.."],
              }}
              use_tooltip={{ title: true, value: true, second_value: true }}
            />
            <ValuationCompText
              style="detail"
              data={{
                title: "????????? ??? ????????????",
                value: "18,000",
                unit: "?????? ???",
                second_value: "5.5",
                second_unit: "\u00A0%",
              }}
              tooltip={{
                title: ["?????? ????????????", "????????? ????????? ???????????????."],
              }}
              use_tooltip={{ title: true, value: false, second_value: false }}
            />
          </div>
          <div className={cx("background-dark")}>
            <ValuationCompText
              style="total"
              data={{
                title: "???????????????",
                value: "5,500",
                unit: "??? ???",
              }}
              use_tooltip={{ title: false, value: false, second_value: false }}
            />
          </div>
          <div className={cx("background-white")}>
            <p className={cx("title")}>LandDataCompText</p>
            <LandDataCompText use_tooltip={true} />
            <LandDataCompText
              use_tooltip={true}
              data={{
                title: "?????? ????????????",
                value: "2,000???",
                unit: "\u00A0???",
              }}
              tooltip={["??? ?????? ???????????????."]}
            />
            <LandDataCompText
              use_tooltip={true}
              data={{
                title: "??????",
                value: "B6 / 32F",
                unit: "",
              }}
              tooltip={["????????? ???????????? ?????? ?????????."]}
            />
          </div>
        </div>
        <p className={cx("title")}>AddModal</p>
        <AddModal />
        <AddModal title="??????????????? ??? ??????" />
        <p className={cx("title")}>AssumptionCard</p>
        <AssumptionCard
          force_use_tooltip={true}
          useModalParam={useModalParam}
        />
        <AssumptionCard
          total_info={[]}
          force_use_tooltip={true}
          useModalParam={useModalParam}
        />
        <AssumptionCard
          id="assumption_card_1"
          use_mini_map={true}
          total_info={[]}
          force_use_tooltip={true}
          use_plus={false}
          useModalParam={useModalParam}
        />
        {assumptionCardBundle(useModalParam)}
        <p className={cx("title")}>ValuationCompCard</p>
        <ValuationCompCard force_use_tooltip={true} />
        {valuationCompCardBundle()}
        <p className={cx("title")}>LandDataCompCard</p>
        <LandDataCompCard id="land_data_comp_card_1" force_use_tooltip={true} />
        {landDataCompCardBundle()}
        <p className={cx("title")}>MiniMap</p>
        <div className={cx("map-wrapper")}>
          <MiniMap />
        </div>
        <p className={cx("title")}>END OF PAGE</p>
      </div>
      <div className={cx("modal-area")}>
        <div>{Object.values(modal_stack).map((e) => e.component)}</div>
      </div>
    </div>
  );
};

export default TestPage;
