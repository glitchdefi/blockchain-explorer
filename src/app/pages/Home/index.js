import React from "react";
import "twin.macro";

// Hooks
import { useWalletSlice } from "src/state/wallet/hooks";
import { usePriceSlice } from "src/state/price/hooks";
import { useBlockSlice } from "src/state/block/hooks";
import { useTxSlice } from "src/state/transaction/hooks";
import { useProducerSlice } from "src/state/producer/hooks";
import { useSocket } from "src/services/socket/hooks/useSocket";

// Components
import { Grid } from "src/app/components/Grid";
import { PriceChart } from "./components/PriceChart";
import { TabSections } from "./components/TabSections";
import { StatsHistory } from "./components/StatsHistory";

export function HomePage() {
  useWalletSlice();
  usePriceSlice();
  useBlockSlice();
  useProducerSlice();
  useTxSlice();
  useSocket();

  return (
    <>
      <Grid cols={2} tw="mt-8 bg-color1">
        <PriceChart />
        <div tw="p-3">
          <StatsHistory />
        </div>
      </Grid>
      <TabSections />
    </>
  );
}
