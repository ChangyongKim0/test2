import React, { useEffect } from "react";

import styles from "./BldgInfoModal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const BackgroundMap = () => {
  useEffect(() => {});

  return (
    <div className="wrapper">
      <div id="map" className={cx("map")}></div>
    </div>
  );
};

export default BackgroundMap;
