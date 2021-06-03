import React from "react";
import { useTranslation } from "react-i18next";
import { theme } from "twin.macro";

// Hooks
import { useWalletSlice } from "src/state/wallet/hooks";
import { usePriceSlice } from "src/state/price/hooks";
import { useBlockSlice } from "src/state/block/hooks";
import { useTxSlice } from "src/state/transaction/hooks";
import { useProducerSlice } from "src/state/producer/hooks";

// Components
import { Grid } from "src/app/components/Grid";
import { Text } from "src/app/components/Text";
import { PriceChart } from "./components/PriceChart";
import { TabSections } from "./components/TabSections";
import { StatsHistory } from "./components/StatsHistory";

export function HomePage() {
  const { t } = useTranslation();
  useWalletSlice();
  usePriceSlice();
  useBlockSlice();
  useProducerSlice();
  useTxSlice();

  return (
    <>
      <Text size={theme`fontSize.lg`}>
        {t("homePage.7_day_GLCH_price_history")}
      </Text>
      <Grid cols={2} tw="mt-3">
        <PriceChart />
        <StatsHistory />
      </Grid>
      <TabSections />
    </>
  );
}
