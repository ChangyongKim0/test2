import { ReactComponent as TriangleDownSvg } from "../atom/TriangleDownSvg.svg";

import styles from "./InfoWindow.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const InfoWindow = ({ info }) => {
  if (!info.active) {
    return <></>;
  } else {
    return (
      <div className={cx("wrapper")}>
        <div className={cx("box")}>{info.content}</div>
        <TriangleDownSvg className={cx("triangle-down-svg")} />
      </div>
    );
  }
};

InfoWindow.defaultProps = {
  info: { active: true, content: "content" },
};

export default InfoWindow;
