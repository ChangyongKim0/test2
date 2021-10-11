import React, { createContext, useContext, useMemo, useReducer } from "react";
import { formatted_data } from "../data/wrapValuation";

const base_data = {};

export const ValuationContext = createContext({
  valuation_data: {},
  setValuationData: () => {},
});

const reduceValuationData = (state, action) => {
  let new_state = { ...state };
  switch (action.type) {
    case "create":
      return action.data;
    case "update":
      if (action.value) {
        const [card_id, text_id, type_id] = action.id.split(".");
        new_state[card_id][text_id][type_id] = action.value;
        console.log("valuation data updated.");
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
    formatted_data
  );
  const value = useMemo(() => {
    console.log("memo rewritten.");
    return { valuation_data, setValuationData };
  }, [valuation_data, setValuationData]);
  return (
    <ValuationContext.Provider value={value}>
      {children}
    </ValuationContext.Provider>
  );
};

export default useValuationCalculator;
