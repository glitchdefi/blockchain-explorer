import React from "react";
import { theme } from "twin.macro";

import { useMinScreen } from "src/hooks/useMinScreen";
import { tabsConfig } from "./config";

// Components
import {
  Tabs,
  Tab as TabBase,
  TabPanel,
  TabContainer,
} from "src/app/components/Tab/Vertical";
import { Text } from "src/app/components/Text";
import {
  DailyPriceChart,
  MarketCapitalizationChart,
  TotalSupplyChart,
} from "./MarketData";
import {
  DailyTransactionChart,
  DailyTokenTransferChart,
  AverageBlockSizeChart,
  AverageBlockTimeChart,
  BlockCountRewardsChart,
} from "./BlockchainData";
import {
  NetworkDifficultyChart,
  NetworkHashRateChart,
  NetworkTransactionFeeChart,
} from "./NetworkData";
import tw from "twin.macro";

export function TabSections() {
  const renderTab = () => {
    const { min } = useMinScreen();

    // Default Tab
    const Tab = ({ label, evtKey }) => (
      <TabBase
        tw="py-4 pl-7"
        tabStyles={{
          label: { activeColor: "white", size: theme`fontSize.tiny` },
        }}
        evtKey={evtKey}
      >
        {label}
      </TabBase>
    );

    return tabsConfig.map((tabGroup, tabGroupIndex) => {
      // For desktop
      if (min`lg`) {
        return (
          <div key={tabGroupIndex}>
            <Label>{tabGroup.label}</Label>
            {tabGroup.items.map((tab, tabIndex) => {
              return (
                <Tab key={tabIndex} label={tab.label} evtKey={tab.evtKey} />
              );
            })}
          </div>
        );
      } else {
        // For mobile
        return tabGroup.items.map((tab, tabIndex) => {
          return <Tab key={tabIndex} label={tab.label} evtKey={tab.evtKey} />;
        });
      }
    });
  };

  return (
    <TabContainer css={[styles]} orientation="vertical">
      <Tabs>{renderTab()}</Tabs>

      {/* Market */}
      <TabPanel evtKey="GLCHDailyPriceChart">
        <DailyPriceChart />
      </TabPanel>
      <TabPanel evtKey="totalSupplyChart">
        <TotalSupplyChart />
      </TabPanel>
      <TabPanel evtKey="GLCHMarketChart">
        <MarketCapitalizationChart />
      </TabPanel>

      {/* Blockchain */}
      <TabPanel evtKey="dailyTransactionsChart">
        <DailyTransactionChart />
      </TabPanel>
      <TabPanel evtKey="ERC20DailyTokenTransferChart">
        <DailyTokenTransferChart />
      </TabPanel>
      <TabPanel evtKey="averageBlockSizeChart">
        <AverageBlockSizeChart />
      </TabPanel>
      <TabPanel evtKey="averageBlockTimeChart">
        <AverageBlockTimeChart />
      </TabPanel>
      <TabPanel evtKey="blockCountRewardsChart">
        <BlockCountRewardsChart />
      </TabPanel>

      {/* Network */}
      <TabPanel evtKey="networkHashRateChart">
        <NetworkHashRateChart />
      </TabPanel>
      <TabPanel evtKey="networkDifficultyChart">
        <NetworkDifficultyChart />
      </TabPanel>
      <TabPanel evtKey="networkTransactionFeeChart">
        <NetworkTransactionFeeChart />
      </TabPanel>
    </TabContainer>
  );
}

const Label = tw(Text)`py-4 pl-7 pr-3 font-bold text-primary!`;
const styles = `
  .tab-panel {
    padding: 10px;
  }
`;
