import React from "react";
import { useTranslation } from "react-i18next";
import "twin.macro";

// Components
import { TableContainer as Wrapper } from "src/app/components/Table";
import {
  TabContainer,
  Tabs,
  Tab,
  TabPanel,
} from "src/app/components/Tab/Horizontal";
import { Filters } from "./Filters";
import { TransactionsPanel } from "./TransactionsPanel";
import { MinersPanel } from "./MinersPanel";

export function TabSections() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <TabContainer>
        <Tabs tw="grid-cols-2 lg:grid-cols-4">
          <Tab>{t("common.transactions")}</Tab>
          <Tab>{t("common.miners")}</Tab>
        </Tabs>

        <TabPanel>
          <Filters />
          <TransactionsPanel />
        </TabPanel>
        <TabPanel>
          <Filters />
          <MinersPanel data={[1,2,3]}/>
        </TabPanel>
      </TabContainer>
    </Wrapper>
  );
}
