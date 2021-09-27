import React from "react";
import { ReactComponent as ChartSvg } from "./ChartSvg.svg";
import { ReactComponent as ChangeSvg } from "./ChangeSvg.svg";
// import { Link } from "react-router-dom";

import styles from "./CtaButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CtaButton = ({ id, size, icon, shape, background, onClick, children, is_clickable}) => {
  let class_list = [
    "size-"+size,
    "icon-"+icon,
    "shape-"+shape,
    "background-"+background,
  ];

  if (is_clickable){
    class_list.push("is-clickable")
  }

  const selectSvg = () => {
    const css_style = cx("svg-size-"+size, "svg-background-"+background);
    switch(icon) {
      case "default":
        return <ChartSvg className={css_style}/>;
      case "change":
        return <ChangeSvg className={css_style}/>;
      case "chart":
        return <ChartSvg className={css_style}/>;
      default:
        return <></>;
    }
  }

  const putCTALog = () => {
    console.log("cta button ["+id+"] is clicked!!!")
  }

  return (
    <div onClick={()=>{onClick(); putCTALog();}} className={cx("btn", ...class_list)}>
      {selectSvg()}
      <div>{children}</div>
    </div>
  );
};

CtaButton.defaultProps = {
  id: "id",
  size: "small",
  icon: "none",
  shape: "square",
  background: "color",
  onClick: () => {},
  children: "children",
  is_clickable: true
}

export default CtaButton;

// CTAButton Scheme
// - size: small / medium / big
// - icon: none / default / change / chart / 
// - shape: round / square 
// - background: color / white / transparent
// - onClick
// - text <= children
