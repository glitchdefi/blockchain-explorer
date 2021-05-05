import React from "react";
import "twin.macro";

import { Page } from "src/app/layouts/Page";

// Components
import { TabSections } from "./components/TabSections";

export function TopStatisticsPage() {
  return (
    <>
      <div tw="mb-4">
        <TabSections />
      </div>
    </>
  );
}
