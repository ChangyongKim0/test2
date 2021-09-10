import React, { useEffect, useState } from "react";

import styles from "./BldgInfo.module.scss";
import classNames from "classnames/bind";
import InfoWindow from "./InfoWindow";

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
                <InfoWindow
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

export default BldgInfo;
