import React from "react";
import "twin.macro";

// Components
import { Grid } from "src/app/components/Grid";
import { InfoUser } from "./components/InfoUser";
import { OverviewCard } from "./components/OverviewCard";
import { MoreInfoCard } from "./components/MoreInfoCard";
import { TabSections } from "./components/TabSections";

export function UserDetailPage() {
  return (
    <>
      <InfoUser />
      <Grid cols={2} tw="mt-6 mb-12">
        <OverviewCard />
        <MoreInfoCard />
      </Grid>
      <TabSections />
    </>
  );
}
