import React, { useEffect, useState } from "react";
import BldgInfo from "./BldgInfo";
import { ReactComponent as CloseSvg } from "../atom/CloseSvg.svg";

import styles from "./BldgInfoModal.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import useBldgInfoData from "../hooks/useBldgInfoData";
import BookMarkButton from "../atom/BookMarkButton";
import useCookieData from "../hooks/useCookieData";
import useOverlayReloader from "../hooks/useOverlayReloader";

const cx = classNames.bind(styles);

const BldgInfoModal = ({
  title,
  sub_title,
  info,
  handleBldgInfo,
  setIsClicked,
}) => {
  const [cookie_data, handleCookieData] = useCookieData();
  const [bldg_info_data, _] = useBldgInfoData();
  const [_1, handleOverlayReloader] = useOverlayReloader();

  const isBookMarked = (pnu, pilji_list) => {
    console.log(pilji_list, pnu);
    if (pilji_list != undefined) {
      return pilji_list.map((e) => e.id).includes(pnu);
    } else {
      return false;
    }
  };

  const toggleBookmarkedPiljiData = (bldg_info_data, cookie_data) => {
    if (isBookMarked(bldg_info_data.pnu, cookie_data.data.pilji_list)) {
      handleCookieData({
        type: "delete",
        data: {
          pilji_list: bldg_info_data.pnu,
        },
      });
    } else {
      handleCookieData({
        type: "add",
        data: {
          pilji_list: { data: bldg_info_data.data, id: bldg_info_data.pnu },
        },
      });
    }
    handleOverlayReloader({ type: "activate", data: [bldg_info_data.pnu] });
  };

  useEffect(() => {
    console.log(bldg_info_data);
  }, [bldg_info_data]);

  if (info.active === false) {
    return <></>;
  } else {
    return (
      <div className={cx("wrapper")}>
        <div className={cx("modal")}>
          <div className={cx("frame-title")}>
            <div className={cx("frame-left")}>
              <div>
                <BookMarkButton
                  is_saved={isBookMarked(
                    bldg_info_data.pnu,
                    cookie_data.data.pilji_list
                  )}
                  onClick={() => {
                    toggleBookmarkedPiljiData(bldg_info_data, cookie_data);
                  }}
                />
              </div>
            </div>
            <div className={cx("frame-center")}>
              <div className={cx("title")}>
                {bldg_info_data.data.addr || "?????? ??????"}
              </div>
              <div className={cx("sub-title")}>
                {bldg_info_data.data.bldg_exists
                  ? bldg_info_data.data.bldg.bldg_info_list[
                      bldg_info_data.data.bldg_idx
                    ]?.road_addr
                  : "????????? ?????? ??????"}
              </div>
            </div>
            <div className={cx("frame-right")}>
              <CloseSvg
                className={cx("btn-close")}
                onClick={() => {
                  handleBldgInfo({ show: false, id: -1 });
                  setIsClicked(true);
                }}
              />
            </div>
          </div>
          <div className={cx("frame-content")}>
            <BldgInfo keys={info.keys} vals={info.vals} />
          </div>
          <button className={cx("frame-btn")} type="submit" value="??????">
            <Link to="/valuation">
              <div className={cx("box")}>?????? ??????????????? ??????</div>
            </Link>
          </button>
        </div>
      </div>
    );
  }
};

BldgInfoModal.defaultProps = {
  title: "????????? ????????? ????????? 101-1",
  sub_title: "????????? ????????? ????????? 1",
  info: { active: true },
  handleBldgInfo: (_) => {},
  setIsClicked: (_) => {},
};

export default BldgInfoModal;
