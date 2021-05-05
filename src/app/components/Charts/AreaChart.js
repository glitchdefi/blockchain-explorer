import React from "react";
import {
  AreaChart as ReAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import { theme } from "twin.macro";

export function AreaChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ReAreaChart width={500} height={400} data={data} margin={chartMargin}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor={theme`colors.primary`}
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor={theme`colors.primary`}
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} strokeOpacity="15%" />
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
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
        <Area
          type="linear"
          dataKey="uv"
          stroke={theme`colors.primary`}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </ReAreaChart>
    </ResponsiveContainer>
  );
}

const chartMargin = { top: 30, right: 30, bottom: 20, left: 5 };
const tickStyles = { fill: "#fff", fillOpacity: "70%", fontSize: "12px" };

AreaChart.propTypes = {
  data: PropTypes.array,
};

AreaChart.defaultProps = {
  data: [
    {
      name: "Jan 21",
      uv: 10,
    },
    {
      name: "Jan 21",
      uv: 100,
    },
    {
      name: "Jan 21",
      uv: 220,
    },
    {
      name: "Jan 21",
      uv: 300,
    },
    {
      name: "Jan 21",
      uv: 310,
    },
    {
      name: "Jan 21",
      uv: 340,
    },
    {
      name: "Jan 21",
      uv: 350,
    },
    {
      name: "Jan 21",
      uv: 400,
    },
    {
      name: "Jan 21",
      uv: 350,
    },
    {
      name: "Jan 21",
      uv: 300,
    },
    {
      name: "Jan 21",
      uv: 400,
    },
    {
      name: "Jan 21",
      uv: 200,
    },
    {
      name: "Jan 21",
      uv: 250,
    },
    {
      name: "Jan 21",
      uv: 300,
    },
    {
      name: "Jan 21",
      uv: 320,
    },
    {
      name: "Jan 21",
      uv: 200,
    },
    {
      name: "Jan 21",
      uv: 500,
    },
    {
      name: "Jan 21",
      uv: 550,
    },
    {
      name: "Jan 21",
      uv: 320,
    },
    {
      name: "Jan 21",
      uv: 340,
    },
    {
      name: "Jan 21",
      uv: 100,
    },
    {
      name: "Jan 21",
      uv: 320,
    },
    {
      name: "Jan 21",
      uv: 50,
    },
    {
      name: "Jan 21",
      uv: 200,
    },
    {
      name: "Jan 21",
      uv: 550,
    },
    {
      name: "Jan 21",
      uv: 800,
    },
    {
      name: "Jan 21",
      uv: 520,
    },
    {
      name: "Jan 21",
      uv: 300,
    },
    {
      name: "Jan 21",
      uv: 320,
    },
    {
      name: "Jan 21",
      uv: 200,
    },
    {
      name: "Jan 21",
      uv: 300,
    },
    {
      name: "Jan 21",
      uv: 550,
    },
    {
      name: "Jan 21",
      uv: 340,
    },
    {
      name: "Jan 21",
      uv: 310,
    },
    {
      name: "Jan 21",
      uv: 300,
    },
    {
      name: "Jan 21",
      uv: 320,
    },
    {
      name: "Jan 21",
      uv: 200,
    },
    {
      name: "Jan 21",
      uv: 500,
    },
    {
      name: "Jan 21",
      uv: 200,
    },
    {
      name: "Jan 21",
      uv: 500,
    },
    {
      name: "Jan 21",
      uv: 520,
    },
    {
      name: "Jan 21",
      uv: 300,
    },
    {
      name: "Jan 21",
      uv: 320,
    },
  ],
};
