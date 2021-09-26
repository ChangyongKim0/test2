import React from "react";

import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import AddressSearcher from "./AddressSearcher";

const cx = classNames.bind(styles);

const Header = ({ nav_emph, is_searchable }) => {
  const nav_list = ["map", "valuation"];
  let nav_emph_list = {};
  // eslint-disable-next-line array-callback-return
  nav_list.map((e) => {
    if (nav_emph === e) {
      nav_emph_list[e] = "emph";
    } else {
      nav_emph_list[e] = "";
    }
  });
  //   console.log(nav_emph_list);
  return (
    <div className={cx("wrapper")}>
      <div>LOGO</div>
      <div className={cx("frame")}>
        <div className={cx("navigation", "emph")}>
          <p className={cx(nav_emph_list.map)}>지도</p>
          <p>밸류에이션</p>
        </div>
        {!is_searchable || <AddressSearcher />}
      </div>
      <div className={cx("other icon")}>BOOKMARK</div>
    </div>
  );
};

Header.defaultProps = {
  nav_emph: "map",
  is_searchable: true,
};

export default Header;
