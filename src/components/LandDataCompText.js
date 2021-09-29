import React from "react";
// { useEffect }

import styles from "./LandDataCompText.module.scss";
import classNames from "classnames/bind";
import ToolTip from "./ToolTip";

const cx = classNames.bind(styles);

const LandDataCompText = ({
  data,
  use_tooltip,
  use_toggle,
  tooltip,
  style,
}) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("frame-title")}>
        <ToolTip enable={use_tooltip.title} data={tooltip.title}>
          <div className={cx("style-" + style)}>
            <div className={cx("title-" + style)}>
              {style == "detail" ? "\u00A0\u00A0" : ""}
              {data.title}
            </div>
          </div>
        </ToolTip>
      </div>
      <div className={cx("frame-value")}>
        <ToolTip enable={use_tooltip.value} data={tooltip.value}>
          <div className={cx("frame-left", "style-" + style)}>
            <div className={cx("text-" + style)}>{data.value}</div>
            <div className={cx("unit-" + style)}>{data.unit}</div>
          </div>
        </ToolTip>
        {style == "detail" ? (
          <ToolTip
            enable={use_tooltip.second_value}
            data={tooltip.second_value}
          >
            <div className={cx("frame-right", "style-" + style)}>
              <div className={cx("text-" + style)}>{data.second_value}</div>
              <div className={cx("unit-" + style)}>{data.second_unit}</div>
            </div>
          </ToolTip>
        ) : (
          <></>
        )}
      </div>
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
