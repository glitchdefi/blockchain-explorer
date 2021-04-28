import React from "react";
import "twin.macro";

// Components
import { CardLayout } from "src/app/pages/WalletPage/components/CardLayout";
import { Text } from "src/app/components/Text";
import { AreaChart } from "src/app/components/Charts";

export function BlockCountRewardsChart() {
  return (
    <>
      <CardLayout>
        <Text tw="text-center">
          The Glitch Block Count and Rewards Chart shows the historical number
          of blocks produced daily on the Glitch network and the total block
          reward.
        </Text>
      </CardLayout>

      <CardLayout tw="mt-8 px-2 h-96">
        <AreaChart />
      </CardLayout>
    </>
  );
}
