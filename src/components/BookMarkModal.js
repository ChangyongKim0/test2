import React, { useState } from "react";
import { ReactComponent as CloseSvg } from "../atom/CloseSvg.svg";

import styles from "./BookMarkModal.module.scss";
import classNames from "classnames/bind";
import SaveSuccessModal from "./SaveSuccessModal";
import Overlay from "./Overlay";

const cx = classNames.bind(styles);

const BookMarkModal = ({ title, placeholder, onClick }) => {
  const [open_SS, setOpenSS] = useState(false);

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
              setOpenSS(true);
            }}
          >
            저장 후 닫기
          </button>
          <button className={cx("emph")} onClick={onClick.Save}>
            저장 후 비교
          </button>
        </div>
      </div>
      <SaveSuccessModal open={open_SS} setOpen={setOpenSS} />
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
};

export default BookMarkModal;
