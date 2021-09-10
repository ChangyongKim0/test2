import React from "react";
import { ReactComponent as CloseSvg } from "../atom/CloseSvg.svg";

import styles from "./BookMarkModal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const BookMarkModal = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title-field")}>
        <h1 className={cx("title")}>매물 북마크</h1>
        <CloseSvg className={cx("btn-close")} />
      </div>
      <div className={cx("text-field")}></div>
      <div className={cx("btn-field")}></div>
    </div>
  );
};

export default BookMarkModal;
