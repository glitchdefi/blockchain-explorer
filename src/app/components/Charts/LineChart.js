import React from "react";
import { useTranslation } from "react-i18next";
import { theme } from "twin.macro";
import { formatDollarAmount } from "src/utils/numbers";

import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TooltipTable } from "../Tooltip/TooltipTable";

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
          content={({ payload, active }) => {
            if (active) {
              const data = payload[0].payload;
              return (
                <TooltipTable>
                  <TooltipTable.Text value={data.fullStringDate} />
                  <TooltipTable.Text
                    value={`${t("common.glitch_price")}: ${formatDollarAmount(
                      data.price,
                      2,
                      true
                    )}`}
                  />
                </TooltipTable>
              );
            }
            return null;
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
