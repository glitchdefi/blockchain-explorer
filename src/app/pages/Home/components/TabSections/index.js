import React from "react";
import "twin.macro";
import {
  TabContainer,
  Tabs,
  Tab,
  TabPanel,
} from "src/app/components/Tab/Horizontal";
import { LatestBlocksPanel } from "./LatestBlocksPanel";
import { LatestTxnsPanel } from "./LatestTxnsPanel";
import { useTranslation } from "react-i18next";

export function TabSections() {
  const { t } = useTranslation();

  return (
    <TabContainer tw="mt-12">
      <Tabs tw="grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
        <Tab evtKey="latestBlocks">{t("common.latest_blocks")}</Tab>
        <Tab evtKey="latestTxns">{t("common.latest_txs")}</Tab>
      </Tabs>

      <TabPanel evtKey="latestBlocks">
        <LatestBlocksPanel />
      </TabPanel>
      <TabPanel evtKey="latestTxns">
        <LatestTxnsPanel />
      </TabPanel>
    </TabContainer>
  );
}
