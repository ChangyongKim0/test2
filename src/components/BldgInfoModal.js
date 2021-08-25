import React, { useEffect } from "react";
import BldgInfoModalContent from "./BldgInfoModalContent";

import styles from "./BldgInfoModal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const BldgInfoModal = ({ info }) => {
  useEffect(() => {
    // console.log(info.keys);
  });
  if (info.show === false) {
    return <></>;
  }
  return (
    <div className={cx("wrapper")}>
      <div className={cx("modal")}>
        <BldgInfoModalContent keys={info.keys} vals={info.vals} />
      </div>
    </div>
  );
};

export default BldgInfoModal;
