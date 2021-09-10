import React from "react";
// , { useEffect }

import styles from "./AddressSearcher.module.scss";
import classNames from "classnames/bind";
import UseAutocomplete from "./UseAutoComplete";

const cx = classNames.bind(styles);

const AddressSearcher = () => {
  return (
    <div className={cx("wrapper")}>
      {/* <input
        className={cx("text-field")}
        type="text"
        placeholder="주소 입력"
      ></input> */}
      <UseAutocomplete />
      <div className={cx("icon")}>O.</div>
    </div>
  );
};

export default AddressSearcher;
