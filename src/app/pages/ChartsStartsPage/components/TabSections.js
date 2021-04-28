import React from "react";
import tw, { styled, css, theme } from "twin.macro";

import { tabsConfig } from "./config";

// Components
import {
  Tabs,
  Tab,
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

export function TabSections() {
  const renderTab = () => {
    return tabsConfig.map((tabGroup, tabGroupIndex) => {
      return (
        <div key={tabGroupIndex}>
          <Text tw="pt-4 pb-2 px-3 font-bold text-primary!">
            {tabGroup.label}
          </Text>
          {tabGroup.items.map((tab, tabIndex) => {
            return (
              <Tab
                tabStyles={{ label: { activeColor: "white", size: "13px" } }}
                key={tabIndex}
              >
                {tab}
              </Tab>
            );
          })}
        </div>
      );
    });
  };

  return (
    <TabContainer orientation="vertical">
      <Tabs>{renderTab()}</Tabs>

      {/* Network */}
      <TabPanel>
        <DailyPriceChart />
      </TabPanel>
      <TabPanel>
        <TotalSupplyChart />
      </TabPanel>
      <TabPanel>
        <MarketCapitalizationChart />
      </TabPanel>

      {/* Blockchain */}
      <TabPanel>
        <DailyTransactionChart />
      </TabPanel>
      <TabPanel>
        <DailyTokenTransferChart />
      </TabPanel>
      <TabPanel>
        <AverageBlockSizeChart />
      </TabPanel>
      <TabPanel>
        <AverageBlockTimeChart />
      </TabPanel>
      <TabPanel>
        <BlockCountRewardsChart />
      </TabPanel>

      {/* Network */}
      <TabPanel>
        <NetworkHashRateChart />
      </TabPanel>
      <TabPanel>
        <NetworkDifficultyChart />
      </TabPanel>
      <TabPanel>
        <NetworkTransactionFeeChart />
      </TabPanel>
    </TabContainer>
  );
}
