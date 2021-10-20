import React from "react";
// { useEffect }

import styles from "./BldgInfoBlob.module.scss";
import classNames from "classnames/bind";
import ToolTip from "./ToolTip";
import useFormatter from "../hooks/useFormatter";

const cx = classNames.bind(styles);

const eumLinkMaker = (pnu) => {
  const sel_sido = pnu.slice(0, 2);
  const sel_sgg = pnu.slice(2, 5);
  const sel_umd = pnu.slice(5, 8);
  const sel_ri = pnu.slice(8, 10);
  const land_gbn = pnu.slice(10, 11);
  const bon_bun = pnu.slice(11, 15);
  const bu_bun = pnu.slice(15, 19);
  return (
    "http://www.eum.go.kr/web/ar/lu/luLandDet.jsp?selSido=" +
    sel_sido +
    "&selSgg=" +
    sel_sgg +
    "&selUmd=" +
    sel_umd +
    "&selRi=" +
    sel_ri +
    "&landGbn=" +
    land_gbn +
    "&bobn=" +
    bon_bun +
    "&bubn=" +
    bu_bun +
    "&sggcd=&isNoScr=script&mode=search&selGbn=umd&s_type=1&add=land&pnu=" +
    pnu
  );
};

const BldgInfoBlob = ({ pnu, data }) => {
  return (
    <div className={cx("wrapper")}>
      {data.map((e, idx) => (
        <ToolTip key={idx} enable={e.tooltip.length > 0} data={e.tooltip}>
          <a key={idx} href={eumLinkMaker(pnu)} target="_blank">
            <div className={cx("frame-blob")}>
              <div className={cx("text")}>{e.title}</div>
            </div>
          </a>
        </ToolTip>
      ))}
    </div>
  );
};

BldgInfoBlob.defaultProps = {
  pnu: "1168010100108080005",
  data: [
    {
      title: "서초로지구 지구단위계획",
      tooltip: ["클릭시 토지계획이용원으로 이동"],
      onClick: "토지계획이용원으로 링크",
    },
    {
      title: "일반상업지역",
      tooltip: ["클릭시 토지계획이용원으로 이동"],
      onClick: "토지계획이용원으로 링크",
    },
  ],
};

export default BldgInfoBlob;

// usage_list: {
//     component_type: "blob",
//     data: [
//       {
//         title: "서초로지구 지구단위계획",
//         tooltip: ["클릭시 토지계획이용원으로 이동"],
//         onClick: "토지계획이용원으로 링크",
//       },
//       {
//         title: "일반상업지역",
//         tooltip: ["클릭시 토지계획이용원으로 이동"],
//         onClick: "토지계획이용원으로 링크",
//       },
//     ],
//   },
