import React from "react";
import "twin.macro";

// Components
import { CardLayout } from "src/app/pages/WalletPage/components/CardLayout";
import { Text } from "src/app/components/Text";
import { PieChart } from "src/app/components/Charts";

export function TotalSupplyChart() {
  return (
    <>
      <div tw="grid grid-cols-2 gap-4">
        <CardLayout>
          <Text tw="font-bold">88,888,8888</Text>
          <Text tw="text-12 text-white-70!">Total Glitch Supply</Text>
        </CardLayout>
        <CardLayout>
          <Text tw="font-bold">88,888,8888</Text>
          <Text tw="text-12 text-white-70!">Market Capitaliztion</Text>
        </CardLayout>
      </div>

      <CardLayout tw="mt-8 px-2 h-96">
        <Text tw="text-white-70! mt-5 text-13">Breakdown by Supply Types</Text>
        <PieChart />
      </CardLayout>
    </>
  );
}
