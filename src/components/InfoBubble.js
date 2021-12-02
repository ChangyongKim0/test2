import { ReactComponent as InfoBubbleSvg } from "../atom/InfoBubbleSvg.svg";
import { col_primary, col_w } from "../util/style";

import styles from "./InfoBubble.module.scss";
import classNames from "classnames/bind";
import useUnitType from "../hooks/useUnitType";

const cx = classNames.bind(styles);

const InfoBubble = ({ id, data, onClick }) => {
  return (
    <div className={cx("wrapper")}>
      <div id={id} className={cx("info-bubble")}>
        <InfoBubbleSvg className={cx("info-bubble-svg")} />
        <div className={cx("frame")}>
          <div className={cx("title")}>{data.price}</div>
          <div>{data.date}</div>
          <div className={"info-bubble-unit-field"}>{data.price_per_py}</div>
        </div>
      </div>
    </div>
  );
};

InfoBubble.defaultProps = {
  id: 1000,
  data: { price: "price", date: "date", price_per_py: "price_per_py" },
  onClick: () => {},
};

export default InfoBubble;
