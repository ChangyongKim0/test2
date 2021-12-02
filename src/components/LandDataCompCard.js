import React from "react";
// { useEffect }

import styles from "./LandDataCompCard.module.scss";
import classNames from "classnames/bind";
import ToolTip from "./ToolTip";
import LandDataCompText from "./LandDataCompText";
import MiniMap from "../atom/MiniMap";
import { ReactComponent as CloseSvg } from "../atom/CloseSvg.svg";
import CtaButton from "../atom/CtaButton";
import AddButton from "../atom/AddButton";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const LandDataCompCard = ({
  data,
  id,
  title,
  mini_map,
  handleClick,
  force_use_tooltip,
  type,
}) => {
  return (
    <div className={cx("wrapper", "wrapper-" + type)}>
      <div className={cx("frame-header", "type-" + type)}>
        <div>
          <CloseSvg className={cx("btn-close")} />
          <h3 className={cx("title")}>{title}</h3>
        </div>
        <div>
          <div className={cx("frame-map")}>
            <MiniMap id={id} {...mini_map} />
          </div>
          <Link to="/valuation">
            <CtaButton size="small" shape="round" background="color">
              개발 밸류에이션 검토
            </CtaButton>
          </Link>
        </div>
      </div>
      <div className={cx("frame-content")}>
        {data.content.map((e, idx) => {
          const comp = e.map((e2, idx2) => {
            return (
              <LandDataCompText
                key={idx2}
                type={type}
                {...e2}
                force_use_tooltip={force_use_tooltip}
              />
            );
          });
          return (
            <div
              key={idx}
              className={cx("frame-content-each", "frame-content-each-" + type)}
            >
              {comp}
            </div>
          );
        })}
        <div className={cx("frame-content-each", "frame-content-each-" + type)}>
          <AddButton />
        </div>
      </div>
    </div>
  );
};

LandDataCompCard.defaultProps = {
  id: 1,
  minimap: {
    level: 3,
    pos_list:
      "127.02473058 37.49791889 127.02435588 37.49780526 127.02440471 37.4977032 127.02441654 37.49767838 127.02403691 37.49756322 127.02409308 37.49744545 127.02414913 37.49732768 127.0242053 37.49720991 127.02422135 37.49717621 127.0243247 37.49713961 127.02462926 37.49723307 127.02481451 37.49728998 127.02500339 37.49734796 127.02492292 37.49751638 127.02484788 37.49767344 127.02477937 37.49781679 127.02473058 37.49791889",
  },
  title: "title",
  data: {
    content: [
      [
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
          },
          use_tooltip: false,
          tooltip: ["tooltip[0]", "tooltip[1]"],
          style: "default",
        },
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
          },
          use_tooltip: false,
          tooltip: ["tooltip[0]", "tooltip[1]"],
          style: "default",
        },
      ],
      [
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
          },
          use_tooltip: false,
          tooltip: ["tooltip[0]", "tooltip[1]"],
          style: "default",
        },
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
          },
          use_tooltip: false,
          tooltip: ["tooltip[0]", "tooltip[1]"],
          style: "default",
        },
      ],
    ],
  },
  handleClick: () => {},
  force_use_tooltip: false,
  type: "default",
};

export default LandDataCompCard;

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
