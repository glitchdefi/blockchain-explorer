import React from "react";
import tw, { css, styled } from "twin.macro";
import { useTranslation } from "react-i18next";

// Components
import {
  TabContainer,
  Tabs,
  Tab,
  TabPanel,
} from "src/app/components/Tab/Horizontal";

import { TransactionTable } from "./Tables/Transactions";
import { GRC20TokenTable } from "./Tables/GRC20";
import { MinedBlockTable } from "./Tables/MinedBlocks";

export function TabSections() {
  const { t } = useTranslation();

  return (
    <TabContainer>
      <Tabs tw="grid-cols-3 lg:grid-cols-4">
        <Tab>{t("common.transactions")}</Tab>
        <Tab>{t("userDetails.grc20_token_txns")}</Tab>
        <Tab>{t("userDetails.mined_blocks")}</Tab>
      </Tabs>

      <TabPanel>
        <TransactionTable data={[1, 2, 3, 4]} />
      </TabPanel>
      <TabPanel>
        <GRC20TokenTable data={[1, 2]} />
      </TabPanel>
      <TabPanel>
        <MinedBlockTable data={[1, 2, 3, 5]} />
      </TabPanel>
    </TabContainer>
  );
}
