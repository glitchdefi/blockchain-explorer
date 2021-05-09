import React from "react";
import { useTranslation } from "react-i18next";
import "twin.macro";

// Components
import { CardLayout } from "src/app/pages/WalletPage/components/CardLayout";
import { Text } from "src/app/components/Text";
import { AreaChart } from "src/app/components/Charts";

export function DailyTokenTransferChart() {
  const { t } = useTranslation();
  return (
    <>
      <CardLayout>
        <Text tw="text-center">
          {t("chartsAndStats.the_chart_shows_the_number_of_grc20")}
        </Text>
      </CardLayout>

      <CardLayout tw="mt-8 px-2 h-96">
        <AreaChart tableName="GRC20 Daily Token Transfer Chart"/>
      </CardLayout>
    </>
  );
}
