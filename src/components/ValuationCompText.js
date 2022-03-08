import React from "react";
// { useEffect }

import styles from "./ValuationCompText.module.scss";
import classNames from "classnames/bind";
import ToolTip from "./ToolTip";
import { formatData, formatUnit } from "../hooks/useFormatter";
import useUnitType from "../hooks/useUnitType";

const cx = classNames.bind(styles);

const ValuationCompText = ({
  data,
  use_tooltip,
  use_toggle,
  tooltip,
  style,
}) => {

  const [unit_type, _] = useUnitType();

  try {
    data.value = formatData(
      data_value,
      data.unit_type,
      data.unit,
      unit_type
    );
  } catch {
    data.value = err_text;
  }
  data.unit = formatUnit(
    data.unit,
    unit_type
  );
  
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

ValuationCompText.defaultProps = {
  data: {
    title: "title",
    value: "value",
    unit: "u.",
    second_value: "second_value",
    second_unit: "u.",
  },
  use_tooltip: {
    title: true,
    value: true,
    second_value: true,
  },
  use_toggle: false,
  tooltip: {
    title: ["tooltip.title[0]", "tooltip.title[1]"],
    value: ["tooltip.value[0]", "tooltip.value[1]"],
    second_value: ["tooltip.second_value[0]", "tooltip.second_value[1]"],
  },
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
