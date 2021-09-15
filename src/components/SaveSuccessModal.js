import React from "react";
import Overlay from "./Overlay";
// { useEffect }

import styles from "./SaveSuccessModal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const SaveSuccessModal = ({ text, dela, open, setOpen }) => {
  return (
    <Overlay open={open} setOpen={setOpen} auto_close={true}>
      <button className={cx("wrapper")}>{text}</button>
    </Overlay>
  );
};

SaveSuccessModal.defaultProps = {
  text: "저장 됐어요!",
  delay: 2000,
};

export default SaveSuccessModal;
