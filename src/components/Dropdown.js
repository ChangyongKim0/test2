import React, { useEffect } from "react";
// { useEffect }

import styles from "./Dropdown.module.scss";
import classNames from "classnames/bind";
import useAnimation from "../hooks/useAnimation";

const cx = classNames.bind(styles);

const Dropdown = ({ children, open, handleOpen, delay }) => {
  const [anime, setAnime] = useAnimation("");
  useEffect(() => {
    console.log(open);
    if (!open) {
      setAnime("close", delay, open);
    } else {
      setAnime("open", 0, open);
    }
  }, [open]);

  if (!anime.active) {
    return <></>;
  } else {
    return <div className={cx("wrapper", anime.name)}>{children}</div>;
  }
};

Dropdown.defaultProps = {
  open: false,
  children: <div className={cx("children")}>children</div>,
  delay: 500,
};

export default Dropdown;
