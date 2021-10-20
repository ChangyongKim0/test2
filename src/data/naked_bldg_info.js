const naked_data = {
  price: {
    component_type: "text",
    show: true,
    data: {
      title: "최근 실거래가",
      value: "2000억",
      value_unit: " 원",
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
      value: "27.4만",
      value_unit: " 원",
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
      value: "6.9억",
      value_unit: " 원",
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
      value: "11.1만",
      value_unit: " 원",
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
      value: "4.8만",
      value_unit: " 원",
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
      value: "1,179",
      value_unit: " 평",
      value_type: "number",
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
            value: "3,537",
            value_unit: " 평",
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
            value: "3,537",
            value_unit: " 평",
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
      value: "4,919",
      value_unit: " 평",
      value_type: "number",
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
      value_type: "number",
    },
    style: "default",
  },
  bldg_floor_area_ratio: {
    component_type: "text",
    show: true,
    data: {
      title: "용적률",
      value: "459",
      value_unit: " %",
      value_type: "rate_over",
    },
    style: "default",
  },
  bldg_floor: {
    component_type: "text",
    show: true,
    data: {
      title: "건물 규모",
      value: "20F/B6",
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
      value: "47",
      value_unit: " %",
      value_type: "rate",
    },
    style: "default",
  },
  bldg_exclusive_rate: {
    component_type: "text",
    show: true,
    data: {
      title: "전용률",
      value: "47",
      value_unit: " %",
      value_type: "rate",
    },
    style: "default",
  },
  bldg_usage_list: {
    component_type: "blob",
    data: [
      {
        title: "업무시설",
        tooltip: [],
      },
      {
        title: "1종근린생활시설",
        tooltip: [],
      },
      {
        title: "교육연구",
        tooltip: [],
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
            value: "4",
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
            value: "3",
            value_unit: "F",
            value_type: "number_detail",
          },
          {
            value: "1종근린생활시설, 교육연구",
            value_unit: "",
            value_type: "string",
          },
          {
            value: "56",
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
      value: "800",
      value_unit: " %",
      value_type: "rate_over",
    },
    style: "default",
  },
  dev_coverage_ratio: {
    component_type: "text",
    show: true,
    data: {
      title: "최대 건폐률",
      value: "60",
      value_unit: " %",
      value_type: "rate",
    },
    style: "default",
  },
  dev_height: {
    component_type: "text",
    show: true,
    data: {
      title: "높이 제한",
      value: "70",
      value_unit: " m",
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
            value: "1억 2,150만",
            value_unit: " 원/평",
            value_type: "number",
          },
        ],
        [
          {
            value: "1억 1,320만",
            value_unit: " 원/평",
            value_type: "number",
          },
        ],
        [
          {
            value: "9,230만",
            value_unit: " 원/평",
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
            value: "26.3만",
            value_unit: " 원/평",
            value_type: "number_detail",
          },
        ],
        [
          {
            value: "28.3만",
            value_unit: " 원/평",
            value_type: "number_detail",
          },
        ],
        [
          {
            value: "23.1만",
            value_unit: " 원/평",
            value_type: "number_detail",
          },
        ],
      ],
    },
    dropdown_from: 3,
  },
};
