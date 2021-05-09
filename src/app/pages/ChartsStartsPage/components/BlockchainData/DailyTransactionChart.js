import React from "react";
import { useTranslation } from "react-i18next";
import "twin.macro";

// Components
import { CardLayout } from "src/app/pages/WalletPage/components/CardLayout";
import { Text } from "src/app/components/Text";
import { AreaChart } from "src/app/components/Charts";
import { Grid } from "src/app/components/Grid";

export function DailyTransactionChart() {
  const { t } = useTranslation();
  return (
    <>
      <CardLayout>
        <Text tw="text-center">{t("chartsAndStats.the_chart_highlights")}</Text>
      </CardLayout>

      <Grid cols={2} tw="mt-4">
        <CardLayout>
          <Text tw="text-center">
            {t("chartsAndStats.highest_number", {
              transactions: "1,406,016",
              date: "Thursday, September 17, 2021",
            })}
          </Text>
        </CardLayout>
        <CardLayout>
          <Text tw="text-center">
            {t("chartsAndStats.lowest_number", {
              transactions: "1,329",
              date: "Sunday, August 9, 2015",
            })}
          </Text>
        </CardLayout>
      </Grid>

      <CardLayout tw="mt-7 px-2 h-96">
        <AreaChart tableName="Glitch Daily Transactions Chart"/>
      </CardLayout>
    </>
  );
}
