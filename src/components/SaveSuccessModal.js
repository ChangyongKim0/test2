import React, { useState } from "react";
import Overlay from "./Overlay";
// { useEffect }

import styles from "./SaveSuccessModal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const SaveSuccessModal = ({ text, delay, open, setOpen }) => {
  // const [open, setOpen] = useState(true);

  return (
    <Overlay
      open={open}
      setOpen={setOpen}
      use_backdrop={true}
      auto_close={true}
    >
      <button className={cx("wrapper")}>{text}</button>
    </Overlay>
  );
};

SaveSuccessModal.defaultProps = {
  text: "저장 됐어요!",
  delay: 2000,
  setOpen: () => {},
};

export default SaveSuccessModal;
