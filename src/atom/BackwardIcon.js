import React from "react";
import { ReactComponent as BackwardSvg } from "./BackwardSvg.svg";
import { Link } from "react-router-dom";

import styles from "./BackwardIcon.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const BackwardIcon = ({ link_to }) => {
  return (
    <div onClick={() => window.history.back()}>
      <BackwardSvg className={cx("btn-backward")} />
    </div>
  );
};

export default BackwardIcon;
