export let formatted_data = {
  base: {
    land_area: {
      id: "base.land_area",
      title: "토지면적",
      base: "",
      value: "1,070",
      base_type: "",
      value_type: "number_detail",
      base_unit: "",
      value_unit: "\u00A0평",
    },
    use_area: {
      id: "base.use_area",
      title: "용도지역",
      base: "",
      value: "도시지역, 일반상업지역",
      base_type: "",
      value_type: "string",
      base_unit: "",
      value_unit: "",
    },
    recent_trade: {
      id: "base.recent_trade",
      title: "최근 실거래가",
      base: "19.4Q",
      value: "2,000억",
      base_type: "string",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원",
    },
    land_price_per_area: {
      id: "base.land_price_per_area",
      title: "토지면적당 단가",
      base: "",
      value: "6.9억",
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원/평",
    },
    floor_price_per_area: {
      id: "base.floor_price_per_area",
      title: "연면적당 단가",
      base: "",
      value: "1,575만",
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원/평",
    },
    noc: {
      id: "base.noc",
      title: "명목 NOC",
      base: "",
      value: "23.7만",
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원",
    },
    opex: {
      id: "base.opex",
      title: "면적당 임대료 / 관리비",
      base: "",
      value: "20만 / 4.7만",
      base_type: "",
      value_type: "string",
      base_unit: "",
      value_unit: "\u00A0원/평",
    },
    floor_area: {
      id: "base.floor_area",
      title: "연면적",
      base: "",
      value: "4,919",
      base_type: "",
      value_type: "number_detail",
      base_unit: "",
      value_unit: "\u00A0평",
    },
    far: {
      id: "base.far",
      title: "용적률",
      base: "",
      value: "459",
      base_type: "",
      value_type: "rate_over",
      base_unit: "",
      value_unit: "\u00A0%",
    },
    bcr_par: {
      id: "base.bcr_par",
      title: "건폐율 / 전용률",
      base: "",
      value: "47 / 58",
      base_type: "",
      value_type: "string",
      base_unit: "",
      value_unit: "\u00A0%",
    },
    size: {
      id: "base.size",
      title: "건물 규모",
      base: "",
      value: "20F / B6",
      base_type: "",
      value_type: "specific",
      base_unit: "",
      value_unit: "",
    },
    const_year: {
      id: "base.const_year",
      title: "준공년도",
      base: "",
      value: "2019",
      base_type: "",
      value_type: "string",
      base_unit: "",
      value_unit: "\u00A0년",
    },
  },
  archi: {
    floor_area: {
      id: "archi.floor_area",
      title: "총 연면적",
      base: "",
      value: "8,988",
      base_type: "",
      value_type: "number_detail",
      base_unit: "",
      value_unit: "\u00A0평",
    },
    bcr: {
      id: "archi.bcr",
      title: "건폐율",
      base: "60",
      value: "642",
      base_type: "rate",
      value_type: "number_detail",
      base_unit: "\u00A0%",
      value_unit: "\u00A0평",
    },
    far: {
      id: "archi.far",
      title: "용적률",
      base: "800",
      value: "8,580",
      base_type: "rate_over",
      value_type: "number_detail",
      base_unit: "\u00A0%",
      value_unit: "\u00A0평",
    },
    par: {
      id: "archi.par",
      title: "전용률",
      base: "60",
      value: "5,136",
      base_type: "rate",
      value_type: "number_detail",
      base_unit: "\u00A0%",
      value_unit: "\u00A0원",
    },
    high_floor: {
      id: "archi.high_floor",
      title: "고층부",
      base: "오피스",
      value: "3F-20F",
      base_type: "string",
      value_type: "floor_range",
      base_unit: "",
      value_unit: "\u00A0평",
    },
    hf_area: {
      id: "archi.hf_area",
      title: "예상 면적",
      base: "428",
      value: "7,704",
      base_type: "number_detail",
      value_type: "number_detail",
      base_unit: "\u00A0평/층",
      value_unit: "\u00A0평",
    },
    hf_parea: {
      id: "archi.parea",
      title: "예상 전용면적",
      base: "257",
      value: "4,622",
      base_type: "number_detail",
      value_type: "number_detail",
      base_unit: "\u00A0평/층",
      value_unit: "\u00A0평",
    },
    low_floor: {
      id: "archi.low_floor",
      title: "저층부",
      base: "상업",
      value: "B1-2",
      base_type: "string",
      value_type: "floor_range",
      base_unit: "",
      value_unit: "",
    },
    lf_area: {
      id: "archi.lf_area",
      title: "예상 면적",
      base: "428",
      value: "1,284",
      base_type: "number_detail",
      value_type: "number_detail",
      base_unit: "\u00A0평/층",
      value_unit: "\u00A0평",
    },
    lf_parea: {
      id: "archi.lf_parea",
      title: "예상 전용면적",
      base: "257",
      value: "770",
      base_type: "number_detail",
      value_type: "number_detail",
      base_unit: "\u00A0평/층",
      value_unit: "\u00A0평",
    },
  },
  rent: {
    noi: {
      id: "rent.noi",
      title: "연 NOI",
      base: "",
      value: "168.3억",
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원/년",
    },
    hf_rent: {
      id: "rent.hf_rent",
      title: "고층부 임대료(월)",
      base: "",
      value: "27만",
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원/전용평",
    },
    hf_opex: {
      id: "rent.hf_opex",
      title: "관리, 운영비(월)",
      base: "4만",
      value: "4만",
      base_type: "number",
      value_type: "number",
      base_unit: "\u00A0원",
      value_unit: "\u00A0원",
    },
    hf_noi: {
      id: "rent.hf_noi",
      title: "NOC, 월NOI/평",
      base: "33.7만",
      value: "16.2만",
      base_type: "number",
      value_type: "number",
      base_unit: "\u00A0원",
      value_unit: "\u00A0원/평",
    },
    lf_rent: {
      id: "rent.lf_rent",
      title: "저층부 임대료(월)",
      base: "",
      value: "20만",
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원/전용평",
    },
    lf_opex: {
      id: "rent.lf_opex",
      title: "관리, 운영비(월)",
      base: "5만",
      value: "5만",
      base_type: "number",
      value_type: "number",
      base_unit: "\u00A0원",
      value_unit: "\u00A0원",
    },
    lf_noi: {
      id: "rent.lf_noi",
      title: "NOC, 월NOI/평",
      base: "28.3만",
      value: "12만",
      base_type: "number",
      value_type: "number",
      base_unit: "\u00A0원",
      value_unit: "\u00A0원/평",
    },
  },
  use: {
    tic: {
      id: "use.tic",
      title: "총투자액",
      base: "",
      value: "4,000억",
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원",
    },
    buy_total: {
      id: "use.buy_total",
      title: "매매비용 계",
      base: "",
      value: "3,287억",
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원",
    },
    buy_price: {
      id: "use.buy_price",
      title: "토지 구매비",
      base: "8.2억",
      value: "3,100억",
      base_type: "number",
      value_type: "number",
      base_unit: "\u00A0원/평",
      value_unit: "\u00A0원",
    },
    buy_support: {
      id: "use.buy_support",
      title: "매매 부대비",
      base: "5.5",
      value: "187억",
      base_type: "rate",
      value_type: "number",
      base_unit: "\u00A0%",
      value_unit: "\u00A0원",
    },
    buy_fee: {
      id: "use.buy_fee",
      title: "매입보수",
      base: "1.0",
      value: "40억",
      base_type: "rate",
      value_type: "number",
      base_unit: "\u00A0%",
      value_unit: "\u00A0원",
    },
    brok_fee: {
      id: "use.brok_fee",
      title: "중개보수",
      base: "0.6",
      value: "18.6억",
      base_type: "rate",
      value_type: "number",
      base_unit: "\u00A0%",
      value_unit: "\u00A0원",
    },
    const_tax: {
      id: "use.const_tax",
      title: "건설기간보유세",
      base: "12억",
      value: "24억",
      base_type: "number",
      value_type: "number",
      base_unit: "\u00A0원/년",
      value_unit: "\u00A0원",
    },
    am_pm_fee: {
      id: "use.am_pm_fee",
      title: "AM/PM보수",
      base: "12억",
      value: "24억",
      base_type: "number",
      value_type: "number",
      base_unit: "\u00A0원/년",
      value_unit: "\u00A0원",
    },
    buy_reserve: {
      id: "use.buy_reserve",
      title: "예비비",
      base: "12억",
      value: "20억",
      base_type: "number",
      value_type: "number",
      base_unit: "\u00A0원/년",
      value_unit: "\u00A0원",
    },
    const_total: {
      id: "use.const_total",
      title: "건축비용 계",
      base: "",
      value: "780억",
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원",
    },
    const_price: {
      id: "use.const_price",
      title: "건축 공사비",
      base: "790만",
      value: "644억",
      base_type: "number",
      value_type: "number",
      base_unit: "\u00A0원/평",
      value_unit: "\u00A0원",
    },
    indr_const_price: {
      id: "use.indr_const_price",
      title: "간접 공사비",
      base: "80만",
      value: "84.7억",
      base_type: "number",
      value_type: "number",
      base_unit: "\u00A0원/평",
      value_unit: "\u00A0원",
    },
    fin_total: {
      id: "use.fin_total",
      title: "금융비용 계",
      base: "",
      value: "350억",
      base_type: "number",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원",
    },
    pf_interest: {
      id: "use.pf_interest",
      title: "PF이자",
      base: "5.5",
      value: "340억",
      base_type: "rate",
      value_type: "number",
      base_unit: "\u00A0%",
      value_unit: "\u00A0원",
    },
    other_fee: {
      id: "use.other_fee",
      title: "기타 수수료",
      base: "1.0",
      value: "10억",
      base_type: "rate",
      value_type: "number",
      base_unit: "\u00A0%",
      value_unit: "\u00A0원",
    },
    other_total: {
      id: "use.other_total",
      title: "기타비용 계",
      base: "",
      value: "102.3억",
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원",
    },
    ti_rent_fee: {
      id: "use.ti_rent_fee",
      title: "TI/임대수수료",
      base: "200만",
      value: "56.8억",
      base_type: "number",
      value_type: "number",
      base_unit: "\u00A0원/전용평",
      value_unit: "\u00A0원",
    },
    stable_reserve: {
      id: "use.stable_reserve",
      title: "안정화예비비",
      base: "",
      value: "55.5억",
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원",
    },
  },
  src: {
    src_total: {
      id: "src.src_total",
      title: "필요 자금 총액",
      base: "",
      value: "4,000억",
      base_type: "rate",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원",
    },
    debt_interest: {
      id: "src.debt_interest",
      title: "대출 이자율",
      base: "",
      value: "5.5",
      base_type: "rate",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0%",
    },
    pf: {
      id: "src.pf",
      title: "PF 대출",
      base: "75",
      value: "3,000억",
      base_type: "rate",
      value_type: "number",
      base_unit: "\u00A0%",
      value_unit: "\u00A0원",
    },
    tr_a: {
      id: "src.tr_a",
      title: "Tr-A",
      base: "5.8",
      value: "2,000억",
      base_type: "rate",
      value_type: "number",
      base_unit: "\u00A0%",
      value_unit: "\u00A0원",
    },
    tr_b: {
      id: "src.tr_b",
      title: "Tr-B",
      base: "5.2",
      value: "1,000억",
      base_type: "rate",
      value_type: "number",
      base_unit: "\u00A0%",
      value_unit: "\u00A0원",
    },
    equity: {
      id: "src.equity",
      title: "자본금",
      base: "25",
      value: "1,000억",
      base_type: "rate",
      value_type: "number",
      base_unit: "\u00A0%",
      value_unit: "\u00A0원",
    },
    pref_share: {
      id: "src.pref_share",
      title: "우선주",
      base: "",
      value: "400억",
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원",
    },
    common_share: {
      id: "src.common_share",
      title: "보통주",
      base: "",
      value: "600억",
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원",
    },
  },
  other: {
    cap: {
      id: "other.cap",
      title: "Cap-Rate",
      base: "",
      value: "3.9",
      base_type: "",
      value_type: "rate",
      base_unit: "",
      value_unit: "\u00A0%",
    },
    period_total: {
      id: "other.period_total",
      title: "예상 사업 기간",
      base: "",
      value: "30",
      base_type: "",
      value_type: "number_detail",
      base_unit: "",
      value_unit: "\u00A0개월",
    },
  },
  result: {
    sell_price: {
      id: "result.sell_price",
      title: "예상 매각금액",
      base: "",
      value: "4,314억",
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원",
    },
    return: {
      id: "result.return",
      title: "사업이익",
      base: "",
      value: "114.2억",
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원",
    },
    roe: {
      id: "result.roe",
      title: "수익률(ROE)",
      base: "",
      value: "10.9",
      base_type: "",
      value_type: "rate_over",
      base_unit: "",
      value_unit: "\u00A0%",
    },
    irr: {
      id: "result.irr",
      title: "연 수익률(IRR)",
      base: "",
      value: "5.44",
      base_type: "",
      value_type: "rate_over",
      base_unit: "",
      value_unit: "\u00A0%",
    },
  },
};

