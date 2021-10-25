import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import calculateValuation from "../data/calculateValuation";
import naked_data from "../data/naked_data";
import { cloneDeep } from "lodash";
import useCookieData, { getCookie, setCookie } from "../hooks/useCookieData";

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
      new_state.pnu = action.pnu || state.pnu;
      new_state.lat = action.lat || state.lat;
      new_state.lng = action.lng || state.lng;
      new_state.data = action.data || state.data;
      new_state.level = action.level || state.level;
      new_state.handleCookieData({
        type: "patch",
        data: {
          pnu: new_state.pnu,
          lat: new_state.lat,
          lng: new_state.lng,
          level: new_state.level,
        },
      });
      setCookie("pnu", new_state.pnu, 365);
      setCookie("level", new_state.level, 365);
      setCookie("lat", new_state.lat, 365);
      setCookie("lng", new_state.lng, 365);
      return new_state;
    case "update":
      new_state.pnu = action.pnu;
      new_state.data = action.data;
      new_state.handleCookieData({
        type: "patch",
        data: { pnu: action.pnu },
      });
      setCookie("pnu", new_state.pnu, 365);
      return new_state;
    case "location_update":
      new_state.pnu = action.pnu || state.pnu;
      new_state.lat = action.lat || state.lat;
      new_state.lng = action.lng || state.lng;
      new_state.level = action.level || state.level;
      // new_state.handleCookieData({
      //   type: "patch",
      //   data: {
      //     pnu: new_state.pnu,
      //     lat: new_state.lat,
      //     lng: new_state.lng,
      //     level: new_state.level,
      //   },
      // });
      // 위를 실행할 경우 서버 부하가 커지므로 클라이언트 측에서 처리하도록
      setCookie("pnu", new_state.pnu, 365);
      setCookie("level", new_state.level, 365);
      setCookie("lat", new_state.lat, 365);
      setCookie("lng", new_state.lng, 365);
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
  const [cookie_data, handleCookieData] = useCookieData();
  const [bldg_info_data, handleBldgInfoData] = useReducer(reduceBldgInfoData, {
    handleCookieData: handleCookieData,
    move_toggle: true,
    pnu: getCookie("pnu") || "1168010100108080005",
    lat: getCookie("lat") || 37.497928,
    lng: getCookie("lng") || 127.027583,
    level: getCookie("level") || 3,
    data: {},
  });
  // useEffect(() => {
  //   if (cookie_data.data_updated) {
  //     console.log(cookie_data);
  //     handleBldgInfoData({
  //       type: "move_update",
  //       pnu: cookie_data.data.pnu,
  //       lat: cookie_data.data.lat,
  //       lng: cookie_data.data.lng,
  //       level: cookie_data.data.level,
  //     });
  //   }
  // }, [cookie_data.data_updated]);
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
