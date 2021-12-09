import React from "react";
import { useTranslation } from "react-i18next";
import moment from "moment";
import "twin.macro";

import { LineChart } from "src/app/components/Charts";
import { TooltipTable } from "src/app/components/Tooltip/TooltipTable";

export const DailyTxnCount = React.memo(() => {
  const { t } = useTranslation();

  return (
    <LineChart
      loading={false}
      data={[
        {
          date: moment("20-11-2021", "DD-MM-YYYY").format("DD.MMM"),
          price: 10,
        },
        {
          date: moment("21-11-2021", "DD-MM-YYYY").format("DD.MMM"),
          price: 5,
        },
        {
          date: moment("22-11-2021", "DD-MM-YYYY").format("DD.MMM"),
          price: 8,
        },
        {
          date: moment("23-11-2021", "DD-MM-YYYY").format("DD.MMM"),
          price: 6,
        },
      ]}
      xAxis={{ dataKey: "date" }}
      line={{ dataKey: "price" }}
      tooltipContent={({ payload, active }) => {
        if (active) {
          const data = payload?.length ? payload[0].payload : {};
          return (
            <TooltipTable>
              <TooltipTable.Text
                tw="text-color6 dark:text-color7"
                value={data.date}
              />
              <div tw="flex items-center">
                <TooltipTable.Text
                  value={567}
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
