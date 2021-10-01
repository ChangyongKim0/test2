import React, { useState, useEffect } from "react";
import { ReactComponent as CloseSvg } from "../atom/CloseSvg.svg";

import styles from "./BookMarkModal.module.scss";
import classNames from "classnames/bind";
import SaveSuccessModal from "./SaveSuccessModal";
import Overlay from "./Overlay";

const cx = classNames.bind(styles);

const BookMarkModal = ({ title, placeholder, onClick, createUseModal }) => {
  const [open_SSM, setOpenSSM, registerSSM] = createUseModal();

  useEffect(() => {
    registerSSM(<SaveSuccessModal open={true} setOpen={setOpenSSM} />);
    console.log("registered SSM.");
  }, [open_SSM]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("title-field")}>
        <h1 className={cx("title")}>{title}</h1>
        <CloseSvg className={cx("btn-close")} onClick={onClick.Close} />
      </div>
      <div className={cx("input-field")}>
        <input
          className={cx("input")}
          type="text"
          placeholder={placeholder}
        ></input>
      </div>
      <div className={cx("btn-field")}>
        <button onClick={onClick.Close}>닫기</button>
        <div className={cx("btn-list-save")}>
          <button
            onClick={() => {
              setOpenSSM(true);
            }}
          >
            저장 후 닫기
          </button>
          <button className={cx("emph")} onClick={onClick.Save}>
            저장 후 비교
          </button>
        </div>
      </div>
    </div>
  );
};

BookMarkModal.defaultProps = {
  title: "title",
  placeholder: "input",
  onClick: {
    Save: () => {},
    Close: () => {},
  },
  createUseModal: () => {},
};

export default BookMarkModal;
