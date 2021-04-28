import React from "react";
import { useTranslation } from "react-i18next";
import "twin.macro";

// Components
import { CardLayout } from "src/app/pages/WalletPage/components/CardLayout";
import { Text } from "src/app/components/Text";
import { AreaChart } from "src/app/components/Charts";

export function DailyTransactionChart() {
  const { t } = useTranslation();
  return (
    <>
      <CardLayout>
        <Text tw="text-center">{t("chartsAndStats.the_chart_highlights")}</Text>
      </CardLayout>

      <div tw="grid grid-cols-2 gap-4 mt-4">
        <CardLayout>
          <Text>
            {t("chartsAndStats.highest_number", {
              transactions: "1,406,016",
              date: "Thursday, September 17, 2021",
            })}
          </Text>
        </CardLayout>
        <CardLayout>
          <Text>
            {t("chartsAndStats.lowest_number", {
              transactions: "1,329",
              date: "Sunday, August 9, 2015",
            })}
          </Text>
        </CardLayout>
      </div>

      <CardLayout tw="mt-8 px-2 h-96">
        <AreaChart />
      </CardLayout>
    </>
  );
}
