import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import AddressSearcher from "./AddressSearcher";
import LogoButton from "../atom/LogoButton";
import { ReactComponent as AccountSvg } from "../atom/AccountSvg.svg";
import CtaButton from "../atom/CtaButton";

const cx = classNames.bind(styles);

const Header = ({
  nav_emph,
  is_searchable,
  use_sub_button,
  sub_button_name,
  link_sub_button_to,
}) => {
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
      <div className={cx("frame-left")}>
        <LogoButton />
      </div>
      <div className={cx("frame-center")}>
        <div className={cx("navigation")}>
          <Link to={"/"}>
            <p className={cx(nav_emph_list.map)}>지도</p>
          </Link>
          <Link to={"/valuation"}>
            <p className={cx(nav_emph_list.valuation)}>밸류에이션</p>
          </Link>
        </div>
        {is_searchable ? <AddressSearcher /> : <></>}
      </div>
      <div className={cx("frame-right")}>
        {use_sub_button ? (
          <Link to={link_sub_button_to}>
            <CtaButton size="small" shape="round" background="transparent">
              {sub_button_name}
            </CtaButton>
          </Link>
        ) : (
          <></>
        )}
        <AccountSvg className={cx("btn-account")} />
      </div>
    </div>
  );
};

Header.defaultProps = {
  nav_emph: "map",
  is_searchable: true,
  use_sub_button: false,
  sub_button_name: "sub_button_name",
  link_sub_button_to: "/",
};

export default Header;
