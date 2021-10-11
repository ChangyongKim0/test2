import React, { useEffect, useState } from "react";

import styles from "./ValuationFooter.module.scss";
import classNames from "classnames/bind";
// import AddressSearcher from "./AddressSearcher";
import BackwardIcon from "../atom/BackwardIcon";
import CtaButton from "../atom/CtaButton";
import SaveSuccessModal from "./SaveSuccessModal";
import Overlay from "./Overlay";
import BookMarkModal from "./BookMarkModal";

const cx = classNames.bind(styles);

const ValuationFooter = ({ data, onClickExtractExcel }) => {
  //   console.log(nav_emph_list);
  // const [open_BMM, setOpenBMM] = useState(true);
  const changeUnit = () => {
    return -1;
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("frame-left")}>
        {data.map((e, idx) => {
          return (
            <div key={idx} className={cx("frame-data")}>
              <div className={cx("title")}>{e.title}</div>
              <div className={cx("frame-value")}>
                <div className={cx("value")}>{e.value}</div>
                <div className={cx("unit")}>{e.value_unit}</div>
              </div>
            </div>
          );
        })}
      </div>
      <CtaButton
        size="medium"
        shape="square"
        background="white"
        icon="chart"
        onClick={changeUnit}
        id="ExtractExcel"
      >
        엑셀로 추출하기
      </CtaButton>
    </div>
  );
};

ValuationFooter.defaultProps = {
  data: [
    {
      title: "data[0].title",
      value: "data[0].value",
      value_unit: "data[0].unit",
    },
    // { title: "data[1].title", value: "data[1].value", unit: "data[1].unit" },
    // { title: "data[2].title", value: "data[2].value", unit: "data[2].unit" },
  ],
  onClickExtractExcel: () => {},
};

export default ValuationFooter;

// ValuationFooter Scheme
// - data
// -- [title, value, unit]
// - onClickExtractExcel

// MiniMap Scheme
// - center, level, pnu
// - shape: round / square
