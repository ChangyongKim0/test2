import React, { useState } from "react";

import { ReactComponent as TriangleDownSvg } from "../atom/TriangleDownSvg.svg";

import styles from "./ToolTip.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ToolTip = ({ enable, data, children }) => {
  let [internal_open, setInternalOpen] = useState(false);

  return (
    <div
      className={cx("wrapper")}
      onMouseOver={() => {
        setInternalOpen(true);
      }}
      onMouseOut={() => {
        setInternalOpen(false);
      }}
    >
      <div>{children}</div>
      {enable && internal_open ? (
        <div className={cx("frame")}>
          <div className={cx("box")}>
            {data.map((e, idx) => {
              return (
                <p key={idx} className={cx("text")}>
                  {e}
                </p>
              );
            })}
          </div>
          <TriangleDownSvg className={cx("triangle-down-svg")} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

ToolTip.defaultProps = {
  enable: true,
  data: ["data[0]", "data[1]"],
  children: <div>children</div>,
};

export default ToolTip;
