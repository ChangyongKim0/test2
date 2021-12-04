import React from "react";
import { ReactComponent as BookMarkSvg } from "./BookMarkSvg.svg";
import { ReactComponent as BookMarkFilledSvg } from "./BookMarkFilledSvg.svg";

import styles from "./BookMarkButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const BookMarkButton = ({ onClick, is_saved }) => {
  return (
    <div className={cx("wrapper")} onClick={onClick}>
      {is_saved ? (
        <BookMarkFilledSvg className={cx("btn-bookmark-filled")} />
      ) : (
        <BookMarkSvg className={cx("btn-bookmark")} />
      )}
    </div>
  );
};

BookMarkButton.defaultProps = {
  is_saved: true,
  onClick: () => {},
};

export default BookMarkButton;
