import React from "react";

// Components
import { TabSections } from "./components/TabSections";

// Hooks
import { usePriceSlice } from "src/state/price/hooks";

export function ChartsStatsPage() {
  usePriceSlice();
  return (
    <>
      <TabSections />
    </>
  );
}
