import React from "react";
import "twin.macro";
import {
  TabContainer,
  Tabs,
  Tab,
  TabPanel,
} from "src/app/components/Tab/Horizontal";
import { ProducerTable } from "../Tables/Producer";
import { EpochTable } from "../Tables/Epoch";
import { TransactionTable } from "../Tables/Transactions";
import { BlockTable } from "../Tables/Block";

export function TabSections() {
  return (
    <TabContainer tw="mt-12">
      <Tabs>
        <Tab evtKey="producer">Producer</Tab>
        <Tab evtKey="epoch">Epoch</Tab>
        <Tab evtKey="transactions">Transactions</Tab>
        <Tab evtKey="block">Block</Tab>
      </Tabs>

      <TabPanel evtKey="producer">
        <ProducerTable data={[1, 2, 3]} />
      </TabPanel>
      <TabPanel evtKey="epoch">
        <EpochTable data={[1, 2]} />
      </TabPanel>
      <TabPanel evtKey="transactions">
        <TransactionTable data={[1, 2, 3, 4]} />
      </TabPanel>
      <TabPanel evtKey="block">
        <BlockTable data={[1, 2, 3, 5]} />
      </TabPanel>
    </TabContainer>
  );
}
