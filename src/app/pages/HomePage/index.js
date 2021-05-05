import React from "react";
import { useTranslation } from "react-i18next";
import tw, { theme } from "twin.macro";

import { statsData } from "src/constants/statsData";

// Components
import { Text } from "src/app/components/Text";
import { StatsCard } from "./components/StatsCard";
import { PriceChart } from "./components/PriceChart";
import { TabSections } from "./components/TabSections";

export function HomePage() {
  const { t } = useTranslation();

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
      <div tw="mb-4">
        <Text size={theme`fontSize.lg`}>
          {t("homepage.7_day_GLCH_price_history")}
        </Text>
        <StatsWrapper>
          {renderPriceChart()}
          {renderStatsCards()}
        </StatsWrapper>
      </div>
      {renderTabSections()}
    </>
  );
}

const StatsWrapper = tw.div`grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3`;
const StatsCardsWrapper = tw.div`grid grid-cols-1 xl:grid-cols-2 gap-4`;
