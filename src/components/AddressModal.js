import React from "react";
// { useEffect }

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

AddressModal.defaultProps = {
  address: "address",
};

export default AddressModal;
