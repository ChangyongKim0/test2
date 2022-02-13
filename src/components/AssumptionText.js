import React, { useEffect, useState, useRef } from "react";
// { useEffect }

import styles from "./AssumptionText.module.scss";
import classNames from "classnames/bind";
import ToolTip from "./ToolTip";
import useKeyUpAssumptionFormatter from "../hooks/useKeyUpAssumptionFormatter";

const cx = classNames.bind(styles);

const AssumptionText = ({
  data,
  is_placeholder,
  type,
  use_tooltip,
  tooltip,
  force_use_tooltip,
  handleFocus,
}) => {
  tooltip.title = tooltip.title || [];
  tooltip.base = tooltip.base || [];
  tooltip.value = tooltip.value || [];

  let blob_class = {};
  Object.keys(is_placeholder).map((e) =>
    is_placeholder[e] ? (blob_class[e] = "blob") : (blob_class[e] = "")
  );

  const class_names = {
    type: "type-" + type,
  };

  // const input_value = useRef(null);

  const handleKeyUp = useKeyUpAssumptionFormatter(
    data.id + ".value",
    data.id + ".base",
    [data]
  );

  const onBlur = (e) => {
    handleFocus({ id: e.target.id, type: "out", value: e.target.value });
    e.target.value = "";
  };

  return (
    <div className={cx("wrapper")}>
      <ToolTip
        enable={
          tooltip.title.length > 0 || use_tooltip.title || force_use_tooltip
        }
        data={tooltip.title}
      >
        <div className={cx("frame-left")}>
          <div className={cx(class_names.type)}>
            <div className={cx("title")}>{data.title}</div>
          </div>
        </div>
      </ToolTip>
      <ToolTip
        enable={
          tooltip.base.length > 0 || use_tooltip.base || force_use_tooltip
        }
        data={tooltip.base}
      >
        <div className={cx("frame-value", blob_class.base, class_names.type)}>
          <div className={cx("frame")}>
            {is_placeholder.base ? (
              <input
                id={data.id + ".base"}
                className={cx("input")}
                placeholder={data.base}
                onKeyUp={(e) => handleKeyUp("base", data.base_type, e)}
                onBlur={onBlur}
              ></input>
            ) : (
              <div className={cx("text")}>{data.base}</div>
            )}
            <div className={cx("unit")}>{data.base_unit}</div>
          </div>
        </div>
      </ToolTip>
      <ToolTip
        enable={
          tooltip.value.length > 0 || use_tooltip.value || force_use_tooltip
        }
        data={tooltip.value}
      >
        <div className={cx("frame-value", blob_class.value, class_names.type)}>
          <div className={cx("frame")}>
            {is_placeholder.value ? (
              <input
                id={data.id + ".value"}
                className={cx("input")}
                placeholder={data.value}
                onKeyUp={(e) => handleKeyUp("value", data.value_type, e)}
                onBlur={onBlur}
              ></input>
            ) : (
              <div className={cx("text")}><div>{data.value}</div></div>
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
    id: "id",
    title: "title",
    base: "base",
    base_unit: "u.",
    base_type: "rate",
    value: "value",
    value_unit: "u.",
    value_type: "number",
  },
  is_placeholder: {
    base: true,
    value: true,
  },
  handleFocus: ({ id, type, value }) => {
    console.log(id, type, value);
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
  force_use_tooltip: false,
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
