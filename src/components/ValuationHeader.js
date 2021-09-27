import React from "react";

import styles from "./ValuationHeader.module.scss";
import classNames from "classnames/bind";
// import AddressSearcher from "./AddressSearcher";
import BackwardIcon from "../atom/BackwardIcon";
import CtaButton from "../atom/CtaButton";

const cx = classNames.bind(styles);

const ValuationHeader = ({ title, sub_title, saved_name, onClick }) => {
  //   console.log(nav_emph_list);
  const handleSave = () => {

  }
  
  return (
    <div className={cx("wrapper")}>
      <div className={cx("frame-left")} onClick={onClick.Backward()}>
        <BackwardIcon />
      </div>
      <div className={cx("title-frame")}>
        <div className={cx("title")}>{title}</div>
        <div className={cx("sub-title")}>{sub_title}</div>
      </div>
      <div className={cx("frame-right")}>
        <CtaButton size="small" background="transparent" icon="chart">{saved_name}</CtaButton>
        <CtaButton size="small" shape="color" background="color" icon="none" onClick={handleSave}>밸류에이션 저장</CtaButton>
      </div>
    </div>
  );
};

ValuationHeader.defaultProps = {
  title: "address",
  sub_title: "sub_address",
  saved_name: "saved_name",
  onClick: {
    Backward: () => {},
    Save: () => {},
  },
};

export default ValuationHeader;

// ValuationHeader Scheme
// - title, sub_title, saved_name, onClickBackward

// ComparisonHeader Scheme
// - title
// - onClick
// -- Backward, ChangeUnit

// ValuationFooter Scheme
// - data
// -- period, sell_price, return
// - onClickExtractExcel

// MiniMap Scheme
// - center, level, pnu
// - shape: round / square