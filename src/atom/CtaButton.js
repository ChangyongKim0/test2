import React from "react";
import { ReactComponent as BackwardSvg } from "./BackwardSvg.svg";
import { Link } from "react-router-dom";

import styles from "./CtaButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CtaButton = ({ link_to }) => {
  return (
    <Link to={link_to}>
      <BackwardSvg className={cx("btn-backward")} />
    </Link>
  );
};

export default CtaButton;
