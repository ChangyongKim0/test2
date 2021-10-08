import React, { useEffect, useState, useRef } from "react";
// { useEffect }

import styles from "./AssumptionText.module.scss";
import classNames from "classnames/bind";
import ToolTip from "./ToolTip";

const cx = classNames.bind(styles);

const AssumptionText = ({
  data,
  is_placeholder,
  onEnterPress,
  type,
  use_tooltip,
  tooltip,
  force_use_tooltip,
}) => {
  let blob_class = {};

  let input_value = "";
  let input_base = "";
  Object.keys(is_placeholder).map((e) =>
    is_placeholder[e] ? (blob_class[e] = "blob") : (blob_class[e] = "")
  );

  const class_names = {
    type: "type-" + type,
  };

  // const input_value = useRef(null);

  useEffect(() => {
    input_value = document.getElementById(data.title + "_value");
    input_base = document.getElementById(data.title + "_base");
  }, []);

  const handleKeyUp = (self_type, type, e) => {
    let self = "";
    if (self_type == "value") {
      self = input_value;
    } else {
      self = input_base;
    }
    console.log(self);
    console.log(type);
    console.log(e.key, e.keyCode);
    console.log(e.target.selectionStart);
    const pos = e.target.selectionStart;
    const temp = self.value;
    console.log(temp);
    console.log(temp.split("."));
    switch (type) {
      case "number":
        if (e.key.search(/[0-9.,]/) >= 0) {
          if (pos == temp.length) {
            self.value = arrangeNum(temp);
            console.log(self.value);
          } else if (e.key.search(/[.,]/) >= 0) {
            self.value = temp.replace(e.key, "");
            self.setSelectionRange(pos - 1, pos - 1);
          }
        } else if (e.keyCode != 8 && (e.keyCode < 37 || e.keyCode > 40)) {
          self.value = temp.slice(0, pos - 1) + temp.slice(pos);
          self.setSelectionRange(pos - 1, pos - 1);
        }
        break;
      case "rate":
        if (e.key.search(/[0-9.]/) >= 0) {
          if (
            temp.split(".").length > 2 ||
            temp.split(".")[0].length > 2 ||
            (temp.split(".").length > 1 && temp.split(".")[1].length > 1)
          ) {
            console.log("invalid format");
            self.value = temp.slice(0, pos - 1) + temp.slice(pos);
            self.setSelectionRange(pos - 1, pos - 1);
          }
        } else if (e.keyCode != 8 && (e.keyCode < 37 || e.keyCode > 40)) {
          console.log("wrong key");
          self.value = temp.slice(0, pos - 1) + temp.slice(pos);
          self.setSelectionRange(pos - 1, pos - 1);
        }
    }
  };

  const arrangeNum = (str) => {
    let value = 0;
    str = String(str);
    str = str.replaceAll(/^[.,]|[^\d만억조경.,]+/gi, "");
    str = str.replaceAll(/^0([0-9])|^0[만억조경]/gi, "$1");
    console.log("string");
    console.log(str);

    let number_part = str.replaceAll(/[만억조경][.,0-9]*|\.\.|,/gi, "");
    if (number_part.split(".").length > 1) {
      number_part = number_part.split(".")[0] + "." + number_part.split(".")[1];
    }
    const unit_part = str.replaceAll(/[^만억조경]+/gi, "");
    const command_part = str
      .slice(-2)
      .replaceAll(/[\d]{2}/gi, "")
      .replaceAll(/^\.[^.]|[만억조경]|^\d|.\d/gi, "");

    console.log("number_part");
    console.log(number_part);
    console.log("unit_part");
    console.log(unit_part);
    console.log("command_part");
    console.log(command_part);

    if (unit_part || (command_part != "." && command_part)) {
      switch (command_part) {
        case "..":
          console.log("case with_unit or ..");
          return number_part + _upgradeUnit(unit_part);
        case ".":
          console.log("case with_unit and .");
          return number_part + _upgradeUnit(unit_part);
        case ",":
          console.log("case with_unit or ,");
          if (number_part.split(".")[0].length > 1) {
            return _moveDecimalPoint(number_part, -1) + _upgradeUnit(unit_part);
          } else {
            return (
              _moveDecimalPoint(
                _moveDecimalPoint(_moveDecimalPoint(number_part, 1), 1),
                1
              ) + unit_part
            );
          }
        default:
          console.log("case with_unit or ^");
          const number_part_combined = number_part + command_part;
          if (number_part.split(".").length > 1) {
            return _moveDecimalPoint(number_part + command_part, 1) + unit_part;
          } else if (number_part_combined.split(".")[0].length > 4) {
            return (
              _moveDecimalPoint(
                _moveDecimalPoint(
                  _moveDecimalPoint(
                    _moveDecimalPoint(number_part_combined, -1),
                    -1
                  ),
                  -1
                ),
                -1
              ) + _upgradeUnit(unit_part)
            );
          } else {
            return number_part + command_part + unit_part;
          }
      }
    } else {
      switch (command_part) {
        case ".":
          console.log("case no_unit and .");
          if (
            number_part.split(".").length > 1 &&
            number_part.slice(-1) != "."
          ) {
            return number_part + _upgradeUnit(unit_part);
          } else {
            return number_part;
          }
        default:
          console.log("case no_unit and ^");
          const number_part_combined = number_part + command_part;
          if (number_part_combined.split(".")[0].length > 4) {
            return (
              _moveDecimalPoint(
                _moveDecimalPoint(
                  _moveDecimalPoint(
                    _moveDecimalPoint(number_part_combined, -1),
                    -1
                  ),
                  -1
                ),
                -1
              ) + _upgradeUnit(unit_part)
            );
          } else {
            return number_part + command_part + unit_part;
          }
      }
    }
  };

  const _removeEndZeros = (str) => {
    console.log("try remove zeros.");
    if (str && str.slice(-1) == "0") {
      console.log(str);
      console.log(str.slice(-1));
      return _removeEndZeros(str.slice(0, -1));
    } else if (str) {
      return "." + str;
    } else {
      return str;
    }
  };

  const _upgradeUnit = (unit) => {
    console.log("upgrade unit.");
    switch (unit) {
      case "만":
        return "억";
      case "억":
        return "조";
      case "조":
        return "경";
      case "경":
        return "";
      default:
        return "만";
    }
  };

  const _moveDecimalPoint = (number_part, pos) => {
    console.log("move decimal.");
    const parts = number_part.split(".");
    console.log(parts);
    if (parts.length > 1) {
      console.log("move decimal.");
      if (pos == 1) {
        return parts[0] + parts[1][0] + _removeEndZeros(parts[1].slice(1));
      } else {
        return (
          parts[0].slice(0, -1) + _removeEndZeros(parts[0].slice(-1) + parts[1])
        );
      }
    } else {
      if (pos == 1) {
        return parts[0] + "0";
      } else {
        console.log(parts[0]);
        console.log(parts[0].slice(0, -1));
        console.log(parts[0].slice(-1));
        return parts[0].slice(0, -1) + _removeEndZeros(parts[0].slice(-1));
      }
    }
  };
  // pos can only be +1 or -1

  // const comma = (str) => {
  //   str = String(str);
  //   const int_part = str.replace(/(\.[\d]+[만억조경]|[만억조경])/, "");
  //   console.log(int_part);
  //   if (int_part.length > 4) {
  //     let last_char = str[-1];
  //     switch (str[-1]) {
  //       case "만":
  //         last_char = "억";
  //         break;
  //       case "억":
  //         last_char = "조";
  //         break;
  //       case "조":
  //         last_char = "경";
  //         break;
  //       case "경":
  //         last_char = "";
  //         break;
  //       default:
  //         last_char = "만";
  //         break;
  //     }
  //     const str_list = str.split(".");
  //     if (str_list.length > 1) {
  //       return (
  //         str_list[0].slice(0, -4).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,") +
  //         "." +
  //         str_list[0].slice(-4) +
  //         str_list[1].slice(0, -1) +
  //         last_char
  //       );
  //     } else {
  //       return (
  //         str_list[0].slice(0, -4).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,") +
  //         "." +
  //         str_list[0].slice(-4, -1) +
  //         last_char
  //       );
  //     }
  //   } else {
  //     return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
  //   }
  // };

  const uncomma = (str) => {
    str = String(str);
    return str.replaceAll(/(?:^0)|[^\d만억조경.]+/gi, "");
  };

  return (
    <div className={cx("wrapper")}>
      <ToolTip
        enable={
          tooltip.title.length > 0 || use_tooltip.title || force_use_tooltip
        }
        data={tooltip.title}
      >
        <div className={cx("frame-left")}>
          <div className={cx(class_names.type)}>
            <div className={cx("title")}>{data.title}</div>
          </div>
        </div>
      </ToolTip>
      <ToolTip
        enable={
          tooltip.base.length > 0 || use_tooltip.base || force_use_tooltip
        }
        data={tooltip.base}
      >
        <div className={cx("frame-value", blob_class.base, class_names.type)}>
          <div className={cx("frame")}>
            {is_placeholder.base ? (
              <input
                id={data.title + "_base"}
                className={cx("input")}
                placeholder={data.base}
                onKeyUp={(e) => handleKeyUp("base", data.base_type, e)}
              ></input>
            ) : (
              <div className={cx("text")}>{data.base}</div>
            )}
            <div className={cx("unit")}>{data.base_unit}</div>
          </div>
        </div>
      </ToolTip>
      <ToolTip
        enable={
          tooltip.value.length > 0 || use_tooltip.value || force_use_tooltip
        }
        data={tooltip.value}
      >
        <div className={cx("frame-value", blob_class.value, class_names.type)}>
          <div className={cx("frame")}>
            {is_placeholder.value ? (
              <input
                id={data.title + "_value"}
                className={cx("input")}
                placeholder={data.value}
                onKeyUp={(e) => handleKeyUp("value", data.value_type, e)}
              ></input>
            ) : (
              <div className={cx("text")}>{data.value}</div>
            )}
            <div className={cx("unit")}>{data.value_unit}</div>
          </div>
        </div>
      </ToolTip>
    </div>
  );
};

AssumptionText.defaultProps = {
  data: {
    title: "title",
    base: "base",
    base_unit: "u.",
    base_type: "rate",
    value: "value",
    value_unit: "u.",
    value_type: "number",
  },
  is_placeholder: {
    base: true,
    value: true,
  },
  onEnterPress: {
    Base: () => {},
    Value: () => {},
  },
  type: "default",
  use_tooltip: {
    title: false,
    base: false,
    value: false,
  },
  tooltip: {
    title: ["tooltip.title[0]", "tooltip.title[1]"],
    base: ["tooltip.base[0]", "tooltip.base[1]"],
    value: ["tooltip.value[0]", "tooltip.value[1]"],
  },
  force_use_tooltip: false,
};

export default AssumptionText;

// ### AssumptionText

// - data
// -- title, base, base_unit, value, unit
// - is_placeholder
// -- base: True / False
// -- value: True / False
// - onKeyUp
// -- Base
// -- Value
// - type: default / total
