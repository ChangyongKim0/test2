import React from "react";
import { ResponsiveBar } from "@nivo/bar";
// { useEffect }

import styles from "./BarChart.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const BarChart = ({ data }) => {
  return (
    <div className={cx("wrapper")}>
      <ResponsiveBar
        data={data}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        valueFormat={{ format: "", enabled: false }}
        colors={{ scheme: "blue_purple" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{ theme: "background" }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 0,
          tickRotation: 0,
          legend: "country",
          legendPosition: "middle",
          legendOffset: 20,
        }}
        axisLeft={{
          tickSize: 1,
          tickPadding: 2,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -36,
        }}
        enableGridY={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "top-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

BarChart.defaultProps = {
  data: [
    {
      country: "AD",
      "hot dog": 190,
      "hot dogColor": "hsl(311, 70%, 50%)",
      burger: 55,
      burgerColor: "hsl(117, 70%, 50%)",
      sandwich: 188,
      sandwichColor: "hsl(328, 70%, 50%)",
      kebab: 33,
      kebabColor: "hsl(320, 70%, 50%)",
      fries: 51,
      friesColor: "hsl(2, 70%, 50%)",
      donut: 133,
      donutColor: "hsl(111, 70%, 50%)",
    },
    {
      country: "AE",
      "hot dog": 196,
      "hot dogColor": "hsl(314, 70%, 50%)",
      burger: 127,
      burgerColor: "hsl(217, 70%, 50%)",
      sandwich: 76,
      sandwichColor: "hsl(224, 70%, 50%)",
      kebab: 11,
      kebabColor: "hsl(14, 70%, 50%)",
      fries: 68,
      friesColor: "hsl(273, 70%, 50%)",
      donut: 161,
      donutColor: "hsl(89, 70%, 50%)",
    },
    {
      country: "AF",
      "hot dog": 100,
      "hot dogColor": "hsl(202, 70%, 50%)",
      burger: 200,
      burgerColor: "hsl(221, 70%, 50%)",
      sandwich: 140,
      sandwichColor: "hsl(233, 70%, 50%)",
      kebab: 164,
      kebabColor: "hsl(320, 70%, 50%)",
      fries: 157,
      friesColor: "hsl(297, 70%, 50%)",
      donut: 138,
      donutColor: "hsl(240, 70%, 50%)",
    },
    {
      country: "AG",
      "hot dog": 86,
      "hot dogColor": "hsl(351, 70%, 50%)",
      burger: 41,
      burgerColor: "hsl(248, 70%, 50%)",
      sandwich: 73,
      sandwichColor: "hsl(71, 70%, 50%)",
      kebab: 199,
      kebabColor: "hsl(9, 70%, 50%)",
      fries: 153,
      friesColor: "hsl(248, 70%, 50%)",
      donut: 146,
      donutColor: "hsl(207, 70%, 50%)",
    },
    {
      country: "AI",
      "hot dog": 49,
      "hot dogColor": "hsl(334, 70%, 50%)",
      burger: 12,
      burgerColor: "hsl(306, 70%, 50%)",
      sandwich: 110,
      sandwichColor: "hsl(233, 70%, 50%)",
      kebab: 83,
      kebabColor: "hsl(291, 70%, 50%)",
      fries: 61,
      friesColor: "hsl(42, 70%, 50%)",
      donut: 93,
      donutColor: "hsl(101, 70%, 50%)",
    },
    {
      country: "AL",
      "hot dog": 23,
      "hot dogColor": "hsl(44, 70%, 50%)",
      burger: 176,
      burgerColor: "hsl(225, 70%, 50%)",
      sandwich: 85,
      sandwichColor: "hsl(27, 70%, 50%)",
      kebab: 190,
      kebabColor: "hsl(90, 70%, 50%)",
      fries: 113,
      friesColor: "hsl(173, 70%, 50%)",
      donut: 90,
      donutColor: "hsl(165, 70%, 50%)",
    },
    {
      country: "AM",
      "hot dog": 144,
      "hot dogColor": "hsl(353, 70%, 50%)",
      burger: 70,
      burgerColor: "hsl(244, 70%, 50%)",
      sandwich: 61,
      sandwichColor: "hsl(153, 70%, 50%)",
      kebab: 189,
      kebabColor: "hsl(117, 70%, 50%)",
      fries: 130,
      friesColor: "hsl(309, 70%, 50%)",
      donut: 125,
      donutColor: "hsl(31, 70%, 50%)",
    },
  ],
};

export default BarChart;
