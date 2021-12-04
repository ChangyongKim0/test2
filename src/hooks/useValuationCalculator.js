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

const reduceValuationData = (state, action) => {
  let new_state = cloneDeep(state);
  // console.log(new_state);
  // console.log(action);
  switch (action.type) {
    case "create":
      return calculateValuation(action.data, action.id);
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
