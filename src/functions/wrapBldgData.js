const wrapBldgData = (bldg_data) => {
  const ld = bldg_data.land;
  const tr = bldg_data.transaction;
  const idx = bldg_data.bldg_idx;

  let default_data = {
    price: {
      component_type: "text",
      show: true,
      data: {
        title: "최근 실거래가",
        value: 200000000000,
        value_unit: "\u00A0원",
        base: "2019.03",
        base_unit: "",
        base_type: "string",
        value_type: "number",
      },
      style: "emph",
      tooltip: [],
    },
    noc: {
      component_type: "text",
      show: true,
      data: {
        title: "건물 명목 NOC",
        value: 274000,
        value_unit: "\u00A0원",
        value_type: "number",
      },
      style: "emph",
      tooltip: ["건물 명목 NOC =", "(평당+평당 관리비)/전용률"],
    },
    land_price_per_area: {
      component_type: "text",
      show: true,
      data: {
        title: "토지 평당 단가",
        value: 690000000,
        value_unit: "\u00A0원",
        value_type: "number",
      },
      style: "default",
      tooltip: ["거래가(원)/토지면적(평)"],
    },
    rent: {
      component_type: "text",
      show: true,
      data: {
        title: "평당 임대료",
        value: 111000,
        value_unit: "\u00A0원",
        value_type: "number",
      },
      style: "default",
      tooltip: ["전체 월 임대료/전용면적(평)"],
    },
    opex: {
      component_type: "text",
      show: true,
      data: {
        title: "평당 관리비",
        value: 48000,
        value_unit: "\u00A0원",
        value_type: "number",
      },
      style: "default",
      tooltip: ["전체 월 관리료/전용면적(평)"],
    },
    land_title: {
      component_type: "text",
      show: true,
      data: {
        title: "토지",
      },
      style: "title",
      tooltip: [],
    },
    land_size: {
      component_type: "text",
      show: true,
      data: {
        title: "면적",
        value: 1179,
        value_unit: "\u00A0[area]",
        value_type: "number_detail",
      },
      style: "default",
    },
    land_usage: {
      component_type: "text",
      show: true,
      data: {
        title: "이용상황",
        value: "업무용",
        value_unit: "",
        value_type: "string",
      },
      style: "default",
    },
    usage_list: {
      component_type: "blob",
      data: [
        {
          title: "서초로지구 지구단위계획",
          tooltip: ["토지e음으로 이동하기"],
          onClick: "토지계획이용원으로 링크",
        },
        {
          title: "일반상업지역",
          tooltip: ["토지e음으로 이동하기"],
          onClick: "토지계획이용원으로 링크",
        },
      ],
      dropdown_from: -1,
    },
    attachment_land: {
      component_type: "list",
      data: {
        title: "부속 필지",
        value: [
          [
            {
              value: "서울시 강남구 역삼동 101-1",
              value_unit: "",
              value_type: "string",
            },
            {
              value: 3537,
              value_unit: "\u00A0평",
              value_type: "number_detail",
            },
          ],
          [
            {
              value: "서울시 강남구 역삼동 101-1",
              value_unit: "",
              value_type: "string",
            },
            {
              value: 3537,
              value_unit: "\u00A0평",
              value_type: "number_detail",
            },
          ],
        ],
      },
      dropdown_from: 2,
    },
    dev_title: {
      component_type: "text",
      show: true,
      data: {
        title: "개발 가능 한계",
      },
      style: "title",
      tooltip: [
        "서초로지구 지구단위계획에 의하였으며,",
        "일반상업지역에 적용되는 개발한계임",
      ],
    },
    dev_floor_area_ratio: {
      component_type: "text",
      show: true,
      data: {
        title: "최대 용적률",
        value: 8,
        value_unit: "\u00A0%",
        value_type: "rate_over",
      },
      style: "default",
    },
    dev_coverage_ratio: {
      component_type: "text",
      show: true,
      data: {
        title: "최대 건폐율",
        value: 0.6,
        value_unit: "\u00A0%",
        value_type: "rate",
      },
      style: "default",
    },
    dev_height: {
      component_type: "text",
      show: true,
      data: {
        title: "높이 제한",
        value: 70,
        value_unit: "\u00A0m",
        value_type: "number_detail",
      },
      style: "default",
    },
    dev_usage_list: {
      component_type: "blob",
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
    },
    official_price_title: {
      component_type: "text",
      show: true,
      data: {
        title: "공시지가",
      },
      style: "title",
    },
    official_price_year: {
      component_type: "list",
      show: true,
      data: {
        title: "기준년도",
        value: [[]],
      },
      dropdown_from: 3,
    },
    official_price: {
      component_type: "list",
      show: true,
      data: {
        title: "공시지가",
        value: [[]],
      },
      dropdown_from: 3,
    },
    siml_land_title: {
      component_type: "text",
      show: true,
      data: {
        title: "유사 매물",
      },
      style: "title",
    },
    siml_land_address: {
      component_type: "list",
      show: true,
      data: {
        title: "주소",
        value: [
          [
            {
              icon: "bookmark",
            },
            {
              value: "서초구 서초동 321",
              value_unit: "",
              value_type: "string",
            },
          ],
          [
            {
              icon: "bookmark",
            },
            {
              value: "강남구 역삼동 123",
              value_unit: "",
              value_type: "string",
            },
          ],
          [
            {
              icon: "bookmark",
            },
            {
              value: "강남구 역삼동 456",
              value_unit: "",
              value_type: "string",
            },
          ],
        ],
      },
      dropdown_from: 3,
    },
    siml_land_price: {
      component_type: "list",
      show: true,
      data: {
        title: "최근 실거래가",
        value: [
          [
            {
              value: 2630000,
              value_unit: "\u00A0원/평",
              value_type: "number_detail",
            },
          ],
          [
            {
              value: 2830000,
              value_unit: "\u00A0원/평",
              value_type: "number_detail",
            },
          ],
          [
            {
              value: 2310000,
              value_unit: "\u00A0원/평",
              value_type: "number_detail",
            },
          ],
        ],
      },
      dropdown_from: 3,
    },
  };

  let indiv_bldg_data = {};
  let indiv_land_data = {};
  let indiv_tr_data = {};
  if (tr && tr.price) {
    indiv_tr_data = getIndivTrData(tr);
  }
  if (ld && ld.area) {
    indiv_land_data = getIndivLandData(ld);
  }
  if (bldg_data.bldg_exists) {
    const bd_title = bldg_data.bldg.bldg_title_list[idx];
    const bd_info = bldg_data.bldg.bldg_info_list[idx];
    indiv_bldg_data = getIndivBldgData(
      bd_title,
      bd_info,
      bldg_data.bldg.attach_pnu_list
    );
  }
  // console.log(indiv_land_data);
  return {
    ...default_data,
    ...indiv_tr_data,
    ...indiv_land_data,
    ...indiv_bldg_data,
    bldg_exists: bldg_data.bldg_exists,
    transaction_exists: bldg_data.transaction_exists,
  };
};

