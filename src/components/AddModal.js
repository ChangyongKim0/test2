import React, { useState } from "react";
import { ReactComponent as CloseSvg } from "../atom/CloseSvg.svg";

import styles from "./AddModal.module.scss";
import classNames from "classnames/bind";
import SaveSuccessModal from "./SaveSuccessModal";
import Overlay from "./Overlay";

const cx = classNames.bind(styles);

const AddModal = ({ title, onClick }) => {
  const [placeholder, setPlaceholder] = useState({
    title: "선택하세요",
    base: "선택하세요",
    value: "선택하세요",
  });

  return (
    <div className={cx("wrapper")}>
      <div className={cx("frame-title")}>
        <h1 className={cx("title")}>{title}</h1>
      </div>
      <div className={cx("frame-input-field")}>
        <div className={cx("frame-input")}>
          <div>이름</div>
          <input
            className={cx("input")}
            type="text"
            placeholder={placeholder.title}
          ></input>
        </div>
        <div className={cx("frame-input")}>
          <div>기준</div>
          <input
            className={cx("input")}
            type="text"
            placeholder={placeholder.base}
          ></input>
        </div>
        <div className={cx("frame-input")}>
          <div>결과 값</div>
          <input
            className={cx("input")}
            type="text"
            placeholder={placeholder.value}
          ></input>
        </div>
      </div>
      <div className={cx("frame-btn")}>
        <button className={cx("btn-close")} onClick={onClick.Close}>
          닫기
        </button>
        <button
          className={cx("btn-add")}
          onClick={() => {
            onClick.Add();
            onClick.Close();
          }}
        >
          추가
        </button>
      </div>
    </div>
  );
};

AddModal.defaultProps = {
  title: "title",
  onClick: {
    Add: () => {},
    Close: () => {},
  },
};

export default AddModal;
