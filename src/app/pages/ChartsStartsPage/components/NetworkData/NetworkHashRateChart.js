import React from "react";
import "twin.macro";

// Components
import { CardLayout } from "src/app/pages/WalletPage/components/CardLayout";
import { Text } from "src/app/components/Text";
import { AreaChart } from "src/app/components/Charts";

export function NetworkHashRateChart() {
  return (
    <>
      <CardLayout>
        <Text tw="text-center">
          The Glitch Network Hash Rate Chart shows the historical measure of the
          processing power of the Glitch network.
        </Text>
      </CardLayout>

      <CardLayout tw="mt-8 px-2 h-96">
        <AreaChart />
      </CardLayout>
    </>
  );
}
