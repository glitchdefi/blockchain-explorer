import React, { useState } from "react";
import { useParams } from "react-router";
import tw from "twin.macro";

// Hooks
import {
  useAddressDetails,
  useAddressSlice,
  useAddressTxs,
} from "src/state/address/hooks";
import { useAllGlitchInfo, usePriceSlice } from "src/state/price/hooks";

// Components
import { Text } from "src/app/components/Text";
import { Breadcrumb } from "src/app/components/Breadcrumb";
import { InfoAddressCard } from "./components/InfoAddressCard";
import { TransactionsTable } from "../Transactions/components/TransactionsTable";

export function AddressDetailsPage() {
  useAddressSlice();
  usePriceSlice();
  const [params, setParams] = useState();
  const { address } = useParams();
  const { isFetchingAddressDetails, addressDetails } =
    useAddressDetails(address);
  const { isFetchingAddressTxs, data, total } = useAddressTxs(address, params);
  const { allGlitchInfo } = useAllGlitchInfo();
  const { current_price } = allGlitchInfo || {};

  return (
    <div tw="mt-16">
      <Breadcrumb>
        <Breadcrumb.Link to="/txs">Transactions</Breadcrumb.Link>
        <Breadcrumb.Link>Transaction details</Breadcrumb.Link>
        <Breadcrumb.Text>Address details</Breadcrumb.Text>
      </Breadcrumb>

      <Heading>Address details</Heading>

      <InfoAddressCard
        loading={isFetchingAddressDetails}
        address={address}
        data={addressDetails}
        currentPrice={current_price}
        total={total}
      />

      <div tw="mt-16">
        <Heading tw="mb-4">Transactions included in this Address</Heading>

        <TransactionsTable
          loading={isFetchingAddressTxs}
          data={data}
          total={total}
          onChange={(p) => setParams(p)}
        />
      </div>
    </div>
  );
}

const Heading = tw(Text)`text-base lg:text-lg mt-8`;
