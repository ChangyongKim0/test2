import React, { useEffect } from "react";
// { useEffect }

import styles from "./ChangeUnitButton.module.scss";
import classNames from "classnames/bind";
import CtaButton from "../atom/CtaButton";
import useUnitType from "../hooks/useUnitType";
import useToggleState from "../hooks/useToggle";

const cx = classNames.bind(styles);

const ChangeUnitButton = () => {
  const [unit_type, setUnitType] = useUnitType();
  const [toggle, setToggle] = useToggleState({ is_py: true });

  useEffect(() => {
    if (toggle.is_py == true) {
      setUnitType("py");
    } else {
      setUnitType("sqm");
    }
  }, [toggle]);

  const changeUnit = () => {
    setToggle("is_py");
  };
  return (
    <CtaButton
      size="small"
      shape="round"
      background="white"
      icon="change"
      border="gray"
      onClick={changeUnit}
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
