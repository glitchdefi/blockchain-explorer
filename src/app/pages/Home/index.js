import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { theme } from "twin.macro";

import { statsData } from "src/constants/statsData";

// Components
import { Grid } from "src/app/components/Grid";
import { Text } from "src/app/components/Text";
import { StatsCard } from "./components/StatsCard";
import { PriceChart } from "./components/PriceChart";
import { TabSections } from "./components/TabSections";

export function HomePage() {
  const { t } = useTranslation();

  // Test skeleton
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => {
      setIsLoading(false);

      return () => {
        clearTimeout(timer);
      };
    }, 1000);
  }, []);

  const renderPriceChart = () => {
    return <PriceChart />;
  };

  const renderStatsCards = () => {
    return (
      <Grid cols={2}>
        {statsData.map((o, i) => (
          <StatsCard
            loading={isLoading}
            key={i}
            icon={o.icon}
            title={o.title}
            value={o.value}
          />
        ))}
      </Grid>
    );
  };

  const renderTabSections = () => {
    return <TabSections />;
  };

  return (
    <>
      <Text size={theme`fontSize.lg`}>
        {t("homepage.7_day_GLCH_price_history")}
      </Text>
      <Grid cols={2} tw="mt-3">
        {renderPriceChart()}
        {renderStatsCards()}
      </Grid>
      {renderTabSections()}
    </>
  );
}
