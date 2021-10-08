import React, { createContext, useContext, useMemo, useReducer } from "react";

const base_data = {};

export const ValuationContext = createContext({
  valuation_data: {},
  setValuationData: () => {},
});

const reduceValuationData = (state, action) => {
  new_state = { ...state };
  switch (action) {
    case "create":
      break;
    case "update":
      break;
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
    {}
  );
  const value = useMemo(
    () => ({ valuation_data, setValuationData }),
    [valuation_data, setValuationData]
  );
  return (
    <ValuationContext.Provider value={value}>
      {children}
    </ValuationContext.Provider>
  );
};

export default useValuationCalculator;
