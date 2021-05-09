import React from "react";
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

export function LineChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ReLineChart width={500} height={300} data={data} margin={chartMargin}>
        <CartesianGrid vertical={false} strokeOpacity="15%" />
        <XAxis
          dataKey="name"
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
        <Tooltip cursor={false} />
        <Line
          dataKey="pv"
          stroke={theme`colors.primary`}
          strokeWidth={2}
          activeDot={{ r: 5 }}
        />
      </ReLineChart>
    </ResponsiveContainer>
  );
}

const chartMargin = { top: 16, right: 10, bottom: 5, left: 5 };
const tickStyles = { fill: "#fff", fillOpacity: "70%", fontSize: "12px" };

const data = [
  {
    name: "9.Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "10.Jan",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "11.Jan",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "12.Jan",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "13.Jan",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "14.Jan",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
