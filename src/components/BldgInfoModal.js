import React, { useEffect } from "react";
import BldgInfo from "./BldgInfo";
import { ReactComponent as CloseSvg } from "../atom/CloseSvg.svg";

import styles from "./BldgInfoModal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const BldgInfoModal = ({ info, handleBldgInfo, setIsClicked }) => {
  if (info.active === false) {
    return <></>;
  } else {
    return (
      <div className={cx("wrapper")}>
        <div className={cx("modal")}>
          <BldgInfo keys={info.keys} vals={info.vals} />
          <CloseSvg
            className={cx("btn-close")}
            onClick={() => {
              handleBldgInfo({ show: false, id: -1 });
              setIsClicked(true);
            }}
          />
          <button className={cx("box-btn")} type="submit" value="좌표">
            개발 Valuation 검토
          </button>
        </div>
      </div>
    );
  }
};

BldgInfoModal.defaultProps = {
  info: { active: true },
  handleBldgInfo: (_) => {},
  setIsClicked: (_) => {},
};

export default BldgInfoModal;
