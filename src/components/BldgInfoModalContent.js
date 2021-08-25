import React, { useEffect } from "react";

import styles from "./BldgInfoModalContent.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const BldgInfoModalContent = ({ keys, vals }) => {
  useEffect(() => {
    console.log(keys);
    console.log(vals);
  });
  return (
    <div className={cx("wrapper")}>
      <div className={cx("block")}>
        <p className={cx("name", "emph")}>{vals.name}</p>
        <p className={cx("addr1")}>{vals.addr1}</p>
        <p className={cx("addr2")}>{vals.addr2}</p>
      </div>
      <div className={cx("block")}>
        <p className={cx("keys")}>{keys.buy_price}</p>
        <p className={cx("vals", "emph")}>{vals.buy_price}</p>
        <p className={cx("vals")}>{vals.buy_price_date}</p>
        <p className={cx("keys")}>{keys.noc}</p>
        <p className={cx("vals", "emph")}>{vals.noc}</p>
      </div>
      <div className={cx("block")}>
        <p className={cx("keys")}>{keys.land_area}</p>
        <p className={cx("vals")}>{vals.land_area}</p>
        <p className={cx("keys")}>{keys.use_area}</p>
        <p className={cx("vals")}>{vals.use_area}</p>
      </div>
      <div className={cx("block")}>
        <p className={cx("keys")}>{keys.bldg_area}</p>
        <p className={cx("vals")}>{vals.bldg_area}</p>
        <p className={cx("keys")}>{keys.bldg_size}</p>
        <p className={cx("vals")}>{vals.bldg_size}</p>
        <p className={cx("keys")}>{keys.construction_year}</p>
        <p className={cx("vals")}>{vals.construction_year}</p>
        <p className={cx("keys")}>{keys.far}</p>
        <p className={cx("vals")}>{vals.far}</p>
        <p className={cx("keys")}>{keys.bar}</p>
        <p className={cx("vals")}>{vals.bar}</p>
        <p className={cx("keys")}>{keys.par}</p>
        <p className={cx("vals")}>{vals.par}</p>
      </div>
      <div className={cx("block")}></div>
      <div className={cx("block")}>
        <p className={cx("keys")}>{keys.construction.far}</p>
        <p className={cx("vals")}>{vals.construction.far}</p>
        <p className={cx("keys")}>{keys.construction.bcr}</p>
        <p className={cx("vals")}>{vals.construction.bcr}</p>
        <p className={cx("keys")}>{keys.construction.height}</p>
        <p className={cx("vals")}>{vals.construction.height}</p>
        <p className={cx("keys")}>{keys.construction.use_area}</p>
        <p className={cx("vals")}>{vals.construction.use_area}</p>
      </div>
    </div>
  );
};

export default BldgInfoModalContent;
