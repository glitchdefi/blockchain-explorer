import React from "react";
import { useTranslation } from "react-i18next";
import "twin.macro";

// Components
import { CardLayout } from "src/app/pages/Wallet/components/CardLayout";
import { Text } from "src/app/components/Text";
import { AreaChart } from "src/app/components/Charts";

export function NetworkHashRateChart() {
  const { t } = useTranslation();

  return (
    <>
      <CardLayout>
        <Text tw="text-center">
          {t("chartsAndStats.the_glitch_network_hash_rate")}
        </Text>
      </CardLayout>

      <CardLayout tw="mt-8 px-2 h-96">
        <AreaChart tableName="Glitch Network Hash Rate Chart"/>
      </CardLayout>
    </>
  );
}
