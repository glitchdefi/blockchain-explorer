import React from "react";
import "twin.macro";
import { useTranslation } from "react-i18next";

// Components
import { CardLayout } from "src/app/pages/Wallet/components/CardLayout";
import { Text } from "src/app/components/Text";
import { PieChart } from "src/app/components/Charts";
import { Grid } from "src/app/components/Grid";
import { CountUp } from "src/app/components/Text/CountUp";
import { useAllGlitchInfo } from "src/state/price/hooks";

export function TotalSupplyChart() {
  const { t } = useTranslation();
  const { allGlitchInfo } = useAllGlitchInfo();
  const { total_supply, market_cap } = allGlitchInfo || {};

  return (
    <>
      <Grid cols={2}>
        <CardLayout>
          {total_supply ? (
            <CountUp bold value={total_supply} decimals={0} />
          ) : (
            <Text bold>--</Text>
          )}
          <Text tw="text-sm text-textSecondary">
            {t("chartsAndStats.total_glitch_supply")}
          </Text>
        </CardLayout>
        <CardLayout>
          {market_cap ? (
            <CountUp bold value={market_cap} decimals={0} />
          ) : (
            <Text bold>--</Text>
          )}
          <Text tw="text-sm text-textSecondary">
            {t("chartsAndStats.market_capitalization")}
          </Text>
        </CardLayout>
      </Grid>

      <CardLayout tw="mt-6 px-2 flex h-96 min-h-full">
        <Text tw="text-textSecondary mt-5 text-tiny">
          {t("chartsAndStats.breakdown_by_supply_types")}
        </Text>
        <PieChart />
      </CardLayout>
    </>
  );
}
