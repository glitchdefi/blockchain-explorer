import React from "react";
import { useParams } from "react-router";
import "twin.macro";

// Hooks
import { useAddressDetails, useAddressSlice } from "src/state/address/hooks";

// Components
import { Grid } from "src/app/components/Grid";
import { InfoUser } from "./components/InfoUser";
import { OverviewCard } from "./components/OverviewCard";
import { MoreInfoCard } from "./components/MoreInfoCard";
import { TabSections } from "./components/TabSections";

export function AddressDetailsPage() {
  useAddressSlice();
  const { address } = useParams();
  const { isFetchingAddressDetails, addressDetails } =
    useAddressDetails(address);

  return (
    <>
      <InfoUser address={address} data={addressDetails}/>
      <Grid cols={2} tw="mt-6 mb-12">
        <OverviewCard
          loading={isFetchingAddressDetails}
          data={addressDetails}
        />
        <MoreInfoCard loading={isFetchingAddressDetails} />
      </Grid>
      <TabSections address={address} />
    </>
  );
}
