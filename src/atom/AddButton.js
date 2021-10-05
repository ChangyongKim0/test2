import React from "react";
import { ReactComponent as AddSvg } from "./AddSvg.svg";

import styles from "./AddButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const AddButton = ({ onClick }) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("btn")} onClick={onClick}>
        <AddSvg className={cx("btn-add")} />
      </div>
    </div>
  );
};

AddButton.defaultProps = {
  onClick: () => {},
};

export default AddButton;
