import React from "react";

import { walletTabConfig } from "src/constants/walletTabConfig";

// Components
import {
  Tabs,
  Tab,
  TabPanel,
  TabContainer,
} from "src/app/components/Tab/Vertical";
import { AccountManagement } from "./AccountManagement";
import { AssetManagement } from "./AssetManagement";
import { History } from "./History";
import { Wallets } from "./Wallets";

export function TabSections() {
  const renderTab = () => {
    return walletTabConfig.map((tab, tabIndex) => {
      return (
        <Tab key={tabIndex} leftIcon={tab.icon}>
          {tab?.label}
        </Tab>
      );
    });
  };

  return (
    <TabContainer orientation="vertical">
      <Tabs>{renderTab()}</Tabs>

      <TabPanel>
        <AccountManagement />
      </TabPanel>

      <TabPanel>
        <AssetManagement />
      </TabPanel>

      <TabPanel>
        <History />
      </TabPanel>

      <TabPanel>
        <Wallets />
      </TabPanel>
    </TabContainer>
  );
}
