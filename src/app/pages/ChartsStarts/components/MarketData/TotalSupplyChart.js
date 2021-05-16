import React from "react";
import "twin.macro";
import { useTranslation } from "react-i18next";

// Components
import { CardLayout } from "src/app/pages/Wallet/components/CardLayout";
import { Text } from "src/app/components/Text";
import { PieChart } from "src/app/components/Charts";
import { Grid } from "src/app/components/Grid";

export function TotalSupplyChart() {
  const { t } = useTranslation();

  return (
    <>
      <Grid cols={2}>
        <CardLayout>
          <Text tw="font-bold">88,888,8888</Text>
          <Text tw="text-sm text-textSecondary">
            {t("chartsAndStats.total_glitch_supply")}
          </Text>
        </CardLayout>
        <CardLayout>
          <Text tw="font-bold">88,888,8888</Text>
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
