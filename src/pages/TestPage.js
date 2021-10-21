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

const assumptionTextBundle = () => {
  return (
    <>
      <AssumptionText
        data={{
          title: "매매비용 계",
          base: "5",
          base_unit: "\u00A0%",
          value: "3,200",
          value_unit: "억 원",
        }}
        is_placeholder={{
          base: true,
          value: true,
        }}
        type="default"
        use_tooltip={{ title: true, base: true, value: true }}
        tooltip={{
          title: ["매매비용의 합계입니다."],
          base: ["무엇 대비"],
          value: ["총 매매비용"],
        }}
      />
      <AssumptionText
        data={{
          title: "매매비용 계",
          base: "",
          base_unit: "",
          value: "3,200",
          value_unit: "억 원",
        }}
        is_placeholder={{
          base: false,
          value: true,
        }}
        type="default"
        use_tooltip={{ title: true, base: false, value: true }}
        tooltip={{
          title: ["매매비용의 합계입니다."],
          value: ["총 매매비용"],
        }}
      />
      <AssumptionText
        data={{
          title: "매매비용 계",
          base: "5",
          base_unit: "\u00A0%",
          value: "3,200",
          value_unit: "억 원",
        }}
        is_placeholder={{
          base: true,
          value: false,
        }}
        type="default"
        use_tooltip={{ title: true, base: false, value: false }}
        tooltip={{
          title: ["나머지 텍스트는 툴팁을", "사용하지 않았습니다."],
        }}
      />
      <AssumptionText
        data={{
          title: "매매비용 계",
          base: "5",
          base_unit: "\u00A0%",
          value: "3,200",
          value_unit: "억 원",
        }}
        is_placeholder={{
          base: false,
          value: true,
        }}
        type="default"
      />
      <AssumptionText
        data={{
          title: "매매비용 계",
          base: "",
          base_unit: "",
          value: "3,200",
          value_unit: "억 원",
        }}
        is_placeholder={{
          base: false,
          value: false,
        }}
        type="default"
      />
      <AssumptionText
        data={{
          title: "매매비용 계",
          base: "5",
          base_unit: "\u00A0%",
          value: "3,200",
          value_unit: "억 원",
        }}
        is_placeholder={{
          base: false,
          value: false,
        }}
        type="default"
      />
      <AssumptionText
        data={{
          title: "매매비용 계",
          base: "5",
          base_unit: "\u00A0%",
          value: "3,200",
          value_unit: "억 원",
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
          title="서울시 강남구 강남로 1"
          sub_title="강욱 빌딩"
          saved_name="강남로 1, 210906-1"
        />
        <p className={cx("title")}>ComparisonHeader</p>
        <ComparisonHeader useModalParam={useModalParam} />
        <ComparisonHeader useModalParam={useModalParam} type="land" />
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
        <div className={cx("map-wrapper")}>{/* <BackgroundMap /> */}</div>
        <p className={cx("title")}>AddressModal</p>
        <AddressModal />
        <AddressModal address={"서울시 종로구 소공동"} />
        <p className={cx("title")}>ToolTip</p>
        <ToolTip />
        <ToolTip data={["샘플로 작성된", "툴팁입니다."]}>
          <div className={cx("event")}>HOVER_EVENT</div>
        </ToolTip>
        <p className={cx("title")}>BldgInfoText</p>
        <BldgInfoText />
        <BldgInfoText
          data={{
            title: "최근 실거래가",
            value: 200000000000,
            value_unit: " 원",
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
            title: "최근 실거래가",
            value: 200000000000,
            value_unit: " 원",
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
          title="밸류에이션 저장"
          placeholder="강남로 1, 210906-1"
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
            { title: "예상 사업 기간", value: "30", unit: "개월" },
            { title: "매각금액 가정", value: "5,424", unit: "억 원" },
            { title: "수익률", value: "4.34", unit: "%" },
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
              data={{ title: "최근 실거래가", value: "2,000", unit: "억 원" }}
              tooltip={{
                title: [
                  "최근 실거래가는",
                  "국토교통부 공시 자료를",
                  "바탕으로 합니다.",
                ],
                value: ["정말 비싸군요 ㄷㄷ.."],
              }}
              use_tooltip={{ title: true, value: true, second_value: true }}
            />
            <ValuationCompText
              style="detail"
              data={{
                title: "취득세 등 부대비용",
                value: "18,000",
                unit: "백만 원",
                second_value: "5.5",
                second_unit: "\u00A0%",
              }}
              tooltip={{
                title: ["다른 텍스트는", "툴팁을 제거해 보았습니다."],
              }}
              use_tooltip={{ title: true, value: false, second_value: false }}
            />
          </div>
          <div className={cx("background-dark")}>
            <ValuationCompText
              style="total"
              data={{
                title: "매각예상가",
                value: "5,500",
                unit: "억 원",
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
                title: "최근 실거래가",
                value: "2,000억",
                unit: "\u00A0원",
              }}
              tooltip={["꽤 비싼 금액이네요."]}
            />
            <LandDataCompText
              use_tooltip={true}
              data={{
                title: "규모",
                value: "B6 / 32F",
                unit: "",
              }}
              tooltip={["단위를 사용하지 않는 케이스."]}
            />
          </div>
        </div>
        <p className={cx("title")}>AddModal</p>
        <AddModal />
        <AddModal title="밸류에이션 값 추가" />
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
