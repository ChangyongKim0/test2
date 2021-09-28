import React from "react";
// { useEffect }

import styles from "./ValuationCompText.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ValuationCompText = ({
  data,
  use_tooltip,
  use_toggle,
  tooltip,
  style,
}) => {
  return (
    <div className={cx("wrapper", "style-" + style)}>
      <div className={cx("frame-title")}>
        <div className={cx("title-" + style)}>
          {style == "detail" ? "\u00A0\u00A0" : ""}
          {data.title}
        </div>
      </div>
      <div className={cx("frame-value")}>
        <div className={cx("frame-left")}>
          <div className={cx("text-" + style)}>{data.value}</div>
          <div className={cx("unit-" + style)}>{data.unit}</div>
        </div>
        {style == "detail" ? (
          <div className={cx("frame-right")}>
            <div className={cx("text-" + style)}>{data.second_value}</div>
            <div className={cx("unit-" + style)}>{data.second_unit}</div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

ValuationCompText.defaultProps = {
  data: {
    title: "title",
    value: "value",
    unit: "u.",
    second_value: "second_value",
    second_unit: "u.",
  },
  use_tooltip: true,
  use_toggle: false,
  tooltip: ["tooltip"],
  style: "default",
};

export default ValuationCompText;

// ### ValuationCompText

// - style: default / detail / total
// - use_tooltip: True / False
// - use_toggle: True / False
// - tooltip
// - title, value, unit, second_value, second_unit
// - toggle_content <=children
