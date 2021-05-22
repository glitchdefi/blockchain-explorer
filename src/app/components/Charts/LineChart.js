import React from "react";
import { useTranslation } from "react-i18next";
import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { theme } from "twin.macro";

export function LineChart({ data }) {
  const { t } = useTranslation();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ReLineChart width={500} height={300} data={data} margin={chartMargin}>
        <CartesianGrid vertical={false} strokeOpacity="15%" />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          padding={{ left: 20, right: 20 }}
          tickSize={16}
          tick={tickStyles}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickSize={10}
          tick={tickStyles}
        />
        <Tooltip
          cursor={false}
          wrapperStyle={tooltipStyles.wrapperStyle}
          contentStyle={tooltipStyles.contentStyle}
          labelStyle={tooltipStyles.textStyle}
          itemStyle={tooltipStyles.textStyle}
          formatter={function (value) {
            return [value, t("common.glitch_price")];
          }}
          labelFormatter={function (label, props) {
            return `${props[0]?.payload?.fullStringDate}`;
          }}
        />
        <Line
          dataKey="price"
          stroke={theme`colors.primary`}
          strokeWidth={2}
          activeDot={{ r: 5 }}
        />
      </ReLineChart>
    </ResponsiveContainer>
  );
}

const chartMargin = { top: 16, right: 10, bottom: 5, left: 5 };
const tickStyles = {
  fill: "#fff",
  fillOpacity: "70%",
  fontSize: theme`fontSize.sm`,
};
const tooltipStyles = {
  wrapperStyle: { backgroundColor: theme`colors.bg8`, borderRadius: "5px" },
  contentStyle: { borderRadius: "5px" },
  textStyle: {
    color: theme`colors.text2`,
    fontSize: theme`fontSize.sm`,
    fontWeight: "bold",
  },
};
