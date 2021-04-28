import React from "react";
import { useTranslation } from "react-i18next";
import "twin.macro";

// Components
import { CardLayout } from "src/app/pages/WalletPage/components/CardLayout";
import { Text } from "src/app/components/Text";
import { AreaChart } from "src/app/components/Charts";

export function NetworkDifficultyChart() {
  const { t } = useTranslation();

  return (
    <>
      <CardLayout>
        <Text tw="text-center">
          {t("chartsAndStats.the_glitch_difficulty_chart")}
        </Text>
      </CardLayout>

      <CardLayout tw="mt-8 px-2 h-96">
        <AreaChart />
      </CardLayout>
    </>
  );
}
