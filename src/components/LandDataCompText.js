import React from "react";
// { useEffect }

import styles from "./LandDataCompText.module.scss";
import classNames from "classnames/bind";
import ToolTip from "./ToolTip";

const cx = classNames.bind(styles);

const LandDataCompText = ({ data, use_tooltip, tooltip, style }) => {
  return (
    <div className={cx("wrapper")}>
      <ToolTip enable={use_tooltip} data={tooltip}>
        <div className={cx("frame")}>
          <div className={cx("text")}>{data.value}</div>
          <div className={cx("unit")}>{data.unit}</div>
        </div>
      </ToolTip>
    </div>
  );
};

LandDataCompText.defaultProps = {
  data: {
    title: "title",
    value: "value",
    unit: "u.",
  },
  use_tooltip: false,
  tooltip: ["tooltip[0]", "tooltip[1]"],
  style: "default",
};

export default LandDataCompText;

// ### LandDataCompText

// - style: default
// - use_tooltip: True / False
// - tooltip
// - title, value, unit
// - onClick
// -- Close, GoOver
