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
    case "force_activate":
      // console.log(state);
      action.callback(state);
      return new_state;
    case "activate":
      // console.log(state);
      if (state.data.length == 0) {
        action.callback(state);
      }
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
      if (e.key == "ArrowUp" || e.key == "ArrowDown") {
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
          handleSearchResults({
            type: "activate",
            callback: () => forceSearch(),
          });
        }
      } else if (e.code == "Enter") {
        handleSearchResults({
          type: "force_activate",
          callback: (state) => {
            // console.log(state);
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
        forceSearch();
      }
    });
  }, []);

  useEffect(() => {
    const focus = search_results.focus;
    const length = search_results.data.length;
    let ele_drop_down = document.getElementById("input_search_drop_down");
    if (focus < length) {
      let offset_top = document.getElementById(
        "input_search_" + search_results.focus
      ).offsetTop;
      let offset_bottom = 0;
      if (focus == length - 1) {
        offset_bottom = ele_drop_down.scrollHeight;
      } else {
        offset_bottom = document.getElementById(
          "input_search_" + (search_results.focus + 1)
        ).offsetTop;
      }
      // console.log(document.getElementById("input_search_drop_down").scrollTop);
      if (
        offset_bottom >=
        ele_drop_down.clientHeight + ele_drop_down.scrollTop
      ) {
        ele_drop_down.scrollTop = offset_bottom - ele_drop_down.clientHeight;
      } else if (offset_top <= ele_drop_down.scrollTop) {
        ele_drop_down.scrollTop = offset_top;
      }
    }
  }, [search_results.focus]);

  const forceSearch = () => {
    places.keywordSearch(input_search.value, callback);
  };

  return (
    <div
      tabIndex="0"
      className={cx("wrapper")}
      onBlur={(e) => {
        console.log(e);
        handleSearchResults({ type: "update", data: [] });
      }}
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
        <div id="input_search_drop_down" className={cx("drop-down")}>
          {search_results.data.map((e, idx) => (
            <div
              key={idx}
              id={"input_search_" + idx}
              tabIndex="-1"
              className={cx(
                "frame-list",
                search_results.focus == idx ? "focused" : ""
              )}
              onMouseDown={() => {
                handleBldgInfoData({
                  type: "move_update",
                  lat: parseFloat(e.y),
                  lng: parseFloat(e.x),
                });
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