const getIndivTrData = (tr) => {
  return {
    price: {
      component_type: "text",
      show: true,
      data: {
        title: "최근 실거래가",
        value: tr.price,
        value_unit: "\u00A0원",
        base: tr.date,
        base_unit: "",
        base_type: "string",
        value_type: "number",
      },
      style: "emph",
      tooltip: [],
    },
    noc: {
      component_type: "text",
      show: true,
      data: {
        title: "건물 명목 NOC",
        value: "-",
        value_unit: "\u00A0원",
        value_type: "number",
      },
      style: "emph",
      tooltip: ["건물 명목 NOC =", "(평당+평당 관리비)/전용률"],
    },
    land_price_per_area: {
      component_type: "text",
      show: true,
      data: {
        title: "토지 단가",
        value: tr.price_per_area,
        value_unit: "\u00A0원[/area]",
        value_type: "number",
      },
      style: "default",
      tooltip: ["거래가(원)/토지면적(평)"],
    },
    rent: {
      component_type: "text",
      show: true,
      data: {
        title: "임대료",
        value: "-",
        value_unit: "\u00A0원[/area]",
        value_type: "number",
      },
      style: "default",
      tooltip: ["전체 월 임대료/전용면적(평)"],
    },
    opex: {
      component_type: "text",
      show: true,
      data: {
        title: "관리비",
        value: "-",
        value_unit: "\u00A0원[/area]",
        value_type: "number",
      },
      style: "default",
      tooltip: ["전체 월 관리료/전용면적(평)"],
    },
  };
};

