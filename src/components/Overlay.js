import React, { useEffect, useState } from "react";
import ZIndexer from "../functions/Zindexer";
import useAnimation from "../hooks/useAnimation";

import styles from "./Overlay.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Overlay = ({ open, setOpen, backdrop, auto_close, children }) => {
  const new_backdrop = backdrop ? "backdrop" : "";

  const [anime, setAnime] = useAnimation("");
  useEffect(() => {
    if (auto_close && open) {
      setAnime("close", 1000, open);
      setOpen("false");
    } else {
      setAnime("close", 0, open);
    }
  }, [open]);

  if (anime.active) {
    return (
      <ZIndexer>
        {({ zIndex }) => (
          <div
            className={cx("wrapper", anime.name, new_backdrop)}
            zIndex={zIndex}
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
  backdrop: false,
};

export default Overlay;
