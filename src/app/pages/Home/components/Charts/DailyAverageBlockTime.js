import React from "react";
import moment from "moment";
import "twin.macro";

import { LineChart } from "src/app/components/Charts";
import { TooltipTable } from "src/app/components/Tooltip/TooltipTable";

export const DailyAverageBlockTime = React.memo(({ loading, data }) => {
  return (
    <LineChart
      loading={loading}
      data={data}
      xAxis={{ dataKey: "formatTime" }}
      line={{ dataKey: "aveBlockTime" }}
      tooltipContent={({ payload, active }) => {
        if (active) {
          const data = payload?.length ? payload[0].payload : {};
          return (
            <TooltipTable>
              <TooltipTable.Text
                tw="text-color6 dark:text-color7"
                value={moment(data.time).format("MMM DD, YYYY")}
              />
              <div tw="flex items-center">
                <TooltipTable.Text
                  value={data.aveBlockTime}
                  tw="text-color6 mr-2"
                />
              </div>
            </TooltipTable>
          );
        }
        return null;
      }}
    />
  );
});
