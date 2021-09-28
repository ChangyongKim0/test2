import { ReactComponent as TriangleDownSvg } from "../atom/TriangleDownSvg.svg";

import styles from "./ToolTip.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ToolTip = ({ info }) => {
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

ToolTip.defaultProps = {
  info: { active: true, content: "content" },
};

export default ToolTip;
