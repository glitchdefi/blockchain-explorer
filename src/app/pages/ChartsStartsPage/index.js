import React from "react";
import { useTranslation } from "react-i18next";
import tw from "twin.macro";

import { Page } from "src/app/layouts/Page";

// Components
import { TabSections } from "./components/TabSections";

export function ChartsStatsPage() {
  const { t } = useTranslation();

  return (
    <>
      <TabSections />
    </>
  );
}
