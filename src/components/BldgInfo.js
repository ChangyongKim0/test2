import React, { useEffect, useState } from "react";

import styles from "./BldgInfo.module.scss";
import classNames from "classnames/bind";
import ToolTip from "./ToolTip";

const cx = classNames.bind(styles);

const BldgInfo = ({ keys, vals }) => {
  let [show_info, setShowInfo] = useState(false);

  useEffect(() => {
    // console.log(keys);
    // console.log(vals);
  });

  return (
    <div className={cx("wrapper")}>
      <div className={cx("block")}>
        <p className={cx("name", "emph")}>{vals.name}</p>
        <p className={cx("addr1")}>{vals.addr1}</p>
        <p className={cx("addr2")}>{vals.addr2}</p>
      </div>
      <div className={cx("block", "primary")}>
        <div>
          <p className={cx("keys")}>{keys.buy_price}</p>
          <p className={cx("vals", "emph")}>{vals.buy_price}</p>
          <p className={cx("vals")}>{vals.buy_price_date}</p>
        </div>
        <div>
          <div className={cx("with-info")}>
            <p className={cx("keys")}>{keys.noc}</p>
            <div className={cx("info-frame")}>
              <p
                className={cx("info")}
                onMouseOver={() => setShowInfo(true)}
                onMouseOut={() => setShowInfo(false)}
              >
                ⓘ
              </p>
              {}
              <div className={cx("info-window")}>
                <ToolTip
                  info={{ active: show_info, content: "이것은 인포윈도우!" }}
                />
              </div>
            </div>
          </div>
          <p className={cx("vals", "emph")}>{vals.noc}</p>
        </div>
      </div>
      <div className={cx("block", "secondary")}>
        <div>
          <p className={cx("keys")}>{keys.land_area}</p>
          <p className={cx("vals")}>{vals.land_area}</p>
        </div>
        <div>
          <p className={cx("keys")}>{keys.use_area}</p>
          <p className={cx("vals")}>{vals.use_area}</p>
        </div>
      </div>
      <div className={cx("block", "bldg-info")}>
        <div>
          <p className={cx("keys")}>{keys.bldg_area}</p>
          <p className={cx("vals")}>{vals.bldg_area}</p>
        </div>
        <div>
          <p className={cx("keys")}>{keys.bldg_size}</p>
          <p className={cx("vals")}>{vals.bldg_size}</p>
        </div>
        <div>
          <p className={cx("keys")}>{keys.construction_year}</p>
          <p className={cx("vals")}>{vals.construction_year}</p>
        </div>
        <div>
          <p className={cx("keys")}>{keys.far}</p>
          <p className={cx("vals")}>{vals.far}</p>
        </div>
        <div>
          <p className={cx("keys")}>{keys.bcr}</p>
          <p className={cx("vals")}>{vals.bcr}</p>
        </div>
        <div>
          <p className={cx("keys")}>{keys.par}</p>
          <p className={cx("vals")}>{vals.par}</p>
        </div>
      </div>
      <div className={cx("block", "previous-sales")}>
        <p className={cx("subtitle")}>과거 거래 사례</p>
      </div>
      <div className={cx("block", "construction")}>
        <p className={cx("subtitle")}>개발 시</p>
        <div>
          <p className={cx("keys")}>{keys.construction.far}</p>
          <p className={cx("vals")}>{vals.construction.far}</p>
        </div>
        <div>
          <p className={cx("keys")}>{keys.construction.bcr}</p>
          <p className={cx("vals")}>{vals.construction.bcr}</p>
        </div>
        <div>
          <p className={cx("keys")}>{keys.construction.height}</p>
          <p className={cx("vals")}>{vals.construction.height}</p>
        </div>
        <div>
          <p className={cx("keys")}>{keys.construction.use_area}</p>
          {vals.construction.use_area.map((item) => {
            return (
              <p className={cx("vals")} key={item}>
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

BldgInfo.defaultProps = {
  vals: {
    name: "name",
    addr1: "addr1",
    addr2: "addr2",
    buy_price: "buy_price",
    buy_price_date: "buy_price_date",
    noc: "noc",
    land_area: "land_area",
    use_area: "use_area",
    bldg_area: "bldg_area",
    bldg_size: "bldg_size",
    construction_year: "construction_year",
    far: "far",
    bcr: "bcr",
    par: "par",
    construction: {
      far: "construction.far",
      bcr: "construction.bcr",
      height: "construction.height",
      use_area: ["[use_area]"],
    },
  },

  keys: {
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
  },
};

export default BldgInfo;
