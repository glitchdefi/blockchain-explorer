import React from "react";
import "twin.macro";

// Components
import { TabPanel } from "src/app/components/Tab/Horizontal";
import { BlockTable } from "src/app/pages/Home/components/Tables/Block";

export function EpodDetailsTable() {
  return (
    <TabPanel isCard tw="mt-5 mb-8">
      <BlockTable data={[1, 2, 3]} />
    </TabPanel>
  );
}
