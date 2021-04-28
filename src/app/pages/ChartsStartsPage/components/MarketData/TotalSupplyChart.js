import React from "react";
import "twin.macro";
import { useTranslation } from "react-i18next";

// Components
import { CardLayout } from "src/app/pages/WalletPage/components/CardLayout";
import { Text } from "src/app/components/Text";
import { PieChart } from "src/app/components/Charts";

export function TotalSupplyChart() {
  const { t } = useTranslation();

  return (
    <>
      <div tw="grid grid-cols-2 gap-4">
        <CardLayout>
          <Text tw="font-bold">88,888,8888</Text>
          <Text tw="text-12 text-white-70!">
            {t("chartsAndStats.total_glitch_supply")}
          </Text>
        </CardLayout>
        <CardLayout>
          <Text tw="font-bold">88,888,8888</Text>
          <Text tw="text-12 text-white-70!">
            {t("chartsAndStats.market_capitalization")}
          </Text>
        </CardLayout>
      </div>

      <CardLayout tw="mt-8 px-2 h-96">
        <Text tw="text-white-70! mt-5 text-13">
          {t("chartsAndStats.breakdown_by_supply_types")}
        </Text>
        <PieChart />
      </CardLayout>
    </>
  );
}
