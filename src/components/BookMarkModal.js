import React, { useState, useEffect } from "react";
import { ReactComponent as CloseSvg } from "../atom/CloseSvg.svg";

import styles from "./BookMarkModal.module.scss";
import classNames from "classnames/bind";
import SaveSuccessModal from "./SaveSuccessModal";
import Overlay from "./Overlay";
import { useModal } from "../hooks/useModal";

const cx = classNames.bind(styles);

const BookMarkModal = ({ title, placeholder, onClick, useModalParam }) => {
  const [open_SSM, setOpenSSM, registerSSM, modal_update] =
    useModal(useModalParam);

  const [save_name, setSaveName] = useState("");

  const idInfo = (save_name) => {
    const save_time = Date.now();
    return {
      id: save_name + save_time,
      save_name: save_name,
      save_time: save_time,
    };
  };

  registerSSM(<SaveSuccessModal open={true} setOpen={setOpenSSM} />);
  // console.log("registered SSM.");
  // console.log(open_SSM);
  // console.log(modal_update);

  useEffect(() => {}, [modal_update, open_SSM]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("title-field")}>
        <h1 className={cx("title")}>{title}</h1>
        <CloseSvg className={cx("btn-close")} onClick={onClick.Close} />
      </div>
      <div className={cx("input-field")}>
        <input
          id="BMM-save-name"
          className={cx("input")}
          type="text"
          placeholder={placeholder}
          onBlur={() =>
            setSaveName(document.getElementById("BMM-save-name").value)
          }
        ></input>
      </div>
      <div className={cx("btn-field")}>
        <button onClick={onClick.Close}>닫기</button>
        <div className={cx("btn-list-save")}>
          <button
            onClick={() => {
              onClick.Save(idInfo(save_name));
              setOpenSSM(true);
              setTimeout(onClick.Close, 1000);
            }}
          >
            저장 후 닫기
          </button>
          <button
            className={cx("emph")}
            onClick={() => {
              onClick.Save(idInfo(save_name));
              setOpenSSM(true);
              setTimeout(onClick.Go, 1000);
            }}
          >
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
    Go: () => {},
  },
  useModalParam: () => {},
};

export default BookMarkModal;
