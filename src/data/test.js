let BookMarkModel = {};

BookMarkModel.scheme = {
  title: "매물 북마크",
  placeholder: "강남로1",
  save_btn_name: "저장 후 매물비교",
  onClick: {
    SaveAndComp: "매물 저장",
    SaveAndClose: "매물 저장 후 필지 비교 페이지로 이동",
  },
};

BookMarkModel.scheme_2 = {
  title: "밸류에이션 저장",
  placeholder: "강남로1, 210906-1",
  save_btn_name: "저장 후 비교",
  onClick: {
    SaveAndComp: "밸류 저장",
    SaveAndClose: "밸류 저장 후 밸류 비교 페이지로 이동", // 주석
  },
};
