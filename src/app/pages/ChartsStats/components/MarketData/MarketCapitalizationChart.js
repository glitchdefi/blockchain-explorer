import React from "react";
import { useTranslation } from "react-i18next";
import "twin.macro";

import { formatAmount, formatCurrencyAmount } from "src/utils/numbers";

// Hooks
import { useGlitchMarketData } from "src/state/price/hooks";

// Components
import { CardLayout } from "src/app/pages/Wallet/components/CardLayout";
import { Text } from "src/app/components/Text";
import { AreaChart } from "src/app/components/Charts";
import { TooltipTable } from "src/app/components/Tooltip/TooltipTable";

export function MarketCapitalizationChart() {
  const { t } = useTranslation();
  const { isFetchingGlitchMarketData, glitchMarketData } =
    useGlitchMarketData();

  return (
    <>
      <CardLayout>
        <Text tw="text-center">
          {t("chartsAndStats.the_glitch_market_capitalization")}
        </Text>
      </CardLayout>

      <CardLayout
        tw="mt-8 px-2 items-center justify-center"
        style={{ height: "400px" }}
      >
        <AreaChart
          loading={isFetchingGlitchMarketData}
          tableName="GLCH Market Capitalization Chart"
          data={glitchMarketData?.market_caps}
          xAxis={{ dataKey: "date" }}
          yAxis={{ tickFormatter: (val) => formatCurrencyAmount(val, 2, true) }}
          area={{ dataKey: "cap" }}
          tooltipContent={({ payload, active }) => {
            if (active) {
              const data = payload?.length ? payload[0].payload : {};
              return (
                <TooltipTable>
                  <TooltipTable.Text value={data?.fullStringDate} />
                  <TooltipTable.Text
                    value={`${t("chartsAndStats.total_value")}: $${formatAmount(
                      data?.cap
                    )}`}
                  />
                  <TooltipTable.Text
                    value={`${t("chartsAndStats.market_cap")}: $${formatAmount(
                      data?.cap
                    )}`}
                  />
                  <TooltipTable.Text
                    value={`${t("chartsAndStats.avg_price_glitch")}: ${
                      data?.avgPrice
                    }`}
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
