import React, { useEffect, useState, useReducer } from "react";
// , { useEffect }

import styles from "./AddressSearcher.module.scss";
import classNames from "classnames/bind";
import UseAutocomplete from "./UseAutoComplete";
import useBldgInfoData from "../hooks/useBldgInfoData";
import { cloneDeep } from "lodash";

const cx = classNames.bind(styles);

let input_search = "";

const reduceSearchResults = (state, action) => {
  let new_state = cloneDeep(state);
  switch (action.type) {
    case "focus_down":
      if (state.focus < state.data.length - 1) {
        new_state.focus = state.focus + 1;
      } else {
        new_state.focus = 0;
      }
      return new_state;
    case "focus_up":
      if (state.focus > 0) {
        new_state.focus = state.focus - 1;
      } else {
        new_state.focus = Math.max(state.data.length - 1, 0);
      }
      return new_state;
    case "update":
      new_state.data = action.data;
      new_state.focus = 0;
      return new_state;
    case "click":
      console.log(state);
      action.callback(state);
      return new_state;
    default:
      return state;
  }
};

const emphasizeText = (text, word) => {
  // return text.replace(new RegExp(word, "gi"), `<mark>${word}</mark>`);
  return text.split(word).map((e, idx) =>
    idx == 0 ? (
      <span>{e}</span>
    ) : (
      <span>
        <span className={cx("text-emph")}>{word}</span>
        {e}
      </span>
    )
  );
};

const formatCategory = (data) => {
  const splitted = data.split(" > ");
  if (splitted.length > 1) {
    return splitted[0] + " > " + splitted.slice(-1);
  } else {
    return data;
  }
};

const AddressSearcher = () => {
  const [search_results, handleSearchResults] = useReducer(
    reduceSearchResults,
    { data: [], focus: 0 }
  );

  const [bldg_info_data, handleBldgInfoData] = useBldgInfoData();

  let places = new window.kakao.maps.services.Places();

  let callback = function (result, status) {
    if (status === window.kakao.maps.services.Status.OK) {
      console.log(result);
      handleSearchResults({ type: "update", data: result });
    }
  };

  // address_name: "서울 마포구 연남동 568-23";
  // category_group_code: "FD6";
  // category_group_name: "음식점";
  // category_name: "음식점 > 한식";
  // distance: "";
  // id: "1650833864";
  // phone: "02-332-9357";
  // place_name: "한";
  // place_url: "http://place.map.kakao.com/1650833864";
  // road_address_name: "서울 마포구 동교로27길 41";
  // x: "126.921453250265";
  // y: "37.5596821334816";

  useEffect(() => {
    input_search = document.getElementById("input_search");
    input_search.addEventListener("keydown", (e) => {
      if (e.key == "ArrowUp") {
        e.preventDefault();
      }
    });
    input_search.addEventListener("keyup", (e) => {
      console.log(e);
      if (e.code == "ArrowUp") {
        if (e.key == "ArrowUp") {
          handleSearchResults({ type: "focus_up" });
        }
      } else if (e.code == "ArrowDown") {
        if (e.key == "ArrowDown") {
          handleSearchResults({ type: "focus_down" });
        }
      } else if (e.code == "Enter") {
        handleSearchResults({
          type: "click",
          callback: (state) => {
            console.log(state);
            if (state.data.length > 0) {
              handleBldgInfoData({
                type: "move_update",
                lat: parseFloat(state.data[state.focus].y),
                lng: parseFloat(state.data[state.focus].x),
              });
            }
          },
        });
        handleSearchResults({ type: "update", data: [] });
      } else if (
        e.code != "Enter" &&
        e.code != "ArrowLeft" &&
        e.code != "ArrowRight"
      ) {
        places.keywordSearch(input_search.value, callback);
      }
    });
  }, []);

  const forceSearch = () => {
    places.keywordSearch(input_search.value, callback);
  };

  return (
    <div
      tabIndex="0"
      className={cx("wrapper")}
      // onBlur={(e) => {
      //   console.log(e);
      //   handleSearchResults({ type: "update", data: [] });
      // }}
    >
      <div className={cx("frame-search")}>
        <input
          id="input_search"
          className={cx("text-field")}
          type="text"
          placeholder="주소 입력"
          onFocus={() => {
            forceSearch();
          }}
        ></input>
        {/* <UseAutocomplete /> */}
        <div className={cx("icon")}>O.</div>
      </div>
      {search_results.data.length > 0 ? (
        <div className={cx("drop-down")}>
          {search_results.data.map((e, idx) => (
            <div
              key={idx}
              id={"input_search_" + idx}
              tabIndex="-1"
              className={cx(
                "frame-list",
                search_results.focus == idx ? "focused" : ""
              )}
              onClick={() => {
                handleBldgInfoData({
                  type: "move_update",
                  lat: parseFloat(e.y),
                  lng: parseFloat(e.x),
                });
                handleSearchResults({ type: "update", data: [] });
              }}
            >
              <div className={cx("title")}>
                {emphasizeText(e.address_name, input_search.value)}
              </div>
              <div className={cx("sub-title")}>
                {e.road_address_name == ""
                  ? "-"
                  : emphasizeText(e.road_address_name, input_search.value)}
              </div>
              <div className={cx("frame-value")}>
                <div className={cx("text-bold")}>
                  {e.place_name == ""
                    ? "-"
                    : emphasizeText(e.place_name, input_search.value)}
                </div>
                <div className={cx("text")}>
                  {emphasizeText(
                    formatCategory(e.category_name),
                    input_search.value
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AddressSearcher;
