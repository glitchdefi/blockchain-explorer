import React from "react";
import {
  PieChart as RePieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import tw, { css, styled, theme } from "twin.macro";

const data = [
  { name: "Genesis (1000,000 GLCH)", value: 200 },
  { name: "Block Reward (1000,000 GLCH)", value: 800 },
];

const COLORS = [theme`colors.secondary`, theme`colors.primary`];

export function PieChart() {
  const renderLegend = (props) => {
    const { payload } = props;

    return (
      <LegendWrapper>
        {payload.map((entry, index) => (
          <LegendContent
            circleColor={COLORS[index % COLORS.length]}
            key={`item-${index}`}
          >
            {entry.value}
          </LegendContent>
        ))}
      </LegendWrapper>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RePieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          legendType="circle"
          outerRadius={100}
          fill={theme`colors.primary`}
          dataKey="value"
          strokeWidth={0}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend content={renderLegend} verticalAlign="bottom" height={80} />
      </RePieChart>
    </ResponsiveContainer>
  );
}

const LegendWrapper = tw.ul`list-none block md:flex items-center justify-center`;
const LegendContent = styled.li(({ circleColor }) => [
  tw`text-textSecondary! text-tiny mt-3 md:mr-12 items-center justify-center flex`,
  css`
    &:before {
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-right: 10px;
      -moz-border-radius: 10px;
      -webkit-border-radius: 10px;
      border-radius: 10px;
      background-color: ${circleColor};
    }
  `,
]);
