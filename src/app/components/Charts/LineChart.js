import React from "react";
import { theme } from "twin.macro";

import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Spinner } from "../LoadingIndicator/Spinner";

export const LineChart = ({
  loading,
  data,
  xAxis,
  yAxis,
  line,
  tooltipContent,
  chartMargin,
}) => {
  if (loading)
    return (
      <div tw="flex w-full h-full items-center justify-center">
        <Spinner size="30px" />
      </div>
    );
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ReLineChart
        width={500}
        height={300}
        data={data}
        margin={chartMargin || chartMarginStyles}
      >
        <CartesianGrid vertical={false} stroke={theme`colors.color3`} />
        <XAxis
          tickLine={false}
          axisLine={false}
          padding={{ left: 20, right: 20 }}
          tickSize={16}
          tick={tickStyles}
          {...xAxis}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickSize={10}
          tick={tickStyles}
          {...yAxis}
        />
        <Tooltip cursor={false} content={tooltipContent} />
        <Line
          stroke={theme`colors.primary`}
          strokeWidth={2}
          activeDot={{ r: 5 }}
          {...line}
        />
      </ReLineChart>
    </ResponsiveContainer>
  );
};

const chartMarginStyles = { top: 16, left: -20, right: 8, bottom: 5 };
const tickStyles = {
  fill: theme`colors.color6`,
  fontSize: theme`fontSize.sm`,
};