const getIndivLandData = (ld) => {
  return {
    land_size: {
      component_type: "text",
      show: true,
      data: {
        title: "면적",
        value: ld.area,
        value_unit: "\u00A0[area]",
        value_type: "number_detail",
      },
      style: "default",
    },
    land_usage: {
      component_type: "text",
      show: true,
      data: {
        title: "이용상황",
        value: ld.usage,
        value_unit: "",
        value_type: "string",
      },
      style: "default",
    },
    usage_list: {
      component_type: "blob",
      data: ld.usage_list.map((e) => {
        return {
          title: e,
          tooltip: ["토지e음으로 이동하기"],
          onClick: "토지계획이용원으로 링크",
        };
      }),
      dropdown_from: -1,
    },
    official_price_year: {
      component_type: "list",
      show: true,
      data: {
        title: "기준년도",
        value: ld.base_ymd_list.map((e) => [
          {
            value: e,
            value_unit: "",
            value_type: "string",
          },
        ]),
      },
      dropdown_from: 3,
    },
    official_price: {
      component_type: "list",
      show: true,
      data: {
        title: "공시지가",
        value: ld.price_list.map((e) => [
          {
            value: e,
            value_unit: "\u00A0원/[/area]",
            value_type: "number",
          },
        ]),
      },
      dropdown_from: 3,
    },
  };
};

const getIndivBldgData = (bd_title, bd_info, attach) => {
  return {
    attachment_land: {
      component_type: "list",
      data: {
        title: "부속 필지",
        value: attach.map((e) => [
          {
            value: e.addr,
            value_unit: "",
            value_type: "string",
          },
          // {
          //   value: 3537,
          //   value_unit: "\u00A0평",
          //   value_type: "number_detail",
          // },
        ]),
      },
      dropdown_from: 2,
    },
    bldg_title: {
      component_type: "text",
      show: true,
      data: {
        title: bd_title.title,
        base: bd_title.base,
        base_type: "string",
      },
      style: "title",
      tooltip: [],
    },
    bldg_size: {
      component_type: "text",
      show: true,
      data: {
        title: "연면적",
        value: bd_info.farea,
        value_unit: "\u00A0[area]",
        value_type: "number_detail",
      },
      style: "default",
    },
    bldg_year: {
      component_type: "text",
      show: true,
      data: {
        title: "준공년도",
        value: bd_info.const_year,
        value_unit: bd_info.const_year == "-" ? "" : "년",
        value_type: "string",
      },
      style: "default",
    },
    bldg_floor_area_ratio: {
      component_type: "text",
      show: true,
      data: {
        title: "용적률",
        value: bd_info.far,
        value_unit: "\u00A0%",
        value_type: "rate_over",
      },
      style: "default",
    },
    bldg_floor: {
      component_type: "text",
      show: true,
      data: {
        title: "건물 규모",
        value: bd_info.size,
        value_unit: "",
        value_type: "floor_range",
      },
      style: "default",
    },
    bldg_coverage_ratio: {
      component_type: "text",
      show: true,
      data: {
        title: "건폐율",
        value: bd_info.bcr,
        value_unit: "\u00A0%",
        value_type: "rate",
      },
      style: "default",
    },
    bldg_exclusive_rate: {
      component_type: "text",
      show: true,
      data: {
        title: "전용률",
        value: bd_info.par,
        value_unit: bd_info.par == "-" ? "" : "\u00A0%",
        value_type: "rate",
      },
      style: "default",
    },
    bldg_usage_list: {
      component_type: "blob",
      data: bd_info.usage_list.map((e) => {
        return { title: e, tooltip: ["토지e음으로 이동하기"] };
      }),
    },
    bldg_detail: {
      component_type: "list",
      data: {
        title: "건물 상세",
        value: bd_info.detail.map((e) => [
          {
            value: e.floor,
            value_unit: typeof e.floor == typeof 1 ? "F" : "",
            value_type: "floor",
          },
          {
            value: e.usage,
            value_unit: "",
            value_type: "string",
          },
          {
            value: e.area,
            value_unit: "[area]",
            value_type: "number_detail",
          },
        ]),
      },
      dropdown_from: 2,
    },
  };
};

export default wrapBldgData;
