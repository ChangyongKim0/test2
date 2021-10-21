import React, { useEffect, useState } from "react";

import styles from "./BldgInfo.module.scss";
import classNames from "classnames/bind";
import ToolTip from "./ToolTip";
import BldgInfoBlob from "./BldgInfoBlob";
import BldgInfoText from "./BldgInfoText";

const cx = classNames.bind(styles);

const BldgInfo = ({
  price,
  noc,
  land_price_per_area,
  rent,
  opex,
  land_title,
  land_size,
  land_usage,
  usage_list,
  attachment_land,
  bldg_title,
  bldg_size,
  bldg_year,
  bldg_floor_area_ratio,
  bldg_floor,
  bldg_coverage_ratio,
  bldg_exclusive_rate,
  bldg_usage_list,
  bldg_detail,
  dev_title,
  dev_floor_area_ratio,
  dev_coverage_ratio,
  dev_height,
  dev_usage_list,
  official_price_title,
  official_price_year,
  official_price,
  siml_land_title,
  siml_land_address,
  siml_land_price,
}) => {
  let [show_info, setShowInfo] = useState(false);

  useEffect(() => {
    // console.log(keys);
    // console.log(vals);
  });

  return (
    <div className={cx("wrapper")}>
      <div className={cx("frame-column")}>
        <div className={cx("frame-div2")}>
          <BldgInfoText {...price} />
          <BldgInfoText {...noc} />
        </div>
        <div className={cx("frame-div4")}>
          <BldgInfoText {...land_price_per_area} />
          <div></div>
          <BldgInfoText {...rent} />
          <BldgInfoText {...opex} />
        </div>
      </div>
      <div className={cx("frame-column")}>
        <div className={cx("frame-div2")}>
          <BldgInfoText {...land_title} />
          <div className={cx("frame-div2")}>
            <BldgInfoText {...land_size} />
            <BldgInfoText {...land_usage} />
          </div>
        </div>
        <div className={cx("frame-div1")}>
          <BldgInfoBlob {...usage_list} />
        </div>
        <div className={cx("frame-div2")}>
          <BldgInfoText {...bldg_title} />
          <div className={cx("frame-column")}>
            <div className={cx("frame-div2")}>
              <BldgInfoText {...bldg_size} />
              <BldgInfoText {...bldg_year} />
            </div>
            <div className={cx("frame-div2")}>
              <BldgInfoText {...bldg_floor_area_ratio} />
              <BldgInfoText {...bldg_floor} />
            </div>
            <div className={cx("frame-div2")}>
              <BldgInfoText {...bldg_coverage_ratio} />
              <BldgInfoText {...bldg_exclusive_rate} />
            </div>
          </div>
        </div>
        <div className={cx("frame-div1")}>
          <BldgInfoBlob {...bldg_usage_list} />
        </div>
      </div>
      <div className={cx("frame-column")}></div>
      <div className={cx("frame-column")}>
        <div className={cx("frame-div1")}>
          <BldgInfoText {...official_price_title} />
        </div>
        <div className={cx("frame-div2")}></div>
      </div>
    </div>
  );
};

