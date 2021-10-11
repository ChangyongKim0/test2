let calculate_data = {
  base: {
    land_area: {
      id: "base.land_area",
      title: "토지면적",
      base: "",
      value: 1070,
      base_type: "",
      value_type: "number_detail",
      base_unit: "",
      value_unit: "\u00A0[area]",
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
      value: 200000000000,
      base_type: "string",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원",
    },
    land_price_per_area: {
      id: "base.land_price_per_area",
      title: "토지면적당 단가",
      base: "",
      value: 690000000,
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원/[area]",
    },
    floor_price_per_area: {
      id: "base.floor_price_per_area",
      title: "연면적당 단가",
      base: "",
      value: 15750000,
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원/[area]",
    },
    noc: {
      id: "base.noc",
      title: "명목 NOC",
      base: "",
      value: 237000,
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원",
    },
    opex: {
      id: "base.opex",
      title: "면적당 임대료 / 관리비",
      base: "",
      value: [200000, 47000],
      base_type: "",
      value_type: "number list",
      base_unit: "",
      value_unit: "\u00A0원/[area]",
    },
    floor_area: {
      id: "base.floor_area",
      title: "연면적",
      base: "",
      value: 4919,
      base_type: "",
      value_type: "number_detail",
      base_unit: "",
      value_unit: "\u00A0[area]",
    },
    far: {
      id: "base.far",
      title: "용적률",
      base: "",
      value: 4.59,
      base_type: "",
      value_type: "rate_over",
      base_unit: "",
      value_unit: "\u00A0%",
    },
    bcr_par: {
      id: "base.bcr_par",
      title: "건폐율 / 전용률",
      base: "",
      value: [0.47, 0.58],
      base_type: "",
      value_type: "rate list",
      base_unit: "",
      value_unit: "\u00A0%",
    },
    size: {
      id: "base.size",
      title: "건물 규모",
      base: "",
      value: "20F / B6",
      base_type: "",
      value_type: "string",
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
      value: 8988,
      base_type: "",
      value_type: "number_detail",
      base_unit: "",
      value_unit: "\u00A0[area]",
    },
    bcr: {
      id: "archi.bcr",
      title: "건폐율",
      base: 0.6,
      value: 642,
      base_type: "rate",
      value_type: "number_detail",
      base_unit: "\u00A0%",
      value_unit: "\u00A0[area]",
    },
    far: {
      id: "archi.far",
      title: "용적률",
      base: 8.0,
      value: 8580,
      base_type: "rate_over",
      value_type: "number_detail",
      base_unit: "\u00A0%",
      value_unit: "\u00A0[area]",
    },
    par: {
      id: "archi.par",
      title: "전용률",
      base: 0.6,
      value: 5136,
      base_type: "rate",
      value_type: "number_detail",
      base_unit: "\u00A0%",
      value_unit: "\u00A0원",
    },
    high_floor: {
      id: "archi.high_floor",
      title: "고층부",
      base: "오피스",
      value: [3, 20],
      base_type: "string",
      value_type: "floor_range",
      base_unit: "",
      value_unit: "\u00A0[area]",
    },
    hf_area: {
      id: "archi.hf_area",
      title: "예상 면적",
      base: 428,
      value: 7704,
      base_type: "number_detail",
      value_type: "number_detail",
      base_unit: "\u00A0[area]/층",
      value_unit: "\u00A0[area]",
    },
    hf_parea: {
      id: "archi.parea",
      title: "예상 전용면적",
      base: 257,
      value: 4622,
      base_type: "number_detail",
      value_type: "number_detail",
      base_unit: "\u00A0[area]/층",
      value_unit: "\u00A0[area]",
    },
    low_floor: {
      id: "archi.low_floor",
      title: "저층부",
      base: "상업",
      value: [0, 2],
      base_type: "string",
      value_type: "floor_range",
      base_unit: "",
      value_unit: "",
    },
    lf_area: {
      id: "archi.lf_area",
      title: "예상 면적",
      base: 428,
      value: 1284,
      base_type: "number_detail",
      value_type: "number_detail",
      base_unit: "\u00A0[area]/층",
      value_unit: "\u00A0[area]",
    },
    lf_parea: {
      id: "archi.lf_parea",
      title: "예상 전용면적",
      base: 257,
      value: 770,
      base_type: "number_detail",
      value_type: "number_detail",
      base_unit: "\u00A0[area]/층",
      value_unit: "\u00A0[area]",
    },
  },
  rent: {
    noi: {
      id: "rent.noi",
      title: "연 NOI",
      base: "",
      value: 16830000000,
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원/년",
    },
    hf_rent: {
      id: "rent.hf_rent",
      title: "고층부 임대료(월)",
      base: "",
      value: 270000,
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원/[parea]",
    },
    hf_opex: {
      id: "rent.hf_opex",
      title: "관리, 운영비(월)",
      base: 40000,
      value: 40000,
      base_type: "number",
      value_type: "number",
      base_unit: "\u00A0원",
      value_unit: "\u00A0원",
    },
    hf_noi: {
      id: "rent.hf_noi",
      title: "NOC, 월NOI/[area]",
      base: 337000,
      value: 162000,
      base_type: "number",
      value_type: "number",
      base_unit: "\u00A0원",
      value_unit: "\u00A0원/[area]",
    },
    lf_rent: {
      id: "rent.lf_rent",
      title: "저층부 임대료(월)",
      base: "",
      value: 200000,
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원/[parea]",
    },
    lf_opex: {
      id: "rent.lf_opex",
      title: "관리, 운영비(월)",
      base: 50000,
      value: 50000,
      base_type: "number",
      value_type: "number",
      base_unit: "\u00A0원",
      value_unit: "\u00A0원",
    },
    lf_noi: {
      id: "rent.lf_noi",
      title: "NOC, 월NOI/[area]",
      base: 283000,
      value: 120000,
      base_type: "number",
      value_type: "number",
      base_unit: "\u00A0원",
      value_unit: "\u00A0원/[area]",
    },
  },
  use: {
    tic: {
      id: "use.tic",
      title: "총투자액",
      base: "",
      value: 400000000000,
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원",
    },
    buy_total: {
      id: "use.buy_total",
      title: "매매비용 계",
      base: "",
      value: 328700000000,
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원",
    },
    buy_price: {
      id: "use.buy_price",
      title: "토지 구매비",
      base: 8200000000,
      value: 310000000000,
      base_type: "number",
      value_type: "number",
      base_unit: "\u00A0원/[area]",
      value_unit: "\u00A0원",
    },
    buy_support: {
      id: "use.buy_support",
      title: "매매 부대비",
      base: 0.055,
      value: 18700000000,
      base_type: "rate",
      value_type: "number",
      base_unit: "\u00A0%",
      value_unit: "\u00A0원",
    },
    buy_fee: {
      id: "use.buy_fee",
      title: "매입보수",
      base: 0.01,
      value: 4000000000,
      base_type: "rate",
      value_type: "number",
      base_unit: "\u00A0%",
      value_unit: "\u00A0원",
    },
    brok_fee: {
      id: "use.brok_fee",
      title: "중개보수",
      base: 0.006,
      value: 1860000000,
      base_type: "rate",
      value_type: "number",
      base_unit: "\u00A0%",
      value_unit: "\u00A0원",
    },
    const_tax: {
      id: "use.const_tax",
      title: "건설기간보유세",
      base: 1200000000,
      value: 2400000000,
      base_type: "number",
      value_type: "number",
      base_unit: "\u00A0원/년",
      value_unit: "\u00A0원",
    },
    am_pm_fee: {
      id: "use.am_pm_fee",
      title: "AM/PM보수",
      base: 1200000000,
      value: 2400000000,
      base_type: "number",
      value_type: "number",
      base_unit: "\u00A0원/년",
      value_unit: "\u00A0원",
    },
    buy_reserve: {
      id: "use.buy_reserve",
      title: "예비비",
      base: 1200000000,
      value: 2000000000,
      base_type: "number",
      value_type: "number",
      base_unit: "\u00A0원/년",
      value_unit: "\u00A0원",
    },
    const_total: {
      id: "use.const_total",
      title: "건축비용 계",
      base: "",
      value: 78000000000,
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원",
    },
    const_price: {
      id: "use.const_price",
      title: "건축 공사비",
      base: 7900000,
      value: 64400000000,
      base_type: "number",
      value_type: "number",
      base_unit: "\u00A0원/[area]",
      value_unit: "\u00A0원",
    },
    indr_const_price: {
      id: "use.indr_const_price",
      title: "간접 공사비",
      base: 800000,
      value: 8470000000,
      base_type: "number",
      value_type: "number",
      base_unit: "\u00A0원/[area]",
      value_unit: "\u00A0원",
    },
    fin_total: {
      id: "use.fin_total",
      title: "금융비용 계",
      base: "",
      value: 35000000000,
      base_type: "number",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원",
    },
    pf_interest: {
      id: "use.pf_interest",
      title: "PF이자",
      base: 0.055,
      value: 34000000000,
      base_type: "rate",
      value_type: "number",
      base_unit: "\u00A0%",
      value_unit: "\u00A0원",
    },
    other_fee: {
      id: "use.other_fee",
      title: "기타 수수료",
      base: 0.01,
      value: 1000000000,
      base_type: "rate",
      value_type: "number",
      base_unit: "\u00A0%",
      value_unit: "\u00A0원",
    },
    other_total: {
      id: "use.other_total",
      title: "기타비용 계",
      base: "",
      value: 10230000000,
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원",
    },
    ti_rent_fee: {
      id: "use.ti_rent_fee",
      title: "TI/임대수수료",
      base: 2000000,
      value: 5680000000,
      base_type: "number",
      value_type: "number",
      base_unit: "\u00A0원/[parea]",
      value_unit: "\u00A0원",
    },
    stable_reserve: {
      id: "use.stable_reserve",
      title: "안정화예비비",
      base: "",
      value: 5550000000,
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
      value: 400000000000,
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원",
    },
    debt_interest: {
      id: "src.debt_interest",
      title: "대출 이자율",
      base: "",
      value: 0.055,
      base_type: "",
      value_type: "rate",
      base_unit: "",
      value_unit: "\u00A0%",
    },
    pf: {
      id: "src.pf",
      title: "PF 대출",
      base: 0.75,
      value: 300000000000,
      base_type: "rate",
      value_type: "number",
      base_unit: "\u00A0%",
      value_unit: "\u00A0원",
    },
    tr_a: {
      id: "src.tr_a",
      title: "Tr-A",
      base: 0.058,
      value: 200000000000,
      base_type: "rate",
      value_type: "number",
      base_unit: "\u00A0%",
      value_unit: "\u00A0원",
    },
    tr_b: {
      id: "src.tr_b",
      title: "Tr-B",
      base: 0.052,
      value: 100000000000,
      base_type: "rate",
      value_type: "number",
      base_unit: "\u00A0%",
      value_unit: "\u00A0원",
    },
    equity: {
      id: "src.equity",
      title: "자본금",
      base: 0.25,
      value: 100000000000,
      base_type: "rate",
      value_type: "number",
      base_unit: "\u00A0%",
      value_unit: "\u00A0원",
    },
    pref_share: {
      id: "src.pref_share",
      title: "우선주",
      base: "",
      value: 40000000000,
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원",
    },
    common_share: {
      id: "src.common_share",
      title: "보통주",
      base: "",
      value: 60000000000,
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
      value: 0.039,
      base_type: "",
      value_type: "rate",
      base_unit: "",
      value_unit: "\u00A0%",
    },
    period_total: {
      id: "other.period_total",
      title: "예상 사업 기간",
      base: "",
      value: 30,
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
      value: 431400000000,
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원",
    },
    return: {
      id: "result.return",
      title: "사업이익",
      base: "",
      value: 11420000000,
      base_type: "",
      value_type: "number",
      base_unit: "",
      value_unit: "\u00A0원",
    },
    roe: {
      id: "result.roe",
      title: "수익률(ROE)",
      base: "",
      value: 0.109,
      base_type: "",
      value_type: "rate_over",
      base_unit: "",
      value_unit: "\u00A0%",
    },
    irr: {
      id: "result.irr",
      title: "연 수익률(IRR)",
      base: "",
      value: 0.0544,
      base_type: "",
      value_type: "rate_over",
      base_unit: "",
      value_unit: "\u00A0%",
    },
  },
};

