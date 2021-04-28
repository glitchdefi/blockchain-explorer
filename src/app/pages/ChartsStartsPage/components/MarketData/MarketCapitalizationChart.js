import React from "react";
import "twin.macro";

// Components
import { CardLayout } from "src/app/pages/WalletPage/components/CardLayout";
import { Text } from "src/app/components/Text";
import { AreaChart } from "src/app/components/Charts";

export function MarketCapitalizationChart() {
  return (
    <>
      <CardLayout>
        <Text tw="text-center">
          The Glitch Market Capitalization chart shows the historical breakdown
          of GLCH daily market capitalization and average price.
        </Text>
      </CardLayout>

      <CardLayout tw="mt-8 px-2 h-96">
        <AreaChart />
      </CardLayout>
    </>
  );
}
