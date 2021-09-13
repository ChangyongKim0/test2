import React from "react";
// { useEffect }

import styles from "./SaveSuccessModal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const SaveSuccessModal = ({ text }) => {
  text = text || "저장 됐어요!";

  return <button className={cx("wrapper")}>{text}</button>;
};

export default SaveSuccessModal;
