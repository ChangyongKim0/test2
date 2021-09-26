import React from "react";

import styles from "./ValuationHeader.module.scss";
import classNames from "classnames/bind";
import AddressSearcher from "./AddressSearcher";
import BackwardIcon from "../atom/BackwardIcon";

const cx = classNames.bind(styles);

const ValuationHeader = ({ address, sub_address, saved_name }) => {
  //   console.log(nav_emph_list);
  return (
    <div className={cx("wrapper")}>
      <div>
        <BackwardIcon />
      </div>
      <div className={cx("title")}>
        <div className={cx("address")}>{address}</div>
        <div>{sub_address}</div>
      </div>
      <div className={cx("other icon")}>
        <div className={cx("saved-name")}>{saved_name}</div>
        <div className={cx("btn-save")}>밸류에이션 저장</div>
      </div>
    </div>
  );
};

ValuationHeader.defaultProps = {
  address: "address",
  sub_address: "sub_address",
  saved_name: "saved_name",
};

export default ValuationHeader;
