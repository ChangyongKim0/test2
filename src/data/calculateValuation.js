import React from "react";
import naked_data from "./naked_data.js";
import { cloneDeep } from "lodash";

const calculateValuation = (naked_data_old, id) => {
  let naked_data = cloneDeep(naked_data_old);
  let base = naked_data.base;
  let archi = naked_data.archi;
  let rent = naked_data.rent;
  let use = naked_data.use;
  let src = naked_data.src;
  let other = naked_data.other;
  let result = naked_data.result;

  console.log("help", id);
  switch (id) {
    case "src.pref_share.value":
      src.common_share.value = src.equity.value - src.pref_share.value;
      break;
    case "src.common_share.value":
      src.pref_share.value = src.equity.value - src.common_share.value;
      break;
    case "src.tr_a.value":
      src.tr_b.value = src.pf.value - src.tr_a.value;
      break;
    case "src.tr_b.value":
      src.tr_a.value = src.pf.value - src.tr_b.value;
      break;
    case "src.pf.base":
      src.equity.base = 1.0 - src.pf.base;
      break;
    case "src.equity.base":
      src.pf.base = 1.0 - src.equity.base;
      console.log(src.pf.base);
      break;
    default:
      break;
  }

  // 건축 가정
  archi.bcr.value = archi.bcr.base * base.land_area.value;
  archi.far.value = archi.far.base * base.land_area.value;
  archi.par.value = archi.par.base * archi.far.value;

  // 건축 가정
  archi.hf_area.base = archi.far.value / archi.high_floor.value[1];
  archi.lf_area.base = archi.hf_area.base;
  archi.hf_parea.base = archi.hf_area.base * archi.par.base;
  archi.lf_parea.base = archi.hf_parea.base;
  archi.hf_area.value =
    archi.hf_area.base *
    (archi.high_floor.value[1] - archi.high_floor.value[0] + 1);
  archi.lf_area.value =
    archi.lf_area.base *
    (archi.low_floor.value[1] - archi.low_floor.value[0] + 1);
  archi.hf_parea.value = archi.hf_area.value * archi.par.base;
  archi.lf_parea.value = archi.lf_area.value * archi.par.base;
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
  let stepped_value = 10000000000;
  console.log(stepped_value);

  while (use.stable_reserve.value < 0) {
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
    stepped_value +=
      Math.max(1, Math.floor((-1 * use.stable_reserve.value) / 10000000000)) *
      10000000000;
    console.log(src.pf.base);
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

// console.log("f");
// console.log(calculateValuation(naked_data, ""));

// while (true) {
//   const a = 1;
// }

export default calculateValuation;
