import React, { createContext, useContext, useMemo, useReducer } from "react";
import calculateValuation from "../data/calculateValuation";
import naked_data from "../data/naked_data";
import { unformatData } from "../data/unformatValuation";
import { cloneDeep } from "lodash";

const base_data = {};

export const ValuationContext = createContext({
  valuation_data: {},
  setValuationData: () => {},
});

const _formatFloorRange = (start, end) => {
  return _formatFloor(start) + " / " + _formatFloor(end);
}

const _formatFloor = (number) => {
  if(typeof number != typeof 1){
    return "-"
  } else if(number <= 0){
    return "B" + (1-number);
  } else{
    return number + "F";
  }
}

// const _formatUsageList = (list) => {
//   if(list.length > 2){
//     return list.slice(0,2).join(", ") + "..."
//   }
//   else {
//     return list.join(", ")
//   }
// }

const reduceValuationData = (state, action) => {
  let new_state = cloneDeep(state);
  // console.log(new_state);
  // console.log(action);
  switch (action.type) {
    case "create":
      return calculateValuation(action.data, action.id);
    case "update base data":
      console.log("UPDATE");
      console.log(action.data);
      if(action.data.addr != undefined){
        new_state.base.land_area.value = action.data.land.area;
        new_state.base.use_area.value = action.data.land.usage_list.join(", ");
        new_state.base.recent_trade.base = action.data.transaction.date || "";
        new_state.base.recent_trade.value = action.data.transaction.price || "-";
        new_state.base.land_price_per_area.value = action.data.land.price_per_area || "-";
        new_state.base.noc.value = "-";
        new_state.base.opex.value = ["-", "-"];
        if(action.data.bldg_exists){
          const bldg_info = action.data.bldg.bldg_info_list[action.data.bldg_idx]
        new_state.base.floor_area.value = bldg_info.farea;
        new_state.base.far.value = bldg_info.far;
        new_state.base.bcr_par.value = [bldg_info.bcr, bldg_info.par];
        new_state.base.size.value = _formatFloorRange(bldg_info.size[0], bldg_info.size[1]);
        new_state.base.const_year.value = bldg_info.const_year;
        }
        else{
        new_state.base.floor_area.value = "-";
        new_state.base.far.value = "-";
        new_state.base.bcr_par.value = ["-", "-"];
        new_state.base.size.value = _formatFloorRange("-","-");
        new_state.base.const_year.value = "-";
        }
      }
      return calculateValuation(new_state, action.id);
    case "update":
      if (action.value) {
        if (action.id.includes(".")) {
          const [card_id, text_id, type_id] = action.id.split(".");
          new_state[card_id][text_id][type_id] = unformatData(
            action.value,
            new_state[card_id][text_id][type_id + "_type"],
            new_state[card_id][text_id][type_id + "_unit"],
            action.unit_type
          );
        }
        new_state = calculateValuation(new_state, action.id);
        // console.log("valuation data updated.");
        return new_state;
      } else {
        return state;
      }
    default:
      return state;
  }
};

const useValuationCalculator = () => {
  const { valuation_data, setValuationData } = useContext(ValuationContext);
  return [valuation_data, setValuationData];
};

export const ValuationCalculatorProvider = ({ children }) => {
  const [valuation_data, setValuationData] = useReducer(
    reduceValuationData,
    calculateValuation(naked_data, "")
  );
  const value = useMemo(() => {
    // console.log("memo rewritten.");
    return { valuation_data, setValuationData };
  }, [valuation_data, setValuationData]);
  return (
    <ValuationContext.Provider value={value}>
      {children}
    </ValuationContext.Provider>
  );
};

export default useValuationCalculator;
