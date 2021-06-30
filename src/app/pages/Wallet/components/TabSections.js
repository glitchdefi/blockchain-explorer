import React from "react";

// Components
import {
  AccManagementIcon,
  AssetManagementIcon,
  HistoryIcon,
  WalletIcon,
} from "src/app/components/Svg/Icons";
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
import { useTranslation } from "react-i18next";

export function TabSections() {
  const { t } = useTranslation();

  const renderTabs = () => (
    <Tabs>
      <Tab evtKey="accountManagement" leftIcon={<AccManagementIcon />}>
        {t("walletPage.account_management")}
      </Tab>
      <Tab evtKey="assetManagement" leftIcon={<AssetManagementIcon />}>
        {t("walletPage.asset_management")}
      </Tab>
      <Tab evtKey="history" leftIcon={<HistoryIcon />}>
        {t("common.history")}
      </Tab>
      <Tab evtKey="wallet" leftIcon={<WalletIcon />}>
        {t("walletPage.wallet")}
      </Tab>
    </Tabs>
  );

  return (
    <TabContainer orientation="vertical">
      {renderTabs()}

      <TabPanel evtKey="accountManagement">
        <AccountManagement />
      </TabPanel>

      <TabPanel evtKey="assetManagement">
        <AssetManagement />
      </TabPanel>

      <TabPanel evtKey="history">
        <History />
      </TabPanel>

      <TabPanel evtKey="wallet">
        <Wallets />
      </TabPanel>
    </TabContainer>
  );
}
