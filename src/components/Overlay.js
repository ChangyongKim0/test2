import React from "react";
import ZIndexer from "../functions/Zindexer";

import styles from "./Overlay.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Overlay = ({ open, background, animation, children }) => {
  if (open) {
    return (
      <ZIndexer>
        {({ zIndex }) => (
          <div
            className={cx("wrapper")}
            zIndex={zIndex}
            backgroundColor={background.color}
          >
            {children}
          </div>
        )}
      </ZIndexer>
    );
  } else {
    return <></>;
  }
};

Overlay.defaultProps = {
  open: true,
  background: { color: "000000", opacity: "0.25" },
  animation: { type: "dissolve", delay: "50" },
};

export default Overlay;
