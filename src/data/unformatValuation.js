import React from "react";
import { cloneDeep } from "lodash";

const unformatValuation = (formatted_data) => {
  let new_formatted_data = { ...formatted_data };
  // console.log(Object.keys(calculated_data));
  Object.keys(new_formatted_data).map((card) => {
    console.log("card_name: " + card);
    Object.keys(new_formatted_data[card]).map((text) => {
      console.log("text_name: " + text);
      console.log(
        "change data",
        new_formatted_data[card][text].base,
        "of type",
        new_formatted_data[card][text].base_type
      );
      console.log(
        "change data",
        new_formatted_data[card][text].value,
        "of type",
        new_formatted_data[card][text].value_type
      );
      new_formatted_data[card][text].base = unformatData(
        new_formatted_data[card][text].base,
        new_formatted_data[card][text].base_type
      );
      new_formatted_data[card][text].value = unformatData(
        new_formatted_data[card][text].value,
        new_formatted_data[card][text].value_type
      );
      console.log("changed data is:", new_formatted_data[card][text].base);
      console.log("changed data is:", new_formatted_data[card][text].value);
    });
  });
  return new_formatted_data;
};

export const unformatData = (data_old, type) => {
  let data = cloneDeep(data_old);
  if (data == "") {
    return data;
  }
  switch (type) {
    case "string":
      return data;
    case "number":
      return _unformatTenThousandShrinker(data);
    case "number_detail":
      return Number(_unformatThousandSeperator(data));
    case "number_list":
      return data.split(" / ").map((e) => unformatData(e, "number"));
    case "rate":
      return Number(_unformatThousandSeperator(data)) / 100;
    case "rate_over":
      return Number(_unformatThousandSeperator(data)) / 100;
    case "rate_list":
      return data.split(" / ").map((e) => unformatData(e, "rate"));
    case "floor_range":
      return _unformatFloorRange(data).map((e) => _unformatFloor(e));
    default:
      return data;
  }
};

const _unformatThousandSeperator = (data) => {
  return data.replace(/,/g, "");
};

const _unformatFloorRange = (data) => {
  let negative_start = false;
  let negative_end = false;
  if (data[0] == "-") {
    negative_start = true;
    data = data.slice(1);
  }
  if (data.includes("--")) {
    negative_end = true;
    data = data.replace(/--/g, "-");
  }
  let sep_data = data.split("-");
  if (sep_data.length != 2) {
    return ["1F", "1F"];
  }
  if (negative_start) {
    sep_data[0] = "-" + sep_data[0];
  }
  if (negative_end) {
    sep_data[1] = "-" + sep_data[1];
  }
  return sep_data;
};

const _unformatFloor = (data) => {
  if (data.includes("B") || data.includes("-") || data.includes("b")) {
    return 1 - Number(data.replace(/[^\d]/g, ""));
  } else {
    return Number(data.replace(/[^\d]/g, ""));
  }
};

const _unformatTenThousandShrinker = (data) => {
  switch (data.slice(-1)) {
    case "만":
      return Number(data.replace("만", "")) * 10000;
    case "억":
      return Number(data.replace("억", "")) * 100000000;
    case "조":
      return Number(data.replace("조", "")) * 1000000000000;
    case "경":
      return Number(data.replace("경", "")) * 10000000000000000;
    default:
      return Number(data);
  }
};

// (string|rate"|rate list|rate_over|number"|number_detail|_type: ""|floor_range|number list)

// console.log("f");
// console.log(unformatData("2809.8억", "number"));
// console.log(unformatData("280989090", "number_detail"));
// console.log(unformatData("sssdsdsd", "string"));
// console.log(unformatData("3900 / 3900", "number_list"));
// console.log(unformatData("89.1", "rate"));
// console.log(unformatData("489.1", "rate_over"));
// console.log(unformatData("89 / 39", "rate_list"));
// console.log(unformatData("-40-9", "floor_range"));
// console.log(unformatData("B1-9", "floor_range"));
// console.log(unformatData("B1-9F", "floor_range"));
// console.log(unformatData("1-9", "floor_range"));

export default unformatValuation;
