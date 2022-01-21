import React, { useState } from "react";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
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
import { InfoAddressCard } from "./components/InfoAddressCard";
import { TransactionsTable } from "../Transactions/components/TransactionsTable";
import {
  TabContainer,
  Tabs,
  Tab,
  TabPanel,
} from "src/app/components/Tab/Horizontal";
import { BalanceTransferTable } from "src/app/components/Shared/BalanceTransferTable";
import { AuthoredBlocksTable } from "src/app/components/Shared/AuthoredBlocksTable";
import { AccountLifeCycleTable } from "src/app/components/Shared/AccountLifeCycleTable";
import { RolesTable } from "src/app/components/Shared/RolesTable";
import { BalanceHistoryChart } from "src/app/components/Shared/BalanceHistoryChart";
import { LeftArrowIcon } from "src/app/components/Svg/Icons";
import { Button } from "src/app/components/Button";

export function AddressDetailsPage() {
  useAddressSlice();
  usePriceSlice();
  const { t } = useTranslation();
  const history = useHistory();
  const [params, setParams] = useState();
  const { address } = useParams();
  const { isFetchingAddressDetails, addressDetails } =
    useAddressDetails(address);
  const { isFetchingAddressTxs, data, total } = useAddressTxs(address, params);
  const { allGlitchInfo } = useAllGlitchInfo();
  const { current_price } = allGlitchInfo || {};

  return (
    <div tw="mt-16">
      <HeadWrapper>
        <Button tw="p-0 pr-4" onClick={() => history.push("/accounts")}>
          <LeftArrowIcon />
        </Button>
        <Heading bold>Account details</Heading>
      </HeadWrapper>

      <InfoAddressCard
        loading={isFetchingAddressDetails}
        address={address}
        data={addressDetails}
        currentPrice={current_price}
        total={total}
      />

      <div tw="mt-16">
        <Heading tw="mb-2">Included in this Account</Heading>

        <TabContainer>
          <Tabs>
            <Tab evtKey="transactions">{t("common.transactions")}</Tab>
            <Tab evtKey="balance-transfers">Balance transfer</Tab>
            <Tab evtKey="authored-blocks">Authored blocks</Tab>
            <Tab evtKey="account-lifecycle">Authored lifecycle</Tab>
            <Tab evtKey="roles">Roles</Tab>
            <Tab evtKey="balance-history">Balance history</Tab>
          </Tabs>

          <TabPanel evtKey="transactions">
            <TransactionsTable
              showType
              loading={isFetchingAddressTxs}
              data={data}
              total={total}
              onChange={(p) => setParams(p)}
            />
          </TabPanel>
          <TabPanel evtKey="balance-transfers">
            <BalanceTransferTable
              loading={false}
              total={20}
              data={[1, 2, 3, 4, 5, 6]}
            />
          </TabPanel>
          <TabPanel evtKey="authored-blocks">
            <AuthoredBlocksTable
              loading={false}
              total={20}
              data={[1, 2, 3, 4, 5, 6]}
            />
          </TabPanel>
          <TabPanel evtKey="account-lifecycle">
            <AccountLifeCycleTable
              loading={false}
              total={20}
              data={[1, 2, 3, 4, 5, 6]}
            />
          </TabPanel>
          <TabPanel evtKey="roles">
            <RolesTable loading={false} total={20} data={[1, 2, 3, 4, 5, 6]} />
          </TabPanel>
          <TabPanel evtKey="balance-history">
            <BalanceHistoryChart />
          </TabPanel>
        </TabContainer>
      </div>
    </div>
  );
}

const Heading = tw(Text)`text-base lg:text-lg`;
const HeadWrapper = tw.div`flex flex-wrap items-center mt-8`;
