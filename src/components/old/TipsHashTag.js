import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import styles from "./TipsHashTag.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const TipsHashTag = ({ name, activated }) => {
  return (
    <div>
      <button>{name}</button>
    </div>
  );
};

export default TipsHashTag;
