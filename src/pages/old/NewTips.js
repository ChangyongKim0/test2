import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import TipsHashTag from "../components/TipsHashTag";
import Footer from "../components/Footer";

import "../util/reset.css";
import styles from "./NewTips.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

var tagList = [
  { name: "dd", activate: true },
  { name: "ddd", activate: false },
];

const NewTips = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("scroller")}>
        <div className={cx("frame")}>
          <h1 className={cx("title")}>Tips</h1>
          <h3 className={cx("subtitle")}>
            부동산 금융 업무에서 필요한 모든 팁.
          </h3>
          <input
            className={cx("line-input")}
            type="text"
            id="search"
            placeholder="검색"
            //   onChange={this.handleIdChange}
          ></input>
          <div>
            tag
            {tagList.map((item) => {
              return (
                <TipsHashTag name={item.name} activated={item.activated} />
              );
            })}
          </div>
          <div>title</div>
          <div>content</div>
          <div>navigator</div>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default NewTips;
