import React from "react";
// { useEffect }

import styles from "./ValuationCompCard.module.scss";
import classNames from "classnames/bind";
import ToolTip from "./ToolTip";
import ValuationCompText from "./ValuationCompText";

const cx = classNames.bind(styles);

const ValuationCompCard = ({ data, style, handleClick, force_use_tooltip }) => {
  return (
    <div className={cx("wrapper", style)}>
      <div className={cx("frame-content")}>
        {data.content.map((e, idx) => {
          const comp = e.map((e2, idx2) => {
            return (
              <ValuationCompText
                key={idx2}
                {...e2}
                force_use_tooltip={force_use_tooltip}
              />
            );
          });
          return (
            <div key={idx} className={cx("frame-content-each")}>
              {comp}
            </div>
          );
        })}
      </div>
      <div className={cx("frame-footer")}>
        {data.footer.map((e, idx) => {
          return (
            <ValuationCompText
              key={idx}
              {...e}
              force_use_tooltip={force_use_tooltip}
              style="total"
            />
          );
        })}
      </div>
    </div>
  );
};

ValuationCompCard.defaultProps = {
  data: {
    content: [
      [
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
      ],
      [
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
      ],
      [
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
      ],
      [
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
      ],
      [
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
      ],
      [
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
      ],
      [
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
      ],
      [
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
      ],
      [
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
      ],
      [
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
      ],
      [
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
      ],
      [
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
      ],
      [
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
      ],
      [
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
      ],
      [
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
      ],
      [
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
      ],
      [
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
      ],
      [
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
      ],
      [
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
      ],
      [
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
      ],
      [
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
      ],
      [
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
        {
          data: {
            title: "title",
            value: "value",
            unit: "u.",
            second_value: "second_value",
            second_unit: "u.",
          },
          use_tooltip: {
            title: true,
            value: true,
            second_value: true,
          },
          use_toggle: false,
          tooltip: {
            title: ["tooltip.title[0]", "tooltip.title[1]"],
            value: ["tooltip.value[0]", "tooltip.value[1]"],
            second_value: [
              "tooltip.second_value[0]",
              "tooltip.second_value[1]",
            ],
          },
          style: "default",
        },
      ],
    ],
    footer: [
      {
        data: {
          title: "title",
          value: "value",
          unit: "u.",
          second_value: "second_value",
          second_unit: "u.",
        },
        use_tooltip: {
          title: true,
          value: true,
          second_value: true,
        },
        use_toggle: false,
        tooltip: {
          title: ["tooltip.title[0]", "tooltip.title[1]"],
          value: ["tooltip.value[0]", "tooltip.value[1]"],
          second_value: ["tooltip.second_value[0]", "tooltip.second_value[1]"],
        },
      },
      {
        data: {
          title: "title",
          value: "value",
          unit: "u.",
          second_value: "second_value",
          second_unit: "u.",
        },
        use_tooltip: {
          title: true,
          value: true,
          second_value: true,
        },
        use_toggle: false,
        tooltip: {
          title: ["tooltip.title[0]", "tooltip.title[1]"],
          value: ["tooltip.value[0]", "tooltip.value[1]"],
          second_value: ["tooltip.second_value[0]", "tooltip.second_value[1]"],
        },
      },
    ],
  },
  style: "white",
  handleClick: () => {},
  force_use_tooltip: false,
};

export default ValuationCompCard;

// - use_mini_map: True / False
// - mini_map
// -- center, pnu
// - data
// -- [title, sub_title
// -- total_info
// --- [value, unit]
// -- title, base, base_unit, value, unit
// -- is_placeholder
// --- base: True / False
// --- value: True / False
// -- onKeyUp
// --- Base
// --- Value
// -- type: default / total
// ]
// - style: white, border
// - use_plus: True / False
// - handlePlus
