import React from "react";
import "twin.macro";

// Constants
import { HOME_IDS } from "src/constants/refIds";

// Components
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
    <TabContainer tw="mt-8">
      <Tabs tw="grid-cols-2 lg:grid-cols-4">
        <Tab id={HOME_IDS.blocksTab} evtKey="latestBlocks">
          {t("common.latest_blocks")}
        </Tab>
        <Tab id={HOME_IDS.txsTab} evtKey="latestTxns">
          {t("common.latest_txs")}
        </Tab>
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
