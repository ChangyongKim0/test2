import React, { useEffect, useState } from "react";
// { useEffect }

import styles from "./ChangeUnitButton.module.scss";
import classNames from "classnames/bind";
import CtaButton from "../atom/CtaButton";
import useUnitType from "../hooks/useUnitType";

const cx = classNames.bind(styles);

const ChangeUnitButton = () => {
  const [unit_type, setUnitType] = useUnitType();
  const [is_clicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (is_clicked) {
      if (unit_type == "sqm") {
        setUnitType("py");
      } else {
        setUnitType("sqm");
      }
      setIsClicked(false);
    }
  }, [is_clicked]);

  return (
    <CtaButton
      size="small"
      shape="round"
      background="white"
      icon="change"
      border="gray"
      onClick={() => setIsClicked(true)}
      id="ChangeUnit"
    >
      단위
    </CtaButton>
  );
};

ChangeUnitButton.defaultProps = {
  address: "address",
};

export default ChangeUnitButton;
