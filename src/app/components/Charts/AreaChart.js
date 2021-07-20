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
import tw, { theme } from "twin.macro";

// Components
import { Text } from "src/app/components/Text";
import { Spinner } from "src/app/components/LoadingIndicator/Spinner";
export function AreaChart(props) {
  const { loading, tableName, data, tooltipContent, xAxis, yAxis, area } =
    props;

  if (loading) return <Spinner size="30px" />;

  return (
    <>
      <Label>{tableName}</Label>
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
            tickLine={false}
            axisLine={false}
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
          <Area
            type="linear"
            stroke={theme`colors.primary`}
            fillOpacity={1}
            fill="url(#colorUv)"
            activeDot={{ r: 5 }}
            {...area}
          />
        </ReAreaChart>
      </ResponsiveContainer>
    </>
  );
}

const Label = tw(Text)`text-tiny text-color7 text-center mb-2`;
const chartMargin = { top: 30, right: 30, bottom: 20, left: 5 };
const tickStyles = { fill: "#fff", fillOpacity: "70%", fontSize: "12px" };

AreaChart.propTypes = {
  loading: PropTypes.bool,
  tableName: PropTypes.string,
  data: PropTypes.array,
  xAxis: PropTypes.object,
  yAxis: PropTypes.object,
  area: PropTypes.object,
  tooltipContent: PropTypes.any,
};

AreaChart.defaultProps = {
  xAxis: {},
  yAxis: {},
  area: {},
};
