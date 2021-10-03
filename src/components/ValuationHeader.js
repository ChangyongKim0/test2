import React, { useEffect, useState } from "react";
import { useModal } from "../hooks/useModal";

import styles from "./ValuationHeader.module.scss";
import classNames from "classnames/bind";
// import AddressSearcher from "./AddressSearcher";
import BackwardIcon from "../atom/BackwardIcon";
import CtaButton from "../atom/CtaButton";
import SaveSuccessModal from "./SaveSuccessModal";
import Overlay from "./Overlay";
import BookMarkModal from "./BookMarkModal";

const cx = classNames.bind(styles);

const ValuationHeader = ({
  useModalParam,
  title,
  sub_title,
  saved_name,
  onClick,
}) => {
  //   console.log(nav_emph_list);
  // const [open_BMM, setOpenBMM] = useState(true);
  const handleSave = () => {
    return -1;
  };

  const [open_BMM, setOpenBMM, registerBMM, modal_update] =
    useModal(useModalParam);

  useEffect(() => {
    registerBMM(
      <Overlay open={true} setOpen={setOpenBMM} use_backdrop={true}>
        <BookMarkModal
          onClick={{
            Close: () => {
              setOpenBMM(false);
            },
          }}
          useModalParam={useModalParam}
        />
      </Overlay>
    );
    console.log("registered BMM.");
    console.log(open_BMM);
  }, [modal_update]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("frame-left")} onClick={onClick.Backward()}>
        <BackwardIcon />
      </div>
      <div className={cx("title-frame")}>
        <div className={cx("title")}>{title}</div>
        <div className={cx("sub-title")}>{sub_title}</div>
      </div>
      <div className={cx("frame-right")}>
        <CtaButton
          size="small"
          background="transparent"
          icon="chart"
          is_clickable={false}
        >
          {saved_name}
        </CtaButton>
        <CtaButton
          size="small"
          shape="round"
          background="color"
          icon="none"
          onClick={() => setOpenBMM(true)}
        >
          밸류에이션 저장
        </CtaButton>
      </div>
    </div>
  );
};

ValuationHeader.defaultProps = {
  title: "title",
  sub_title: "sub_title",
  saved_name: "saved_name",
  onClick: {
    Backward: () => {},
    Save: () => {},
  },
};

export default ValuationHeader;

// ValuationHeader Scheme
// - title, sub_title, saved_name, onClickBackward
