import React from "react";
import { Page } from "src/app/layouts/Page";
import tw from "twin.macro";

// Components
import { InfoUser } from "./components/InfoUser";
import { OverviewCard } from "./components/OverviewCard";
import { MoreInfoCard } from "./components/MoreInfoCard";
import { TabSections } from "./components/TabSections";

export function UserDetailPage() {
  return (
    <>
      <InfoUser />
      <GridWrapper>
        <OverviewCard />
        <MoreInfoCard />
      </GridWrapper>
      <TabSections />
    </>
  );
}

const GridWrapper = tw.div`grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 mb-3`;
