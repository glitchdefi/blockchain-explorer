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
import { InfoDetailCard } from "./InfoDetailCard";

export function TabSections() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <TabContainer>
        <Tabs tw="grid-cols-2 lg:grid-cols-4 mt-6">
          <Tab>{t("common.overview")}</Tab>
          <Tab>{t("common.state")}</Tab>
        </Tabs>

        <TabPanel>
          <InfoDetailCard />
        </TabPanel>
        <TabPanel>
          <InfoDetailCard />
        </TabPanel>
      </TabContainer>
    </Wrapper>
  );
}
