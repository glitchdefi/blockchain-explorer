import React from "react";
import { useTranslation } from "react-i18next";
import "twin.macro";

// Components
import { CardLayout } from "src/app/pages/Wallet/components/CardLayout";
import { Text } from "src/app/components/Text";
import { AreaChart } from "src/app/components/Charts";
import { useAllGlitchInfo, usePriceHistory } from "src/state/price/hooks";
import { formatDollarAmount } from "src/utils/numbers";
import { TooltipTable } from "src/app/components/Tooltip/TooltipTable";

export function DailyPriceChart() {
  const { t } = useTranslation();
  const { isFetchingPriceHistory, priceHistory } = usePriceHistory();
  const { allGlitchInfo } = useAllGlitchInfo();
  const { current_price } = allGlitchInfo || {};

  return (
    <>
      <CardLayout>
        <Text tw="text-center">
          {t("chartsAndStats.daily_price_chart_show")}
        </Text>
      </CardLayout>
      <CardLayout tw="mt-4">
        <Text tw="text-center">
          {t("chartsAndStats.current_glitch_price", {
            price: current_price
              ? formatDollarAmount(current_price, 2, true)
              : "--",
          })}
        </Text>
      </CardLayout>

      <CardLayout
        tw="mt-8 px-2 items-center justify-center"
        style={{ height: "400px" }}
      >
        <AreaChart
          loading={isFetchingPriceHistory}
          tableName="GLCH Daily Price (USD) Chart"
          data={priceHistory}
          xAxis={{ dataKey: "date" }}
          area={{ dataKey: "price" }}
          tooltipContent={({ payload, active }) => {
            if (active) {
              const data = payload?.length ? payload[0].payload : {};
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
      </CardLayout>
    </>
  );
}
