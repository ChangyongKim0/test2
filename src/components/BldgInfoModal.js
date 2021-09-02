import React, { useEffect } from "react";
import BldgInfo from "./BldgInfo";

import styles from "./BldgInfoModal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const BldgInfoModal = ({ info }) => {
  useEffect(() => {
    // console.log(info.keys);
  });
  if (info.active === false) {
    return <></>;
  }
  return (
    <div className={cx("wrapper")}>
      <div className={cx("modal")}>
        <BldgInfo keys={info.keys} vals={info.vals} />
        <button className={cx("box-btn")} type="submit" value="좌표">
          개발 Valuation 검토
        </button>
      </div>
    </div>
  );
};

export default BldgInfoModal;
