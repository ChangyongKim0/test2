import React, { useEffect, useState } from "react";
import ZIndexer from "../functions/Zindexer";
import useAnimation from "../hooks/useAnimation";

import styles from "./Overlay.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Overlay = ({ open, setOpen, use_backdrop, auto_close, children }) => {
  const backdrop = use_backdrop ? "backdrop-true" : "";

  const [anime, setAnime] = useAnimation("open");
  useEffect(() => {
    if (auto_close && open) {
      setAnime("close", 1000, open);
      setTimeout(() => setOpen(false), 1000);
      console.log("setOpen is used.");
    } else {
      setAnime("open", 0, open);
    }
  }, [open]);

  return (
    <ZIndexer>
      {({ zIndex }) => (
        <div className={cx("wrapper", anime.name, backdrop)} zIndex={zIndex}>
          {children}
        </div>
      )}
    </ZIndexer>
  );
};

Overlay.defaultProps = {
  open: true,
  use_backdrop: false,
  auto_close: false,
};

export default Overlay;
