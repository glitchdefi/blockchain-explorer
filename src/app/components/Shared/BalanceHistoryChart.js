import React from "react";
import "twin.macro";

import { LineChart } from "src/app/components/Charts";
import { TooltipTable } from "src/app/components/Tooltip/TooltipTable";
import { Card } from "src/app/components/Card";

export const BalanceHistoryChart = React.memo(({ loading, data }) => {
  return (
    <Card tw="px-5 lg:px-10 py-5 h-96 border-t-0 bg-color2">
      <LineChart
        loading={loading}
        data={data}
        xAxis={{
          dataKey: "block",
        }}
        yAxis={{
          tickFormatter: (val) => (val === 0 ? "GLCH" : val),
        }}
        line={{ dataKey: "balance" }}
        tooltipContent={({ payload, active }) => {
          if (active) {
            const data = payload?.length ? payload[0].payload : {};
            return (
              <TooltipTable>
                <div tw="flex items-center">
                  <TooltipTable.Text value="Block:" tw="text-color6 mr-2" />
                  <TooltipTable.Text
                    value={data?.block}
                    tw="text-textColor1 font-bold"
                  />
                </div>
                <div tw="flex items-center">
                  <TooltipTable.Text value="Balance:" tw="text-color6 mr-2" />
                  <TooltipTable.Text
                    value={data?.balance}
                    tw="text-textColor1 font-bold"
                  />
                </div>
              </TooltipTable>
            );
          }
          return null;
        }}
        chartMargin={{ top: 16, left: -16, right: 12, bottom: 5 }}
      />
    </Card>
  );
});
