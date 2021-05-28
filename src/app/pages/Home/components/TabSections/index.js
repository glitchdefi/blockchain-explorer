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

export function TabSections() {
  return (
    <TabContainer tw="mt-12">
      <Tabs tw="grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
        <Tab evtKey="producer">Producer</Tab>
        <Tab evtKey="epoch">Epoch</Tab>
      </Tabs>

      <TabPanel evtKey="producer">
        <ProducerTable />
      </TabPanel>
      <TabPanel evtKey="epoch">
        <EpochTable />
      </TabPanel>
    </TabContainer>
  );
}
