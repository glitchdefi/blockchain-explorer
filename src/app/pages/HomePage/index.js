import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import tw from "twin.macro";

import { ThemeContext } from "src/styles/theme/themeContext";
import { statsData } from "src/constants/statsData";

import { Page } from "src/app/layouts/Page";

// Components
import { Text } from "src/app/components/Text";
import { StatsCard } from "./components/StatsCard";
import { PriceChart } from "./components/PriceChart";
import { TabSections } from "./components/TabSections";

export function HomePage() {
  const { t } = useTranslation();
  const { theme, setTheme } = useContext(ThemeContext);

  const renderPriceChart = () => {
    return <PriceChart />;
  };

  const renderStatsCards = () => {
    return (
      <div>
        <StatsCardsWrapper>
          {statsData.map((o, i) => (
            <StatsCard key={i} icon={o.icon} title={o.title} value={o.value} />
          ))}
        </StatsCardsWrapper>
      </div>
    );
  };

  const renderTabSections = () => {
    return <TabSections />;
  };

  return (
    <>
      <Page meta={{}}>
        <div tw="mb-4">
          <Text>{t("homepage.7_day_GLCH_price_history")}</Text>
          <StatsWrapper>
            {renderPriceChart()}
            {renderStatsCards()}
          </StatsWrapper>
        </div>

        {renderTabSections()}
      </Page>
    </>
  );
}

const StatsWrapper = tw.div`grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3`;
const StatsCardsWrapper = tw.div`grid grid-cols-1 xl:grid-cols-2 gap-4`;
