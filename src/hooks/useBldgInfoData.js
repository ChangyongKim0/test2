import React, { createContext, useContext, useMemo, useReducer } from "react";
import calculateValuation from "../data/calculateValuation";
import naked_data from "../data/naked_data";
import { cloneDeep } from "lodash";

const base_data = {};

export const BldgInfoContext = createContext({
  bldg_info_data: {},
  handleBldgInfoData: () => {},
});

const reduceBldgInfoData = (state, action) => {
  let new_state = cloneDeep(state);
  console.log(new_state);
  console.log(action);
  switch (action.type) {
    case "move_update":
      new_state.move_toggle = !state.move_toggle;
      new_state.pnu = action.pnu;
      new_state.lat = action.lat;
      new_state.lng = action.lng;
      new_state.data = action.data;
      return new_state;
    case "update":
      new_state.pnu = action.pnu;
      new_state.data = action.data;
      return new_state;
    default:
      return state;
  }
};

const useBldgInfoData = () => {
  const { bldg_info_data, handleBldgInfoData } = useContext(BldgInfoContext);
  return [bldg_info_data, handleBldgInfoData];
};

export const BldgInfoDataProvider = ({ children }) => {
  const [bldg_info_data, handleBldgInfoData] = useReducer(reduceBldgInfoData, {
    move_toggle: true,
    pnu: "1168010100108080005",
    lat: 37.497928,
    lng: 127.027583,
    data: {},
  });
  const value = useMemo(() => {
    console.log("memo rewritten.");
    return { bldg_info_data, handleBldgInfoData };
  }, [bldg_info_data, handleBldgInfoData]);
  return (
    <BldgInfoContext.Provider value={value}>
      {children}
    </BldgInfoContext.Provider>
  );
};

export default useBldgInfoData;
