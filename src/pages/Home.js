import React, { useEffect, useReducer, useState } from "react";
import "../util/reset.css";
// import RenderAfterNavermapsLoaded from "../components/RenderAfterNavermapsLoaded";
// import Location from "../components/location";
import BackgroundMap from "../components/BackgroundMap";
import BldgInfoModal from "../components/BldgInfoModal";
import AddressModal from "../components/AddressModal";

import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import InfoBubble from "../components/InfoBubble";
import Header from "../components/Header";
import { useModalStack } from "../hooks/useModal";

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

const reduceBldgInfo = (state, action) => {
  if (state.show == action.show && action.show == false) {
    return state;
  } else {
    return {
      active: action.show,
      id: action.id,
      keys: bldg_info_keys_sample,
      vals: bldg_info_vals_sample,
    };
  }
};

const addressReducer = (state, action) => {
  // console.log("primary address is changed");
  return action;
};

const Home = () => {
  const [bldg_info, handleBldgInfo] = useReducer(reduceBldgInfo, {
    active: false,
    id: -1,
    keys: bldg_info_keys_sample,
    vals: bldg_info_vals_sample,
  });

  const [modal_stack, useModalParam] = useModalStack();

  const [is_clicked, setIsClicked] = useState(false);

  const [address, handleAddress] = useReducer(addressReducer, "");

  useEffect(() => {
    // console.log("useEffect");
  });
  return (
    <div className={cx("wrapper")}>
      <div className={cx("frame-page")}>
        <div className={cx("frame-header")}>
          <Header
            nav_emph="map"
            use_sub_button={true}
            sub_button_name="북마크 필지 비교하기"
            link_sub_button_to="/map/comp"
          />
        </div>
        <div className={cx("frame-content")}>
          <BackgroundMap
            handleBldgInfo={handleBldgInfo}
            handleAddress={handleAddress}
            is_clicked={is_clicked}
            setIsClicked={setIsClicked}
          />
          <div className={cx("frame-modal-preset")}>
            <BldgInfoModal
              info={bldg_info}
              handleBldgInfo={handleBldgInfo}
              setIsClicked={setIsClicked}
            />
            <AddressModal address={address} />
          </div>
        </div>
      </div>
      <div className={cx("frame-modal")}>
        <div>{Object.values(modal_stack).map((e) => e.component)}</div>
      </div>
    </div>
  );
};

export default Home;
