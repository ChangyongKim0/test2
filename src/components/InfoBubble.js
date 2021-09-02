import { ReactComponent as InfoBubbleSvg } from "../atom/InfoBubbleSvg.svg";
import { col_primary, col_w } from "../util/style";

import styles from "./InfoBubble.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const InfoBubble = ({ id, data }) => {
  return (
    <div>
      <div id={id} className={cx("info-bubble")}>
        <InfoBubbleSvg
          className={cx("info-bubble-svg")}
          width="98"
          height="65"
          fill={col_w}
          stroke={col_primary}
          strokeWidth="1px"
        />
        <div className={cx("frame")}>
          <div className={cx("title")}>{data.price}</div>
          <div>{data.date}</div>
          <div>{data.price_per_py}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoBubble;
