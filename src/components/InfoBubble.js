import React from "react";
import { ReactComponent as InfoBubbleSvg } from "../atom/InfoBubbleSvg.svg";
import { col_primary, col_w } from "../util/style";

import styles from "./InfoBubble.module.scss";
import classNames from "classnames/bind";
import useUnitType from "../hooks/useUnitType";
import BookMarkButton from "../atom/BookMarkButton";

const cx = classNames.bind(styles);

const InfoBubble = ({ id, data, onClick, is_saved, tr_exists }) => {
  return (
    <div className={cx("wrapper")}>
      <div id={id} className={cx("info-bubble")}>
        {tr_exists ? (
          <>
            <InfoBubbleSvg className={cx("info-bubble-svg")} />
            <div className={cx("frame")}>
              <div className={cx("title")}>{data.price}</div>
              <div>{data.date}</div>
              <div className={"info-bubble-unit-field"}>
                {data.price_per_py}
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        {is_saved ? (
          <div className={cx("info-bookmark", tr_exists ? "corner" : "")}>
            <BookMarkButton />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

InfoBubble.defaultProps = {
  id: 1000,
  data: { price: "price", date: "date", price_per_py: "price_per_py" },
  onClick: () => {},
  is_saved: true,
  tr_exists: true,
};

export default InfoBubble;
