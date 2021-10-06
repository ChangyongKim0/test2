import React, { useEffect } from "react";
// { useEffect }

import styles from "./AssumptionCard.module.scss";
import classNames from "classnames/bind";
import ToolTip from "./ToolTip";
import AssumptionText from "./AssumptionText";
import MiniMap from "../atom/MiniMap";
import AddButton from "../atom/AddButton";
import Overlay from "./Overlay";
import AddModal from "./AddModal";
import { useModal } from "../hooks/useModal";

const cx = classNames.bind(styles);

const AssumptionCard = ({
  id,
  use_mini_map,
  mini_map,
  title,
  sub_title,
  total_info,
  data,
  style,
  use_plus,
  handlePlus,
  force_use_tooltip,
  useModalParam,
}) => {
  const [open_AM, setOpenAM, registerAM, modal_update] =
    useModal(useModalParam);

  useEffect(() => {
    registerAM(
      <Overlay open={true} setOpen={setOpenAM} use_backdrop={true}>
        <AddModal
          title="밸류에이션 값 추가"
          onClick={{
            Add: () => {},
            Close: () => {
              setOpenAM(false);
            },
          }}
        />
      </Overlay>
    );
    console.log("registered BMM.");
    console.log(open_AM);
  }, [modal_update]);

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
                  <MiniMap id={id} {...mini_map} />
                </div>
              ) : (
                <></>
              )}
              {comp}
            </div>
          );
        })}
        {use_plus ? (
          <div className={cx("frame-data-each", "frame-btn")}>
            <AddButton
              onClick={() => {
                setOpenAM(true);
              }}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

AssumptionCard.defaultProps = {
  id: 1,
  use_mini_map: false,
  mini_map: {
    level: 3,
    pos_list:
      "127.02473058 37.49791889 127.02435588 37.49780526 127.02440471 37.4977032 127.02441654 37.49767838 127.02403691 37.49756322 127.02409308 37.49744545 127.02414913 37.49732768 127.0242053 37.49720991 127.02422135 37.49717621 127.0243247 37.49713961 127.02462926 37.49723307 127.02481451 37.49728998 127.02500339 37.49734796 127.02492292 37.49751638 127.02484788 37.49767344 127.02477937 37.49781679 127.02473058 37.49791889",
  },
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
          title: "[0][0]title",
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
          title: "[0][1]title",
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
          title: "[1][0]title",
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
          title: "[1][1]title",
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
