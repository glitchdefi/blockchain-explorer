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
        <Tab>Producer</Tab>
        <Tab>Epoch</Tab>
        <Tab>Transactions</Tab>
        <Tab>Block</Tab>
      </Tabs>

      <TabPanel>
        <ProducerTable data={[1, 2, 3]} />
      </TabPanel>
      <TabPanel>
        <EpochTable data={[1, 2]} />
      </TabPanel>
      <TabPanel>
        <TransactionTable data={[1, 2, 3, 4]} />
      </TabPanel>
      <TabPanel>
        <BlockTable data={[1, 2, 3, 5]} />
      </TabPanel>
    </TabContainer>
  );
}
