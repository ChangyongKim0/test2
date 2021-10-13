import naked_data from "./naked_data.js";
import calculateValuation from "./calculateValuation.js";

const formatValuation = (calculated_data) => {
  let new_calculated_data = { ...calculated_data };
  // console.log(Object.keys(calculated_data));
  Object.keys(calculated_data).map((card) => {
    console.log(card);
    Object.keys(new_calculated_data[card]).map((text) => {
      console.log(text);
      console.log(
        new_calculated_data[card][text].base,
        new_calculated_data[card][text].base_type
      );
      console.log(
        new_calculated_data[card][text].value,
        new_calculated_data[card][text].value_type
      );
      new_calculated_data[card][text].base = formatData(
        new_calculated_data[card][text].base,
        new_calculated_data[card][text].base_type
      );
      new_calculated_data[card][text].value = formatData(
        new_calculated_data[card][text].value,
        new_calculated_data[card][text].value_type
      );
      console.log(new_calculated_data[card][text].base);
      console.log(new_calculated_data[card][text].value);
    });
  });
  return new_calculated_data;
};

const formatData = (data, type) => {
  switch (type) {
    case "string":
      return data;
    case "number":
      return _formatThousandSeperator(
        _formatDecimalPoint(_formatTenThousandShrinker(data))
      );
    case "number_detail":
      return _formatThousandSeperator(data);
    case "number_list":
      return data.map((e, idx) => formatData(e, "number")).join(" / ");
    case "rate":
      return _formatThousandSeperator(data * 100);
    case "rate_over":
      return _formatThousandSeperator(data * 100);
    case "rate_list":
      return data.map((e, idx) => formatData(e, "rate")).join(" / ");
    case "floor_range":
      data
        .map((e) => {
          if (e <= 0) {
            return "B" + (1 - e).toString();
          } else {
            return e.toString() + "F";
          }
        })
        .join("-");
    default:
      return data;
  }
};

const _formatThousandSeperator = (data) => {
  return data.toString().replace(/(?<!\.\d+)\B(?=(\d{3})+(?!\d))/g, ",");
};

const _formatTenThousandShrinker = (number) => {
  const integer_part = parseInt(number).toString();
  switch (parseInt(integer_part.length / 4).toString()) {
    case "0":
      return number.toString();
    case "1":
      return (number / 10000).toString() + "만";
    case "2":
      return (number / 100000000).toString() + "억";
    case "3":
      return (number / 1000000000000).toString() + "조";
    case "4":
      return (number / 10000000000000000).toString() + "경";
    default:
      return number.toString();
  }
};

const _formatDecimalPoint = (data, position = 1) => {
  let regex = /./g;
  switch (position.toString) {
    case "0":
      regex = /\.\d+/g;
    case "1":
      regex = /(?<=\.\d)\d+/g;
    case "2":
      regex = /(?<=\.\d{2})\d+/g;
    case "3":
      regex = /(?<=\.\d{3})\d+/g;
    default:
      regex = /-/;
  }
  return data.toString().replace(regex, "");
};

// (string|rate"|rate list|rate_over|number"|number_detail|_type: ""|floor_range|number list)

console.log("f");
const cal_data = calculateValuation(naked_data, "");
const for_data = formatValuation(cal_data);
console.log(cal_data);
console.log(for_data);

while (true) {
  const a = 1;
}
