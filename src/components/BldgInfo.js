import React, { useLayoutEffect, useState } from "react";

import styles from "./BldgInfo.module.scss";
import classNames from "classnames/bind";
import ToolTip from "./ToolTip";
import BldgInfoBlob from "./BldgInfoBlob";
import BldgInfoText from "./BldgInfoText";
import BldgInfoList from "./BldgInfoList";
import useToggleState from "../hooks/useToggle";
import { ReactComponent as ToggleSvg } from "../atom/ToggleSvg.svg";
import useBldgInfoData from "../hooks/useBldgInfoData";
import wrapBldgData from "../functions/wrapBldgData";

const cx = classNames.bind(styles);

const BldgInfo = () => {
  let [show_info, setShowInfo] = useState(false);
  const [dropped_down, setDroppedDown] = useToggleState({
    attachment_land: false,
    bldg_detail: false,
    official_price: false,
  });
  const [bldg_info_data, _] = useBldgInfoData();
  const [wrapped_data, setWrappedData] = useState(
    wrapBldgData({
      land: {},
      bldg: {},
      transaction: {},
    })
  );

  useLayoutEffect(() => {
    setWrappedData(wrapBldgData(bldg_info_data.data));
    console.log(wrapped_data);
  }, [bldg_info_data]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("frame-column")}>
        <div className={cx("frame-div2")}>
          <BldgInfoText {...wrapped_data.price} />
          <BldgInfoText {...wrapped_data.noc} />
        </div>
        <div className={cx("frame-div4")}>
          <BldgInfoText {...wrapped_data.land_price_per_area} />
          <div></div>
          <BldgInfoText {...wrapped_data.rent} />
          <BldgInfoText {...wrapped_data.opex} />
        </div>
      </div>
      <div className={cx("frame-column")}>
        <div className={cx("frame-div2")}>
          <BldgInfoText {...wrapped_data.land_title} />
          <div className={cx("frame-div2")}>
            <BldgInfoText {...wrapped_data.land_size} />
            <BldgInfoText {...wrapped_data.land_usage} />
          </div>
        </div>
        <div className={cx("frame-div1")}>
          <BldgInfoBlob {...wrapped_data.usage_list} pnu={bldg_info_data.pnu} />
        </div>
        {wrapped_data.usage_list.dropdown_from > 0 ? <ToggleSvg /> : <></>}
        {wrapped_data.bldg_exists ? (
          <>
            {wrapped_data.attachment_land.data.value.length == 0 ? (
              <></>
            ) : (
              <div className={cx("frame-div1")}>
                <BldgInfoList
                  {...wrapped_data.attachment_land}
                  force_dropdown={dropped_down.attachment_land}
                />
                {wrapped_data.attachment_land.dropdown_from > 0 &&
                wrapped_data.attachment_land.data.value.length >
                  wrapped_data.attachment_land.dropdown_from ? (
                  <div
                    className={cx("toggleBox")}
                    onClick={() => setDroppedDown("attachment_land")}
                  >
                    <ToggleSvg
                      className={cx(
                        "toggle",
                        dropped_down.attachment_land ? "dropped-down" : ""
                      )}
                    />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            )}
            <div className={cx("frame-div2")}>
              <BldgInfoText {...wrapped_data.bldg_title} />
              <div className={cx("frame-column")}>
                <div className={cx("frame-div2")}>
                  <BldgInfoText {...wrapped_data.bldg_size} />
                  <BldgInfoText {...wrapped_data.bldg_year} />
                </div>
                <div className={cx("frame-div2")}>
                  <BldgInfoText {...wrapped_data.bldg_floor_area_ratio} />
                  <BldgInfoText {...wrapped_data.bldg_floor} />
                </div>
                <div className={cx("frame-div2")}>
                  <BldgInfoText {...wrapped_data.bldg_coverage_ratio} />
                  <BldgInfoText {...wrapped_data.bldg_exclusive_rate} />
                </div>
              </div>
            </div>
            <div className={cx("frame-div1")}>
              <BldgInfoBlob
                {...wrapped_data.bldg_usage_list}
                pnu={bldg_info_data.pnu}
              />
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      {wrapped_data.bldg_exists ? (
        <div className={cx("frame-column")}>
          <div className={cx("frame-div1")}>
            <BldgInfoList
              {...wrapped_data.bldg_detail}
              force_dropdown={dropped_down.bldg_detail}
            />
            {wrapped_data.bldg_detail.dropdown_from > 0 &&
            wrapped_data.bldg_detail.data.value.length >
              wrapped_data.bldg_detail.dropdown_from ? (
              <div
                className={cx("toggleBox")}
                onClick={() => setDroppedDown("bldg_detail")}
              >
                <ToggleSvg
                  className={cx(
                    "toggle",
                    dropped_down.bldg_detail ? "dropped-down" : ""
                  )}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className={cx("frame-column")}>
        <div className={cx("frame-div1")}>
          <BldgInfoText {...wrapped_data.official_price_title} />
        </div>
        <div className={cx("frame-div1")}>
          <div className={cx("frame-div2")}>
            <BldgInfoList
              {...wrapped_data.official_price_year}
              force_dropdown={dropped_down.official_price}
            />
            <BldgInfoList
              {...wrapped_data.official_price}
              force_dropdown={dropped_down.official_price}
            />
          </div>
          {wrapped_data.official_price.dropdown_from > 0 &&
          wrapped_data.official_price.data.value.length >
            wrapped_data.official_price.dropdown_from ? (
            <div
              className={cx("toggleBox")}
              onClick={() => setDroppedDown("official_price")}
            >
              <ToggleSvg
                className={cx(
                  "toggle",
                  dropped_down.official_price ? "dropped-down" : ""
                )}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default BldgInfo;
