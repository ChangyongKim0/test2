import React from "react";
import { ReactComponent as CloseSvg } from "../atom/CloseSvg.svg";

import styles from "./BookMarkModal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const BookMarkModal = ({ title, placeholder }) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title-field")}>
        <h1 className={cx("title")}>{title}</h1>
        <CloseSvg className={cx("btn-close")} />
      </div>
      <div className={cx("input-field")}>
        <input
          className={cx("input")}
          type="text"
          placeholder={placeholder}
        ></input>
      </div>
      <div className={cx("btn-field")}>
        <button>닫기</button>
        <div className={cx("btn-list-save")}>
          <button>저장 후 닫기</button>
          <button className={cx("emph")}>저장 후 비교</button>
        </div>
      </div>
    </div>
  );
};

BookMarkModal.defaultProps = {
  title: "title",
  placeholder: "input",
};

export default BookMarkModal;
