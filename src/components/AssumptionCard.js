import React from "react";
// { useEffect }

import styles from "./AssumptionCard.module.scss";
import classNames from "classnames/bind";
import ToolTip from "./ToolTip";
import AssumptionText from "./AssumptionText";
import MiniMap from "../atom/MiniMap";

const cx = classNames.bind(styles);

const AssumptionCard = ({
  id,
  use_mini_map,
  minimap,
  title,
  sub_title,
  total_info,
  data,
  style,
  use_plus,
  handlePlus,
  force_use_tooltip,
}) => {
  return (
    <div className={cx("wrapper", style)}>
      <div className={cx("frame-title")}>
        <div className={cx("title")}>{title}</div>
        <div className={cx("sub-title")}>{sub_title}</div>
        {total_info.length > 0 ? (
          <div className={cx("frame-info")}>
            {total_info.map((e, idx) => {
              let comp = <></>;
              idx == total_info.length - 1
                ? (comp = (
                    <div key={idx}>
                      <div className={cx("value")}>{e.value}</div>
                      <div className={cx("unit")}>{e.unit}</div>
                    </div>
                  ))
                : (comp = (
                    <div key={idx}>
                      <div className={cx("value")}>{e.value}</div>
                      <div className={cx("unit")}>{e.unit}</div>
                      <div className={cx("seperator")}>/</div>
                    </div>
                  ));
              return comp;
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className={cx("frame-data")}>
        {data.map((e, idx) => {
          const comp = e.map((e2, idx2) => {
            return (
              <AssumptionText
                key={idx2}
                {...e2}
                force_use_tooltip={force_use_tooltip}
              />
            );
          });
          return (
            <div key={idx} className={cx("frame-data-each")}>
              {use_mini_map && idx == 0 ? (
                <div className={cx("frame-map")}>
                  <MiniMap id={id} />
                </div>
              ) : (
                <></>
              )}
              {comp}
            </div>
          );
        })}
      </div>
    </div>
  );
};

AssumptionCard.defaultProps = {
  id: 1,
  use_mini_map: false,
  minimap: { level: 3, pos_list: "" },
  title: "title",
  sub_title: "sub_title",
  total_info: [
    { value: "[0].value", unit: "[0].u" },
    { value: "[1].value", unit: "[1].u" },
  ],
  data: [
    [
      {
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
        type: "total",
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
      },
      {
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
      },
    ],
    [
      {
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
        type: "total",
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
      },
      {
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
      },
    ],
  ],
  style: "white",
  use_plus: true,
  handlePlus: () => {},
  force_use_tooltip: false,
};

export default AssumptionCard;

// - use_mini_map: True / False
// - mini_map
// -- center, pnu
// - data
// -- [title, sub_title
// -- total_info
// --- [value, unit]
// -- title, base, base_unit, value, unit
// -- is_placeholder
// --- base: True / False
// --- value: True / False
// -- onKeyUp
// --- Base
// --- Value
// -- type: default / total
// ]
// - style: white, border
// - use_plus: True / False
// - handlePlus
