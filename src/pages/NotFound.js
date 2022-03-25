import React, { useEffect, useReducer, useState } from "react";
import "../util/reset.css";

import styles from "./NotFound.module.scss";
import classNames from "classnames/bind";
import { SERVICE_URI } from "../src_shortcut";
import LogoButton from "../atom/LogoButton";

const cx = classNames.bind(styles);

const NotFound = () => {
    setTimeout(() => {
        window.location.href = SERVICE_URI;
    }, 5000);

  return (
    <div className={cx("wrapper")}>
      <LogoButton />
      <div></div>
      <div className={cx("text")}>잘못된 경로입니다.</div>
      <div className={cx("text")}>잠시 후 홈으로 이동합니다.</div>
    </div>
  );
};

export default NotFound;
