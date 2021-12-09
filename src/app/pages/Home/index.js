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
import { TabSections } from "./components/TabSections";
import { LeftInfoSection } from "./components/LeftInfoSection";
import { RightInfoSection } from "./components/RightInfoSection";

export function HomePage() {
  useWalletSlice();
  usePriceSlice();
  useBlockSlice();
  useProducerSlice();
  useTxSlice();
  useSocket();

  return (
    <>
      <div tw="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
        <div tw="order-2 xl:order-1 xl:col-span-2">
          <LeftInfoSection />
        </div>

        <div tw="order-1 xl:order-2 mb-6 xl:mb-0">
          <RightInfoSection />
        </div>
      </div>

      <TabSections />
    </>
  );
}
