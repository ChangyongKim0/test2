import React from "react";
import naked_data from "./naked_data.js";
import deepCopy from "../hooks/useDeepCopy.js";
import { cloneDeep } from "lodash";
import { formatData, formatUnit } from "../hooks/useFormatter.js";

const err_text = "오류발생";

const formatValuation = (calculated_data, unit_type = "py") => {
  let new_calculated_data = cloneDeep(calculated_data);
  Object.keys(new_calculated_data).map((card) => {
    // console.log("card_name: " + card);
    Object.keys(new_calculated_data[card]).map((text) => {
      // console.log("text_name: " + text);
      // console.log(
      //   "change data",
      //   new_calculated_data[card][text].base,
      //   "of type",
      //   new_calculated_data[card][text].base_type
      // );
      // console.log(
      //   "change data",
      //   new_calculated_data[card][text].value,
      //   "of type",
      //   new_calculated_data[card][text].value_type
      // );
      new_calculated_data[card][text].title = formatUnit(
        new_calculated_data[card][text].title,
        unit_type
      );
      try {
        new_calculated_data[card][text].base = formatData(
          new_calculated_data[card][text].base,
          new_calculated_data[card][text].base_type,
          new_calculated_data[card][text].base_unit,
          unit_type
        );
      } catch {
        new_calculated_data[card][text].base = err_text;
      }
      new_calculated_data[card][text].base_unit = formatUnit(
        new_calculated_data[card][text].base_unit,
        unit_type
      );
      try {
        new_calculated_data[card][text].value = formatData(
          new_calculated_data[card][text].value,
          new_calculated_data[card][text].value_type,
          new_calculated_data[card][text].value_unit,
          unit_type
        );
      } catch {
        new_calculated_data[card][text].base = err_text;
      }
      new_calculated_data[card][text].value_unit = formatUnit(
        new_calculated_data[card][text].value_unit,
        unit_type
      );
      // console.log("changed data is:", new_calculated_data[card][text].base);
      // console.log("changed data is:", new_calculated_data[card][text].value);
    });
  });
  console.log(calculated_data);
  console.log(new_calculated_data);
  return new_calculated_data;
};

// const formatUnit = (unit, unit_type) => {
//   switch (unit_type) {
//     case "py":
//       return unit.replace(/\[area\]/g, "평").replace(/\[parea\]/g, "전용평");
//     case "sqm":
//       return unit.replace(/\[area\]/g, "㎡").replace(/\[parea\]/g, "전용㎡");
//     default:
//       return unit;
//   }
// };

// const formatData = (data_old, type, unit, unit_type) => {
//   let data = data_old;
//   if (data == "") {
//     return data;
//   }
//   if (
//     (type.includes("number") || type.includes("rate")) &&
//     !type.includes("list")
//   ) {
//     if (!isFinite(data) || isNaN(data)) {
//       return err_text;
//     }
//   }
//   switch (type) {
//     case "string":
//       return data;
//     case "number":
//       return _formatThousandSeperator(
//         _formatDecimalPoint(_formatTenThousandShrinker(data), 2)
//       );
//     case "number_detail":
//       return _formatThousandSeperator(_formatDecimalPoint(data, 0));
//     case "number_list":
//       return data.map((e, idx) => formatData(e, "number")).join(" / ");
//     case "rate":
//       return _formatThousandSeperator(_formatDecimalPoint(data * 100));
//     case "rate_over":
//       return _formatThousandSeperator(_formatDecimalPoint(data * 100));
//     case "rate_list":
//       return data.map((e, idx) => formatData(e, "rate")).join(" / ");
//     case "floor_range":
//       return data
//         .map((e) => {
//           if (e <= 0) {
//             return "B" + (1 - e).toString();
//           } else {
//             return e.toString() + "F";
//           }
//         })
//         .join("-");
//     default:
//       return data;
//   }
// };

// const _formatThousandSeperator = (data) => {
//   return data.toString().replace(/(?<!\.\d+)\B(?=(\d{3})+(?!\d))/g, ",");
// };

// const _formatTenThousandShrinker = (number) => {
//   const integer_part = parseInt(number).toString().replace(/-/g, "");
//   switch (parseInt((integer_part.length - 1) / 4).toString()) {
//     case "0":
//       return number.toString();
//     case "1":
//       return (number / 10000).toString() + "만";
//     case "2":
//       return (number / 100000000).toString() + "억";
//     case "3":
//       return (number / 1000000000000).toString() + "조";
//     case "4":
//       return (number / 10000000000000000).toString() + "경";
//     default:
//       return number.toString();
//   }
// };

// const _formatDecimalPointOld = (data, position = 1) => {
//   let regex = /./g;
//   switch (position.toString) {
//     case "0":
//       regex = /\.\d+/g;
//     case "1":
//       regex = /(?<=\.\d)\d+/g;
//     case "2":
//       regex = /(?<=\.\d{2})\d+/g;
//     case "3":
//       regex = /(?<=\.\d{3})\d+/g;
//     default:
//       regex = /-/;
//   }
//   return data.toString().replace(regex, "");
// };

// const _formatDecimalPoint = (data, position = 1) => {
//   const num_data = data.toString().match(/[-0-9.]+/g)[0];
//   const replacor = String(
//     Math.round(Math.pow(10, position) * Number(num_data)) /
//       Math.pow(10, position)
//   );
//   return data.toString().replace(/[-0-9.]+/g, replacor);
// };

// (string|rate"|rate list|rate_over|number"|number_detail|_type: ""|floor_range|number list)

// console.log("f");
// const cal_data = calculateValuation(naked_data, "");
// const for_data = formatValuation(cal_data);
// console.log(cal_data);
// console.log(for_data);

// while (true) {
//   const a = 1;
// }

export default formatValuation;
