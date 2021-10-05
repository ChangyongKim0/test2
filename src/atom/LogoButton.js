import React from "react";
import { Link } from "react-router-dom";

import styles from "./LogoButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const LogoButton = () => {
  return (
    <Link to="/">
      <div className={cx("wrapper")}>
        <div className={cx("logo")}></div>
        <div className={cx("title")}>Propi</div>
      </div>
    </Link>
  );
};

LogoButton.defaultProps = {};

export default LogoButton;
