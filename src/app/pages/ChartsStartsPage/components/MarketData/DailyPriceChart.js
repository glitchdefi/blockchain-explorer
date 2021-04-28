import React from "react";
import "twin.macro";

// Components
import { CardLayout } from "src/app/pages/WalletPage/components/CardLayout";
import { Text } from "src/app/components/Text";
import { AreaChart } from "src/app/components/Charts";

export function DailyPriceChart() {
  return (
    <>
      <CardLayout>
        <Text>
          The GLCH Daily Price (USD) chart shows the daily historical price for
          GLCH in USD.
        </Text>
      </CardLayout>
      <CardLayout tw="mt-4">
        <Text>Note: Current Glitch price at $1,227.06</Text>
      </CardLayout>

      <CardLayout tw="mt-8 px-2 h-96">
        <AreaChart />
      </CardLayout>
    </>
  );
}
