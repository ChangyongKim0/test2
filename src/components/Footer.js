import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import styles from "./Footer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("frame")}>
        <div className={cx("brand")}>
          <h1 className={cx("title")}>이강욱과 아이들</h1>
          <div className={cx("text")}>
            Footer 영역 이후에 내용 차근차근히 적어서 넣어야 하는 부분
          </div>
        </div>
        <div className={cx("navigator")}>
          <li className={cx("btn-map")}>
            <a href="/map">Map</a>
          </li>
          <li className={cx("btn-tip")}>
            <a href="/tips/new">Tip</a>
          </li>
          <li className={cx("btn-support")}>Support</li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
