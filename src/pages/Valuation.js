import React, { useEffect, useReducer } from "react";
import RenderAfterNavermapsLoaded from "../components/RenderAfterNavermapsLoaded";
import Location from "../components/location";
import BackgroundMap from "../components/BackgroundMap";
import BldgInfoModal from "../components/BldgInfoModal";
import AddressModal from "../components/AddressModal";

import styles from "./Valuation.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
// var mapDiv = document.getElementById('map');
// var map = new naver.maps.Map(mapDiv);

let bldg_info_vals_sample = {
  name: "강욱 빌딩",
  addr1: "서울 영등포구 국회대로 777",
  addr2: "서울 영등포구 여의도동 7",
  buy_price: "200,000,000원",
  buy_price_date: "(2020.03)",
  noc: "260,000원/평",
  land_area: "3,537㎡ | 1,070평",
  use_area: "일반상업",
  bldg_area: "7.94㎡ | 2.40평",
  bldg_size: "20F/B6",
  construction_year: "2019년",
  far: "459%",
  bcr: "47%",
  par: "58%",
  construction: {
    far: "800%",
    bcr: "60%",
    height: "70m",
    use_area: ["일반상업지역,", "지구단위계획구역"],
  },
};

let bldg_info_keys_sample = {
  buy_price: "최근 실거래가",
  noc: "건물 명목 NOC",
  land_area: "토지면적",
  use_area: "용도지구",
  bldg_area: "건물면적",
  bldg_size: "건물규모",
  construction_year: "준공년도",
  far: "용적률",
  bcr: "건폐율",
  par: "전용률",
  construction: {
    far: "상한용적률",
    bcr: "상한건폐율",
    height: "높이제한",
    use_area: "토지이용계획",
  },
};

let address = "서울 서초구 강남대로1길 11";

const bldgInfoReducer = (state, action) => {
  if (state.id === true && action.id === state.id) {
    console.log("modal disappears.");
    return { show: false };
  } else {
    console.log("modal updated.");
    var new_keys = bldg_info_keys_sample;
    var new_vals = bldg_info_vals_sample;
    return { show: true, id: action.id, keys: new_keys, vals: new_vals };
  }
};

const handle = () => {
  console.log("clicked");
};

const Valuation = () => {
  const [bldg_info, handleBldgInfo] = useReducer(bldgInfoReducer, {
    show: false,
    id: -1,
    keys: bldg_info_keys_sample,
    vals: bldg_info_vals_sample,
  });
  useEffect(() => {
    console.log("useEffect");
  });
  return (
    <div className={cx("wrapper")}>
      <BackgroundMap handleBldgInfo={handleBldgInfo} />
      <div className={cx("modal-frame")}>
        <BldgInfoModal info={bldg_info} handleBldgInfo={handleBldgInfo} />
        <AddressModal address={address} />
      </div>
    </div>
  );
};

export default Valuation;