export const default_data = {
  id: 1,
  use_mini_map: false,
  mini_map: {
    level: 3,
    pos_list:
      "127.02473058 37.49791889 127.02435588 37.49780526 127.02440471 37.4977032 127.02441654 37.49767838 127.02403691 37.49756322 127.02409308 37.49744545 127.02414913 37.49732768 127.0242053 37.49720991 127.02422135 37.49717621 127.0243247 37.49713961 127.02462926 37.49723307 127.02481451 37.49728998 127.02500339 37.49734796 127.02492292 37.49751638 127.02484788 37.49767344 127.02477937 37.49781679 127.02473058 37.49791889",
  },
  title: "title",
  sub_title: "sub_title",
  total_info: [
    { value: "[0].value", unit: "[0].u" },
    { value: "[1].value", unit: "[1].u" },
  ],
  data: [
    [
      {
        data: {
          title: "[0][0]title",
          base: "base",
          base_unit: "u.",
          base_type: "rate",
          value: "value",
          value_unit: "u.",
          value_type: "number",
        },
        is_placeholder: {
          base: true,
          value: true,
        },
        onEnterPress: {
          Base: () => {},
          Value: () => {},
        },
        type: "total",
        use_tooltip: {
          title: false,
          base: false,
          value: false,
        },
        tooltip: {
          title: ["tooltip.title[0]", "tooltip.title[1]"],
          base: ["tooltip.base[0]", "tooltip.base[1]"],
          value: ["tooltip.value[0]", "tooltip.value[1]"],
        },
      },
      {
        data: {
          title: "[0][1]title",
          base: "base",
          base_unit: "u.",
          base_type: "rate",
          value: "value",
          value_unit: "u.",
          value_type: "number",
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
          base: false,
          value: false,
        },
        tooltip: {
          title: ["tooltip.title[0]", "tooltip.title[1]"],
          base: ["tooltip.base[0]", "tooltip.base[1]"],
          value: ["tooltip.value[0]", "tooltip.value[1]"],
        },
      },
    ],
    [
      {
        data: {
          title: "[1][0]title",
          base: "base",
          base_unit: "u.",
          base_type: "rate",
          value: "value",
          value_unit: "u.",
          value_type: "number",
        },
        is_placeholder: {
          base: true,
          value: true,
        },
        onEnterPress: {
          Base: () => {},
          Value: () => {},
        },
        type: "total",
        use_tooltip: {
          title: false,
          base: false,
          value: false,
        },
        tooltip: {
          title: ["tooltip.title[0]", "tooltip.title[1]"],
          base: ["tooltip.base[0]", "tooltip.base[1]"],
          value: ["tooltip.value[0]", "tooltip.value[1]"],
        },
      },
      {
        data: {
          title: "[1][1]title",
          base: "base",
          base_unit: "u.",
          base_type: "rate",
          value: "value",
          value_unit: "u.",
          value_type: "number",
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
          base: false,
          value: false,
        },
        tooltip: {
          title: ["tooltip.title[0]", "tooltip.title[1]"],
          base: ["tooltip.base[0]", "tooltip.base[1]"],
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

const getFooterData = (formatted_data) => {
  const x = formatted_data.result;
  return {
    id: "result",
    data: [x.sell_price, x.return, x.roe, x.irr],
  };
};

const getOtherData = (formatted_data) => {
  const x = formatted_data.other;
  return {
    id: "other",
    title: "기타 가정",
    sub_title: "기간 및 Cap-Rate",
    total_info: [],
    data: [
      [
        {
          data: {
            ...x.period_total,
          },
          is_placeholder: {
            base: false,
            value: true,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "total",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
        {
          data: {
            ...x.cap,
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
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
      ],
    ],
  };
};

const getSrcData = (formatted_data) => {
  const x = formatted_data.src;
  return {
    id: "src",
    title: "자금 가정",
    sub_title: "필요 자금 총액 / 대출 이자율",
    total_info: [
      { value: x.src_total.value, unit: x.src_total.value_unit },
      { value: x.debt_interest.value, unit: x.debt_interest.value_unit },
    ],
    data: [
      [
        {
          data: {
            ...x.pf,
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
          tooltip: {
            title: [],
            base: ["사업자금 총액 대비 비율"],
            value: [],
          },
        },
        {
          data: {
            ...x.tr_a,
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
          tooltip: {
            title: [],
            base: ["이자율"],
            value: [],
          },
        },
        {
          data: {
            ...x.tr_b,
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
          tooltip: {
            title: [],
            base: ["이자율"],
            value: [],
          },
        },
      ],
      [
        {
          data: {
            ...x.equity,
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
          tooltip: {
            title: [],
            base: ["사업자금 총액 대비 비율"],
            value: [],
          },
        },
        {
          data: {
            ...x.pref_share,
          },
          is_placeholder: {
            base: true,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: { title: [], base: [], value: [] },
        },
        {
          data: {
            ...x.common_share,
          },
          is_placeholder: {
            base: false,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
      ],
    ],
    style: "white",
    use_plus: true,
    handlePlus: () => {},
  };
};

const getUseData = (formatted_data) => {
  const x = formatted_data.use;
  return {
    id: "use",
    title: "비용 가정",
    sub_title: "토지 구매비 등 부대 비용 총합",
    total_info: [{ value: x.tic.value, unit: x.tic.value_unit }],
    data: [
      [
        {
          data: {
            ...x.buy_total,
          },
          is_placeholder: {
            base: false,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "total",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
        {
          data: {
            ...x.buy_price,
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
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
        {
          data: {
            ...x.buy_support,
          },
          is_placeholder: {
            base: true,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: ["토지구매비용 대비"],
            value: [],
          },
        },
        {
          data: {
            ...x.buy_fee,
          },
          is_placeholder: {
            base: true,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: ["사업비 대비"],
            value: [],
          },
        },
        {
          data: {
            ...x.brok_fee,
          },
          is_placeholder: {
            base: true,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: ["토지구매비용 대비"],
            value: [],
          },
        },
        {
          data: {
            ...x.const_tax,
          },
          is_placeholder: {
            base: true,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
        {
          data: {
            ...x.am_pm_fee,
          },
          is_placeholder: {
            base: true,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
        {
          data: {
            ...x.buy_reserve,
          },
          is_placeholder: {
            base: true,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
      ],
      [
        {
          data: {
            ...x.const_total,
          },
          is_placeholder: {
            base: false,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "total",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
        {
          data: {
            ...x.const_price,
          },
          is_placeholder: {
            base: true,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: { title: [], base: ["건물 가정 연면적 기준"], value: [] },
        },
        {
          data: {
            ...x.indr_const_price,
          },
          is_placeholder: {
            base: true,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: ["건물 가정 연면적 기준"],
            value: [],
          },
        },
      ],
      [
        {
          data: {
            ...x.fin_total,
          },
          is_placeholder: {
            base: false,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "total",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
        {
          data: {
            ...x.pf_interest,
          },
          is_placeholder: {
            base: false,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: ["이자율"],
            value: [],
          },
        },
        {
          data: {
            ...x.other_fee,
          },
          is_placeholder: {
            base: true,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: ["PF 이자 대비"],
            value: [],
          },
        },
      ],
      [
        {
          data: {
            ...x.other_total,
          },
          is_placeholder: {
            base: false,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "total",
          tooltip: {
            title: [],
            base: ["대출 금액 대비"],
            value: [],
          },
        },
        {
          data: {
            ...x.ti_rent_fee,
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
          tooltip: {
            title: [],
            base: ["대출 금액 대비"],
            value: [],
          },
        },
        {
          data: {
            ...x.stable_reserve,
          },
          is_placeholder: {
            base: false,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: ["100억 단위 맞춤"],
            base: [],
            value: ["100억 단위 맞춤"],
          },
        },
      ],
    ],
    style: "white",
    use_plus: true,
    handlePlus: () => {},
  };
};

const getRentData = (formatted_data) => {
  const x = formatted_data.rent;
  return {
    id: "rent",
    title: "수익 가정",
    sub_title: "연간 건물 임대 수익 추정치(연 NOI)",
    total_info: [{ value: x.noi.value, unit: x.noi.value_unit }],
    data: [
      [
        {
          data: {
            ...x.hf_noi,
          },
          is_placeholder: {
            base: false,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "total",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
        {
          data: {
            ...x.hf_rent,
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
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
        {
          data: {
            ...x.hf_opex,
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
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
      ],
      [
        {
          data: {
            ...x.lf_noi,
          },
          is_placeholder: {
            base: false,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "total",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
        {
          data: {
            ...x.lf_rent,
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
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
        {
          data: {
            ...x.lf_opex,
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
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
      ],
    ],
    style: "white",
    use_plus: true,
    handlePlus: () => {},
  };
};

const getArchiData = (formatted_data) => {
  const x = formatted_data.archi;
  return {
    id: "archi",
    title: "건물 가정",
    sub_title: "신축 건물 설계 가정(총 연면적)",
    total_info: [{ value: x.floor_area.value, unit: x.floor_area.value_unit }],
    data: [
      [
        {
          data: {
            ...x.bcr,
          },
          is_placeholder: {
            base: true,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
        {
          data: {
            ...x.far,
          },
          is_placeholder: {
            base: true,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
        {
          data: {
            ...x.par,
          },
          is_placeholder: {
            base: true,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
      ],
      [
        {
          data: {
            ...x.high_floor,
          },
          is_placeholder: {
            base: true,
            value: true,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "total",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
        {
          data: {
            ...x.hf_area,
          },
          is_placeholder: {
            base: false,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
        {
          data: {
            ...x.hf_parea,
          },
          is_placeholder: {
            base: false,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
      ],
      [
        {
          data: {
            ...x.low_floor,
          },
          is_placeholder: {
            base: true,
            value: true,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "total",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
        {
          data: {
            ...x.lf_area,
          },
          is_placeholder: {
            base: false,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
        {
          data: {
            ...x.lf_parea,
          },
          is_placeholder: {
            base: false,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
      ],
    ],
    style: "white",
    use_plus: true,
    handlePlus: () => {},
  };
};

const getBaseData = (formatted_data, mini_map_data) => {
  const x = formatted_data.base;
  return {
    id: "base",
    title: "필지 정보",
    sub_title: "필지 기본 정보",
    total_info: [],
    use_mini_map: true,
    mini_map: mini_map_data,
    data: [
      [
        {
          data: {
            ...x.land_area,
          },
          is_placeholder: {
            base: false,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
        {
          data: {
            ...x.use_area,
          },
          is_placeholder: {
            base: false,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
      ],
      [
        {
          data: {
            ...x.recent_trade,
          },
          is_placeholder: {
            base: false,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },

        {
          data: {
            ...x.land_price_per_area,
          },
          is_placeholder: {
            base: false,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
        {
          data: {
            ...x.floor_price_per_area,
          },
          is_placeholder: {
            base: false,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
        {
          data: {
            ...x.noc,
          },
          is_placeholder: {
            base: false,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
        {
          data: {
            ...x.opex,
          },
          is_placeholder: {
            base: false,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
      ],
      [
        {
          data: {
            ...x.floor_area,
          },
          is_placeholder: {
            base: false,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
        {
          data: {
            ...x.far,
          },
          is_placeholder: {
            base: false,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
        {
          data: {
            ...x.bcr_par,
          },
          is_placeholder: {
            base: false,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
        {
          data: {
            ...x.size,
          },
          is_placeholder: {
            base: false,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
        {
          data: {
            ...x.const_year,
          },
          is_placeholder: {
            base: false,
            value: false,
          },
          onEnterPress: {
            Base: () => {},
            Value: () => {},
          },
          type: "default",
          tooltip: {
            title: [],
            base: [],
            value: [],
          },
        },
      ],
    ],
    style: "white",
    use_plus: false,
    handlePlus: () => {},
  };
};

const wrapValuation = (input_data, mini_map_data) => {
  const base = getBaseData(input_data, mini_map_data);
  const archi = getArchiData(input_data);
  const rent = getRentData(input_data);
  const use = getUseData(input_data);
  const src = getSrcData(input_data);
  const other = getOtherData(input_data);
  const footer = getFooterData(input_data);
  return {
    base: base,
    archi: archi,
    rent: rent,
    use: use,
    src: src,
    other: other,
    footer: footer,
  };
};

export default wrapValuation;
