import React from "react";
import "twin.macro";

// Components
import { CardLayout } from "src/app/pages/WalletPage/components/CardLayout";
import { Text } from "src/app/components/Text";
import { AreaChart } from "src/app/components/Charts";

export function DailyTransactionChart() {
  return (
    <>
      <CardLayout>
        <Text tw="text-center">
          The chart highlights the total number of transactions on the Glitch
          blockchain with daily individual breakdown for average difficulty,
          estimated hash rate, average block time and size, total block and and
          total new address seen.
        </Text>
      </CardLayout>

      <div tw="grid grid-cols-2 gap-4 mt-4">
        <CardLayout>
          <Text>
            Highest number of 1,406,016 transactions on Thursday, September 17,
            2020
          </Text>
        </CardLayout>
        <CardLayout>
          <Text>
            Lowest number of 1,329 transactions on Sunday, August 9, 2015
          </Text>
        </CardLayout>
      </div>

      <CardLayout tw="mt-8 px-2 h-96">
        <AreaChart />
      </CardLayout>
    </>
  );
}
