import React, { useState } from "react";
import "twin.macro";
import { useTranslation } from "react-i18next";

import { useAddressTxs } from "src/state/address/hooks";

// Components
import {
  TabContainer,
  Tabs,
  Tab,
  TabPanel,
} from "src/app/components/Tab/Horizontal";
import { TransactionsTable } from "src/app/pages/Transactions/components/TransactionsTable";

// import { TransactionTable } from "./Tables/Transactions";
// import { GRC20TokenTable } from "./Tables/GRC20";
// import { MinedBlockTable } from "./Tables/MinedBlocks";

export function TabSections({ address }) {
  const [params, setParams] = useState();
  const { t } = useTranslation();
  const { isFetchingAddressTxs, data, total } = useAddressTxs(address, params);

  return (
    <TabContainer>
      <Tabs tw="grid-cols-3 lg:grid-cols-4">
        <Tab evtKey="txs">{t("common.transactions")}</Tab>
        {/* <Tab evtKey="grc20">{t("userDetails.grc20_token_txns")}</Tab>
        <Tab evtKey="minedBlocks">{t("userDetails.mined_blocks")}</Tab> */}
      </Tabs>

      <TabPanel evtKey="txs">
        <TransactionsTable
          loading={isFetchingAddressTxs}
          data={data}
          total={total}
          onChange={(p) => setParams(p)}
        />
      </TabPanel>
      {/* <TabPanel evtKey="grc20">
        <GRC20TokenTable data={[1, 2]} />
      </TabPanel>
      <TabPanel evtKey="minedBlocks">
        <MinedBlockTable data={[1, 2, 3, 5]} />
      </TabPanel> */}
    </TabContainer>
  );
}