const calculateValuation = (naked_data, id) => {
  const base = naked_data.base;
  const archi = naked_data.archi;
  const rent = naked_data.rent;
  const use = naked_data.use;
  const src = naked_data.src;
  const other = naked_data.other;
  const result = naked_data.result;

  switch (id) {
    case "src.pref_share.value":
      src.common_share.value = src.equity.value - src.pref_share.value;
    case "src.common_share.value":
      src.pref_share.value = src.equity.value - src.common_share.value;
    case "src.tr_a.value":
      src.tr_b.value = src.pf.value - src.tr_a.value;
    case "src.tr_b.value":
      src.tr_a.value = src.pf.value - src.tr_b.value;
    case "src.pf.base":
      src.equity.base = 1.0 - src.pf.base;
    case "src.equity.base":
      src.pf.base = 1.0 - src.equity.base;
  }

  // 건축 가정
  archi.bcr.value = archi.bcr.base * base.land_area.value;
  archi.far.value = archi.far.base * base.land_area.value;
  archi.par.value = archi.par.base * archi.far.value;

  // 건축 가정
  archi.hf_area.base = archi.far.value / archi.high_floor.value[1];
  archi.lf_area.base = archi.hf_area.base;
  archi.hf_parea.base = archi.hf_area.value * archi.par.value;
  archi.lf_parea.base = archi.hf_parea.value;
  archi.hf_area.value =
    archi.hf_area.base *
    (archi.high_floor.value[1] - archi.high_floor.value[0] + 1);
  archi.lf_area.value =
    archi.lf_area.base *
    (archi.low_floor.value[1] - archi.low_floor.value[0] + 1);
  archi.floor_area.value = archi.hf_area.value + archi.lf_area.value;

  // 임대 가정
  rent.hf_noi.value =
    rent.hf_rent.value * archi.par.base +
    rent.hf_opex.base -
    rent.hf_opex.value;
  rent.lf_noi.value =
    rent.lf_rent.value * archi.par.base +
    rent.lf_opex.base -
    rent.lf_opex.value;
  rent.hf_noi.base = rent.hf_rent.value + rent.hf_opex.base / archi.par.base;
  rent.lf_noi.base = rent.lf_rent.value + rent.lf_opex.base / archi.par.base;
  rent.noi.value =
    archi.hf_area.value * rent.hf_noi.value * 12 +
    archi.lf_area.value * rent.lf_noi.value * 12;

  // tic, src_total 초기화
  use.stable_reserve.value = -1;
  let stepped_value = 0;
  console.log(stepped_value);

  while (use.stable_reserve.value < 0) {
    stepped_value += 10000000000;
    console.log(stepped_value);

    // // tic, src_total 업데이트
    use.tic.value = stepped_value;
    src.src_total.value = stepped_value;

    // 매매비용가정
    use.buy_price.base = use.buy_price.value / base.land_area.value;
    use.buy_support.value = use.buy_support.base * use.buy_price.value;
    use.buy_fee.value = use.buy_fee.base * use.tic.value;
    use.brok_fee.value = use.brok_fee.base * use.buy_price.value;
    use.const_tax.value = (use.const_tax.base * other.period_total.value) / 12;
    use.am_pm_fee.value = (use.am_pm_fee.base * other.period_total.value) / 12;
    use.buy_reserve.value =
      (use.buy_reserve.base * other.period_total.value) / 12;
    use.buy_total.value =
      use.buy_price.value +
      use.buy_support.value +
      use.buy_fee.value +
      use.brok_fee.value +
      use.const_tax.value +
      use.am_pm_fee.value +
      use.buy_reserve.value;

    // 건축비용가정
    use.const_price.value = use.const_price.base * archi.floor_area.value;
    use.indr_const_price.value =
      use.indr_const_price.base * archi.floor_area.value;
    use.const_total.value = use.const_price.value + use.indr_const_price.value;

    // PF 및 금융비용 가정
    src.pf.value = src.pf.base * use.tic.value;
    src.tr_b.value = src.pf.value - src.tr_a.value;
    use.pf_interest.value =
      ((src.tr_a.base * src.tr_a.value + src.tr_b.base * src.tr_b.value) *
        other.period_total.value) /
      12;
    use.pf_interest.base =
      (src.tr_a.base * src.tr_a.value + src.tr_b.base * src.tr_b.value) /
      src.pf.value;
    src.debt_interest.value = use.pf_interest.base;
    use.other_fee.value = use.other_fee.base * use.pf_interest.value;
    use.fin_total.value = use.pf_interest.value + use.other_fee.value;

    // 기타비용 가정
    use.ti_rent_fee.value =
      use.ti_rent_fee.base * (archi.hf_parea.value + archi.lf_parea.value);
    use.other_total.value =
      use.tic.value -
      use.buy_total.value -
      use.const_total.value -
      use.fin_total.value;
    use.stable_reserve.value = use.other_total.value - use.ti_rent_fee.value;
    console.log(use.stable_reserve.value);
  }

  // use.buy_fee.base = use.buy_fee.value / use.tic.value;

  //자본금 가정
  src.equity.value = use.tic.value * src.equity.base;
  src.common_share.value = src.equity.value - src.pref_share.value;

  // 예상치
  result.sell_price.value = rent.noi.value / other.cap.value;
  result.return.value = result.sell_price.value - use.tic.value;
  result.roe.value = result.return.value / src.equity.value;
  result.irr.value = result.roe.value / (other.period_total.value / 12);

  console.log(base);

  return {
    base: base,
    archi: archi,
    rent: rent,
    use: use,
    src: src,
    other: other,
    result: result,
  };
};

console.log("f");
console.log(calculateValuation(calculate_data, ""));

while (true) {
  const a = 1;
}
