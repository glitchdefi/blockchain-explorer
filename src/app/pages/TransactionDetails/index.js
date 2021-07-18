import React from "react";
import { useTranslation } from "react-i18next";
import "twin.macro";

import { useTxSlice } from "src/state/transaction/hooks";
import { usePriceSlice } from "src/state/price/hooks";

// Components
import { Text } from "src/app/components/Text";
import { Breadcrumb } from "src/app/components/Breadcrumb";
import { OverviewCard } from "../BlockDetails/components/OverviewCard";
import { InfoDetailCard } from "./components/InfoDetailCard";

export function TransactionDetailsPage() {
  useTxSlice();
  usePriceSlice();
  const { t } = useTranslation();

  return (
    <>
      <div tw="mt-16">
        <Breadcrumb>
          <Breadcrumb.Link to="/txs">Transactions</Breadcrumb.Link>
          <Breadcrumb.Text>Transaction details</Breadcrumb.Text>
        </Breadcrumb>

        <Text tw="text-base lg:text-lg mt-8">
          {t("transactionDetails.title")}
        </Text>
        <OverviewCard tw="mt-4" />
        <InfoDetailCard />
      </div>
    </>
  );
}
