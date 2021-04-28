import React from "react";
import "twin.macro";

// Components
import { CardLayout } from "src/app/pages/WalletPage/components/CardLayout";
import { Text } from "src/app/components/Text";
import { AreaChart } from "src/app/components/Charts";

export function NetworkDifficultyChart() {
  return (
    <>
      <CardLayout>
        <Text tw="text-center">
          The Glitch Network Difficulty Chart displays the mining difficulty and
          the historical value of the Glitch network.
        </Text>
      </CardLayout>

      <CardLayout tw="mt-8 px-2 h-96">
        <AreaChart />
      </CardLayout>
    </>
  );
}
