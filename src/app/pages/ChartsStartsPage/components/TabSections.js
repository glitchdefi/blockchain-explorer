import React from "react";
import { css } from "twin.macro";

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
    const Tab = ({ label, key }) => (
      <TabBase
        tw="py-4 pl-7"
        tabStyles={{ label: { activeColor: "white", size: "13px" } }}
        key={key}
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
              return <Tab label={tab} key={tabIndex} />;
            })}
          </div>
        );
      } else {
        // For mobile
        return tabGroup.items.map((tab, tabIndex) => {
          return <Tab label={tab} key={tabIndex} />;
        });
      }
    });
  };

  return (
    <TabContainer css={[styles]} orientation="vertical">
      <Tabs>{renderTab()}</Tabs>

      {/* Market */}
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

const Label = tw(Text)`py-4 pl-7 pr-3 font-bold text-primary!`;
const styles = `
  .tab-panel {
    padding: 10px;
  }
`;
