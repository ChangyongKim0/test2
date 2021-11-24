import React, { useState } from "react";
// { useEffect }

import styles from "./BldgInfoList.module.scss";
import classNames from "classnames/bind";
import ToolTip from "./ToolTip";
import useFormatter, { formatData, formatUnit } from "../hooks/useFormatter";
import useToggleState from "../hooks/useToggle";

const cx = classNames.bind(styles);

const BldgInfoList = ({ show, data, style, dropdown_from, force_dropdown }) => {
  const [dropped_down, setDroppedDown] = useToggleState({ toggle: false });

  const formatted_value_list = data.value
    .map((e, idx) =>
      idx < dropdown_from || dropdown_from == -1 || force_dropdown
        ? e.map((e2) => {
            return {
              value: formatData(e2.value, e2.value_type),
              unit: formatUnit(e2.value_unit, e2.unit_type),
            };
          })
        : -1
    )
    .filter((e) => e != -1);

  if (!show) {
    return <></>;
  } else {
    return (
      <div className={cx("wrapper")}>
        <div className={cx("frame-title", "title-" + style)}>
          <div className={cx("title-" + style)}>{data.title}</div>
        </div>
        <div className={cx("frame-column", "column-" + style)}>
          {formatted_value_list.map((e, idx) => {
            const component = e.map((e2, idx2) => (
              <div key={idx2} className={cx("frame-value", "value-" + style)}>
                <div className={cx("value-" + style)}>{e2.value}</div>
                <div className={cx("unit-" + style)}>{e2.unit}</div>
              </div>
            ));
            return (
              <div key={idx} className={cx("frame-row", "row-" + style)}>
                {component}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

BldgInfoList.defaultProps = {
  component_type: "list",
  show: true,
  data: {
    title: "공시지가",
    value: [
      [
        {
          value: 121500000,
          value_unit: "\u00A0원/평",
          value_type: "number",
        },
      ],
      [
        {
          value: 113200000,
          value_unit: "\u00A0원/평",
          value_type: "number",
        },
      ],
      [
        {
          value: 92300000,
          value_unit: "\u00A0원/평",
          value_type: "number",
        },
      ],
    ],
  },
  dropdown_from: 2,
  force_dropdown: false,
  style: "default",
};

export default BldgInfoList;

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
