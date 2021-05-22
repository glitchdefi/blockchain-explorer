import React from "react";
import { useTranslation } from "react-i18next";
import { theme } from "twin.macro";

// Hooks
import { useBlockSlice } from "src/state/block/hooks";
import { useTxSlice } from "src/state/transaction/hooks";
import { useWalletSlice } from "src/state/wallet/hooks";
import { usePriceSlice } from "src/state/price/hooks";

// Components
import { Grid } from "src/app/components/Grid";
import { Text } from "src/app/components/Text";
import { PriceChart } from "./components/PriceChart";
import { TabSections } from "./components/TabSections";
import { StatsHistory } from "./components/StatsHistory";

export function HomePage() {
  const { t } = useTranslation();
  useBlockSlice();
  useTxSlice();
  useWalletSlice();
  usePriceSlice();

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
