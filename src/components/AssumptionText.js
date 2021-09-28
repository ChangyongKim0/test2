import React from "react";
// { useEffect }

import styles from "./AssumptionText.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const AssumptionText = ({ data, is_placeholder, onEnterPress, type }) => {
  let blob_class = {};
  Object.keys(is_placeholder).map((e) =>
    is_placeholder[e] ? (blob_class[e] = "blob") : (blob_class[e] = "")
  );

  const class_names = {
    type: "type-" + type,
  };

  return (
    <div className={cx("wrapper", class_names.type)}>
      <div className={cx("frame-left")}>
        <div className={cx("title")}>{data.title}</div>
      </div>
      <div className={cx("frame-center", blob_class.base)}>
        <div className={cx("frame")}>
          {is_placeholder.base ? (
            <input className={cx("input")} placeholder={data.base}></input>
          ) : (
            <div className={cx("text")}>{data.base}</div>
          )}
          <div className={cx("unit")}>{data.base_unit}</div>
        </div>
      </div>
      <div className={cx("frame-right", blob_class.value)}>
        <div className={cx("frame")}>
          {is_placeholder.value ? (
            <input className={cx("input")} placeholder={data.value}></input>
          ) : (
            <div className={cx("text")}>{data.value}</div>
          )}
          <div className={cx("unit")}>{data.value_unit}</div>
        </div>
      </div>
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
