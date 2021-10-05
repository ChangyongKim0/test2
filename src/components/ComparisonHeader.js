import React, { useEffect, useState } from "react";

import styles from "./ComparisonHeader.module.scss";
import classNames from "classnames/bind";
// import AddressSearcher from "./AddressSearcher";
import BackwardIcon from "../atom/BackwardIcon";
import CtaButton from "../atom/CtaButton";
import SaveSuccessModal from "./SaveSuccessModal";
import Overlay from "./Overlay";
import BookMarkModal from "./BookMarkModal";

const cx = classNames.bind(styles);

const ComparisonHeader = ({ type, onClick }) => {
  //   console.log(nav_emph_list);
  // const [open_BMM, setOpenBMM] = useState(true);
  const changeUnit = () => {
    return -1;
  };

  let title = "";
  switch (type) {
    case "valuation":
      title = "밸류에이션 비교하기";
      break;
    case "land":
      title = "북마크 필지 비교하기";
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("frame-left")} onClick={onClick.Backward()}>
        {/* <BackwardIcon /> */}
        <div className={cx("title")}>{title}</div>
      </div>
      {/* <div className={cx("title-frame")}>
        <div className={cx("title")}>{title}</div>
      </div> */}
      <div className={cx("frame-right")}>
        <CtaButton
          size="small"
          shape="round"
          background="white"
          icon="change"
          border="gray"
          onClick={changeUnit}
          id="ChangeUnit"
        >
          단위
        </CtaButton>
      </div>
    </div>
  );
};

ComparisonHeader.defaultProps = {
  type: "valuation",
  onClick: {
    Backward: () => {},
    Save: () => {},
  },
};

export default ComparisonHeader;

// ComparisonHeader Scheme
// - title
// - onClick
// -- Backward, ChangeUnit
