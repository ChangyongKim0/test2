import React from "react";
// { useEffect }

import styles from "./BldgInfoText.module.scss";
import classNames from "classnames/bind";
import ToolTip from "./ToolTip";
import useFormatter from "../hooks/useFormatter";

const cx = classNames.bind(styles);

const BldgInfoText = ({ show, data, tooltip, style }) => {
  const formatted_value = useFormatter({
    value: data.value,
    value_type: data.value_type,
    unit: data.value_unit,
    unit_type: data.value_unit_type,
  });
  const formatted_base = useFormatter({
    value: data.base,
    value_type: data.base_type,
    unit: data.base_unit,
    unit_type: data.base_unit_type,
  });

  if (!show) {
    return <></>;
  } else {
    return (
      <div className={cx("wrapper")}>
        <ToolTip enable={tooltip.length > 0} data={tooltip}>
          <div className={cx("frame-title", "title-" + style)}>
            <div className={cx("text-" + style)}>
              {style == "detail" ? "\u00A0\u00A0" : ""}
              {data.title}
            </div>
          </div>
        </ToolTip>
        <div className={cx("frame-value", "value-" + style)}>
          <div className={cx("text-" + style)}>{formatted_value.value}</div>
          <div className={cx("unit-" + style)}>{formatted_value.unit}</div>
        </div>
        {data.base ? (
          <div className={cx("frame-base", "base-" + style)}>
            <div className={cx("text-" + style)}>{formatted_base.value}</div>
            <div className={cx("unit-" + style)}>{formatted_base.unit}</div>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
};

BldgInfoText.defaultProps = {
  show: true,
  data: {
    title: "title",
    value: "value",
    value_unit: "u.",
    value_type: "string",
    value_unit_type: "py",
    base: "base",
    base_unit: "u.",
    base_type: "string",
    base_unit_type: "py",
  },
  tooltip: ["tooltip[0]", "tooltip[1]"],
  style: "default",
};

export default BldgInfoText;

// component_type: "text",
//     show: true,
//     data: {
//       title: "최근 실거래가",
//       value: "2000억",
//       value_unit: " 원",
//       base: "2019.03",
//       base_unit: "",
//       base_type: "string",
//       value_type: "number",
//     },
//     type: "emph",
//     tooltip: []}
