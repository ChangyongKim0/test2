import React from "react";
// { useEffect }

import styles from "./AssumptionText.module.scss";
import classNames from "classnames/bind";
import ToolTip from "./ToolTip";

const cx = classNames.bind(styles);

const AssumptionText = ({
  data,
  is_placeholder,
  onEnterPress,
  type,
  use_tooltip,
  tooltip,
}) => {
  let blob_class = {};
  Object.keys(is_placeholder).map((e) =>
    is_placeholder[e] ? (blob_class[e] = "blob") : (blob_class[e] = "")
  );

  const class_names = {
    type: "type-" + type,
  };

  return (
    <div className={cx("wrapper")}>
      <ToolTip enable={use_tooltip.title} data={tooltip.title}>
        <div className={cx("frame-left")}>
          <div className={cx(class_names.type)}>
            <div className={cx("title")}>{data.title}</div>
          </div>
        </div>
      </ToolTip>
      <ToolTip enable={use_tooltip.base} data={tooltip.base}>
        <div className={cx("frame-value", blob_class.base, class_names.type)}>
          <div className={cx("frame")}>
            {is_placeholder.base ? (
              <input className={cx("input")} placeholder={data.base}></input>
            ) : (
              <div className={cx("text")}>{data.base}</div>
            )}
            <div className={cx("unit")}>{data.base_unit}</div>
          </div>
        </div>
      </ToolTip>
      <ToolTip enable={use_tooltip.value} data={tooltip.value}>
        <div className={cx("frame-value", blob_class.value, class_names.type)}>
          <div className={cx("frame")}>
            {is_placeholder.value ? (
              <input className={cx("input")} placeholder={data.value}></input>
            ) : (
              <div className={cx("text")}>{data.value}</div>
            )}
            <div className={cx("unit")}>{data.value_unit}</div>
          </div>
        </div>
      </ToolTip>
    </div>
  );
};

AssumptionText.defaultProps = {
  data: {
    title: "title",
    base: "base",
    base_unit: "u.",
    value: "value",
    value_unit: "u.",
  },
  is_placeholder: {
    base: true,
    value: true,
  },
  onEnterPress: {
    Base: () => {},
    Value: () => {},
  },
  type: "default",
  use_tooltip: {
    title: false,
    base: false,
    value: false,
  },
  tooltip: {
    title: ["tooltip.title[0]", "tooltip.title[1]"],
    base: ["tooltip.base[0]", "tooltip.base[1]"],
    value: ["tooltip.value[0]", "tooltip.value[1]"],
  },
};

export default AssumptionText;

// ### AssumptionText

// - data
// -- title, base, base_unit, value, unit
// - is_placeholder
// -- base: True / False
// -- value: True / False
// - onKeyUp
// -- Base
// -- Value
// - type: default / total
