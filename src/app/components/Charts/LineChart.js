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

export const LineChart = React.memo(
  ({ loading, data, xAxis, yAxis, line, tooltipContent }) => {
    if (loading) return <Spinner size="30px" />;
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ReLineChart width={500} height={300} data={data} margin={chartMargin}>
          <CartesianGrid vertical={false} strokeOpacity="15%" />
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
  }
);

const chartMargin = { top: 16, right: 10, bottom: 5, left: 5 };
const tickStyles = {
  fill: "#fff",
  fillOpacity: "70%",
  fontSize: theme`fontSize.sm`,
};
