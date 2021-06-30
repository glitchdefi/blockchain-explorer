import React from "react";
import { useTranslation } from "react-i18next";
import "twin.macro";

// Components
import { CardLayout } from "src/app/pages/Wallet/components/CardLayout";
import { Text } from "src/app/components/Text";
import { AreaChart } from "src/app/components/Charts";

export function AverageBlockTimeChart() {
  const { t } = useTranslation();

  return (
    <>
      <CardLayout>
        <Text tw="text-center">
          {t("chartsAndStats.average_block_time_chart")}
        </Text>
      </CardLayout>

      <CardLayout tw="mt-8 px-2 h-96">
        <AreaChart tableName="Average Block Time Chart"/>
      </CardLayout>
    </>
  );
}
