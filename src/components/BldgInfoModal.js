import React, { useEffect } from "react";
import BldgInfo from "./BldgInfo";
import { ReactComponent as CloseSvg } from "../atom/CloseSvg.svg";

import styles from "./BldgInfoModal.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import useBldgInfoData from "../hooks/useBldgInfoData";
import BookMarkButton from "../atom/BookMarkButton";

const cx = classNames.bind(styles);

const BldgInfoModal = ({
  title,
  sub_title,
  info,
  handleBldgInfo,
  setIsClicked,
}) => {
  const [bldg_info_data, _] = useBldgInfoData();
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
                <BookMarkButton />
              </div>
            </div>
            <div className={cx("frame-center")}>
              <div className={cx("title")}>
                {bldg_info_data.data.addr || "주소 없음"}
              </div>
              <div className={cx("sub-title")}>
                {bldg_info_data.data.bldg_exists
                  ? bldg_info_data.data.bldg.bldg_info_list[
                      bldg_info_data.data.bldg_idx
                    ].road_addr
                  : "도로명 주소 없음"}
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
          <button className={cx("frame-btn")} type="submit" value="좌표">
            <Link to="/valuation">
              <div className={cx("box")}>개발 밸류에이션 검토</div>
            </Link>
          </button>
        </div>
      </div>
    );
  }
};

BldgInfoModal.defaultProps = {
  title: "서울시 강남구 역삼동 101-1",
  sub_title: "서울시 강남구 강남로 1",
  info: { active: true },
  handleBldgInfo: (_) => {},
  setIsClicked: (_) => {},
};

export default BldgInfoModal;
