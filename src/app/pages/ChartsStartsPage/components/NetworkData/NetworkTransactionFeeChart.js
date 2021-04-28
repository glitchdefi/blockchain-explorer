import React from "react";
import "twin.macro";

// Components
import { CardLayout } from "src/app/pages/WalletPage/components/CardLayout";
import { Text } from "src/app/components/Text";
import { AreaChart } from "src/app/components/Charts";

export function NetworkTransactionFeeChart() {
  return (
    <>
      <CardLayout>
        <Text tw="text-center">
          The Glitch Network Transaction Fee Chart shows historical total number
          of Glitch paid as transaction fee for the Glitch network.
        </Text>
      </CardLayout>

      <CardLayout tw="mt-8 px-2 h-96">
        <AreaChart />
      </CardLayout>
    </>
  );
}