BldgInfo.defaultProps = {
  price: {
    component_type: "text",
    show: true,
    data: {
      title: "최근 실거래가",
      value: 200000000000,
      value_unit: "\u00A0원",
      base: "2019.03",
      base_unit: "",
      base_type: "string",
      value_type: "number",
    },
    style: "emph",
    tooltip: [],
  },
  noc: {
    component_type: "text",
    show: true,
    data: {
      title: "건물 명목 NOC",
      value: 274000,
      value_unit: "\u00A0원",
      value_type: "number",
    },
    style: "emph",
    tooltip: ["건물 명목 NOC =", "(평당+평당 관리비)/전용률"],
  },
  land_price_per_area: {
    component_type: "text",
    show: true,
    data: {
      title: "토지 평당 단가",
      value: 690000000,
      value_unit: "\u00A0원",
      value_type: "number",
    },
    style: "default",
    tooltip: ["거래가(원)/토지면적(평)"],
  },
  rent: {
    component_type: "text",
    show: true,
    data: {
      title: "평당 임대료",
      value: 111000,
      value_unit: "\u00A0원",
      value_type: "number",
    },
    style: "default",
    tooltip: ["전체 월 임대료/전용면적(평)"],
  },
  opex: {
    component_type: "text",
    show: true,
    data: {
      title: "평당 관리비",
      value: 48000,
      value_unit: "\u00A0원",
      value_type: "number",
    },
    style: "default",
    tooltip: ["전체 월 관리료/전용면적(평)"],
  },
  land_title: {
    component_type: "text",
    show: true,
    data: {
      title: "토지",
    },
    style: "title",
    tooltip: [],
  },
  land_size: {
    component_type: "text",
    show: true,
    data: {
      title: "면적",
      value: 1179,
      value_unit: "\u00A0[area]",
      value_type: "number_detail",
    },
    style: "default",
  },
  land_usage: {
    component_type: "text",
    show: true,
    data: {
      title: "이용상황",
      value: "업무용",
      value_unit: "",
      value_type: "string",
    },
    style: "default",
  },
  usage_list: {
    component_type: "blob",
    data: [
      {
        title: "서초로지구 지구단위계획",
        tooltip: ["토지e음으로 이동하기"],
        onClick: "토지계획이용원으로 링크",
      },
      {
        title: "일반상업지역",
        tooltip: ["토지e음으로 이동하기"],
        onClick: "토지계획이용원으로 링크",
      },
    ],
  },
  attachment_land: {
    component_type: "list",
    data: {
      title: "부속 필지",
      value: [
        [
          {
            value: "서울시 강남구 역삼동 101_1",
            value_unit: "",
            value_type: "string",
          },
          {
            value: 3537,
            value_unit: "\u00A0평",
            value_type: "number_detail",
          },
        ],
        [
          {
            value: "서울시 강남구 역삼동 101_1",
            value_unit: "",
            value_type: "string",
          },
          {
            value: 3537,
            value_unit: "\u00A0평",
            value_type: "number_detail",
          },
        ],
      ],
    },
    dropdown_from: 2,
  },
  bldg_title: {
    component_type: "text",
    show: true,
    data: {
      title: "건물1",
      base: "강욱 빌딩",
      base_type: "string",
    },
    style: "title",
    tooltip: [],
  },
  bldg_size: {
    component_type: "text",
    show: true,
    data: {
      title: "연면적",
      value: 4919,
      value_unit: "\u00A0평",
      value_type: "number_detail",
    },
    style: "default",
  },
  bldg_year: {
    component_type: "text",
    show: true,
    data: {
      title: "준공년도",
      value: "2019",
      value_unit: "년",
      value_type: "string",
    },
    style: "default",
  },
  bldg_floor_area_ratio: {
    component_type: "text",
    show: true,
    data: {
      title: "용적률",
      value: 4.59,
      value_unit: "\u00A0%",
      value_type: "rate_over",
    },
    style: "default",
  },
  bldg_floor: {
    component_type: "text",
    show: true,
    data: {
      title: "건물 규모",
      value: [-5, 20],
      value_unit: "",
      value_type: "floor_range",
    },
    style: "default",
  },
  bldg_coverage_ratio: {
    component_type: "text",
    show: true,
    data: {
      title: "건폐율",
      value: 0.47,
      value_unit: "\u00A0%",
      value_type: "rate",
    },
    style: "default",
  },
  bldg_exclusive_rate: {
    component_type: "text",
    show: true,
    data: {
      title: "전용률",
      value: 0.47,
      value_unit: "\u00A0%",
      value_type: "rate",
    },
    style: "default",
  },
  bldg_usage_list: {
    component_type: "blob",
    data: [
      {
        title: "업무시설",
        tooltip: ["토지e음으로 이동하기"],
      },
      {
        title: "1종근린생활시설",
        tooltip: ["토지e음으로 이동하기"],
      },
      {
        title: "교육연구",
        tooltip: ["토지e음으로 이동하기"],
      },
    ],
  },
  bldg_datail: {
    component_type: "list",
    data: {
      title: "건물 상세",
      value: [
        [
          {
            value: 4,
            value_unit: "F",
            value_type: "number_detail",
          },
          {
            value: "업무시설, 1종근린생활시설",
            value_unit: "",
            value_type: "string",
          },
          {
            value: "78",
            value_unit: "평",
            value_type: "number_detail",
          },
        ],
        [
          {
            value: 3,
            value_unit: "F",
            value_type: "number_detail",
          },
          {
            value: "1종근린생활시설, 교육연구",
            value_unit: "",
            value_type: "string",
          },
          {
            value: 56,
            value_unit: "평",
            value_type: "number_detail",
          },
        ],
      ],
    },
    dropdown_from: 2,
  },
  dev_title: {
    component_type: "text",
    show: true,
    data: {
      title: "개발 가능 한계",
    },
    style: "title",
    tooltip: [
      "서초로지구 지구단위계획에 의하였으며,",
      "일반상업지역에 적용되는 개발한계임",
    ],
  },
  dev_floor_area_ratio: {
    component_type: "text",
    show: true,
    data: {
      title: "최대 용적률",
      value: 8,
      value_unit: "\u00A0%",
      value_type: "rate_over",
    },
    style: "default",
  },
  dev_coverage_ratio: {
    component_type: "text",
    show: true,
    data: {
      title: "최대 건폐율",
      value: 0.6,
      value_unit: "\u00A0%",
      value_type: "rate",
    },
    style: "default",
  },
  dev_height: {
    component_type: "text",
    show: true,
    data: {
      title: "높이 제한",
      value: 70,
      value_unit: "\u00A0m",
      value_type: "number_detail",
    },
    style: "default",
  },
  dev_usage_list: {
    component_type: "blob",
    data: [
      {
        title: "서초로지구 지구단위계획",
        tooltip: ["클릭시 토지계획이용원으로 이동"],
        onClick: "토지계획이용원으로 링크",
      },
      {
        title: "일반상업지역",
        tooltip: ["클릭시 토지계획이용원으로 이동"],
        onClick: "토지계획이용원으로 링크",
      },
    ],
  },
  official_price_title: {
    component_type: "text",
    show: true,
    data: {
      title: "공시지가",
    },
    style: "title",
  },
  official_price_year: {
    component_type: "list",
    show: true,
    data: {
      title: "기준년도",
      value: [
        [
          {
            value: "2021.01",
            value_unit: "",
            value_type: "string",
          },
        ],
        [
          {
            value: "2020.01",
            value_unit: "",
            value_type: "string",
          },
        ],
        [
          {
            value: "2019.01",
            value_unit: "",
            value_type: "string",
          },
        ],
      ],
    },
    dropdown_from: 3,
  },
  official_price: {
    component_type: "list",
    show: true,
    data: {
      title: "공시지가",
      value: [
        [
          {
            value: 121500000,
            value_unit: "\u00A0원/평",
            value_type: "number",
          },
        ],
        [
          {
            value: 113200000,
            value_unit: "\u00A0원/평",
            value_type: "number",
          },
        ],
        [
          {
            value: 92300000,
            value_unit: "\u00A0원/평",
            value_type: "number",
          },
        ],
      ],
    },
    dropdown_from: 3,
  },
  siml_land_title: {
    component_type: "text",
    show: true,
    data: {
      title: "유사 매물",
    },
    style: "title",
  },
  siml_land_address: {
    component_type: "list",
    show: true,
    data: {
      title: "주소",
      value: [
        [
          {
            icon: "bookmark",
          },
          {
            value: "서초구 서초동 321",
            value_unit: "",
            value_type: "string",
          },
        ],
        [
          {
            icon: "bookmark",
          },
          {
            value: "강남구 역삼동 123",
            value_unit: "",
            value_type: "string",
          },
        ],
        [
          {
            icon: "bookmark",
          },
          {
            value: "강남구 역삼동 456",
            value_unit: "",
            value_type: "string",
          },
        ],
      ],
    },
    dropdown_from: 3,
  },
  siml_land_price: {
    component_type: "list",
    show: true,
    data: {
      title: "최근 실거래가",
      value: [
        [
          {
            value: 2630000,
            value_unit: "\u00A0원/평",
            value_type: "number_detail",
          },
        ],
        [
          {
            value: 2830000,
            value_unit: "\u00A0원/평",
            value_type: "number_detail",
          },
        ],
        [
          {
            value: 2310000,
            value_unit: "\u00A0원/평",
            value_type: "number_detail",
          },
        ],
      ],
    },
    dropdown_from: 3,
  },
};

export default BldgInfo;
