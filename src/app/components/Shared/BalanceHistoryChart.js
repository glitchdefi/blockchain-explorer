import React from "react";
import { useTranslation } from "react-i18next";
import "twin.macro";

import { LineChart } from "src/app/components/Charts";
import { TooltipTable } from "src/app/components/Tooltip/TooltipTable";
import { CardLayout } from "src/app/pages/Wallet/components/CardLayout";
import { formatCurrencyAmount } from "src/utils/numbers";

export const BalanceHistoryChart = React.memo(() => {
  const { t } = useTranslation();

  return (
    <CardLayout tw="px-5 lg:px-10 py-5 h-96 border-t-0 bg-color2">
      <LineChart
        loading={false}
        data={[
          {
            vol: 7456789,
            price: 10,
          },
          {
            vol: 1500000,
            price: 5,
          },
          {
            vol: 3000000,
            price: 8,
          },
          {
            vol: 2300000,
            price: 6,
          },
        ]}
        xAxis={{
          dataKey: "vol",
          tickFormatter: (val) => formatCurrencyAmount(val, 3),
        }}
        yAxis={{
          tickFormatter: (val) => (val === 0 ? "GLCH" : val),
        }}
        line={{ dataKey: "price" }}
        tooltipContent={({ payload, active }) => {
          if (active) {
            const data = payload?.length ? payload[0].payload : {};
            return (
              <TooltipTable>
                <div tw="flex items-center">
                  <TooltipTable.Text value="Block:" tw="text-color6 mr-2" />
                  <TooltipTable.Text
                    value={data.vol}
                    tw="text-textColor1 font-bold"
                  />
                </div>
                <div tw="flex items-center">
                  <TooltipTable.Text value="Balance:" tw="text-color6 mr-2" />
                  <TooltipTable.Text
                    value={567}
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
    </CardLayout>
  );
});
