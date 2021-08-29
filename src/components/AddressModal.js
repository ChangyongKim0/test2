import React, { useEffect } from "react";

import styles from "./AddressModal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const AddressModal = ({ address }) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("modal")}>{address}</div>
    </div>
  );
};

export default AddressModal;
