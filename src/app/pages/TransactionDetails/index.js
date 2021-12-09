import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import "twin.macro";

import { useTxSlice } from "src/state/transaction/hooks";
import { usePriceSlice } from "src/state/price/hooks";

// Components
import { Text } from "src/app/components/Text";
import { Button } from "src/app/components/Button";
import { LeftArrowIcon } from "src/app/components/Svg/Icons";
import { OverviewCard } from "../BlockDetails/components/OverviewCard";
import { InfoDetailCard } from "./components/InfoDetailCard";

export function TransactionDetailsPage() {
  useTxSlice();
  usePriceSlice();
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <>
      <div tw="mt-16">
        <div tw="flex items-center mt-8">
          <Button tw="p-0 pr-3" onClick={() => history.push("/txs")}>
            <LeftArrowIcon />
          </Button>
          <Text bold tw="text-base lg:text-lg">
            {t("transactionDetails.title")}
          </Text>
        </div>

        <OverviewCard tw="mt-4" />
        <InfoDetailCard />
      </div>
    </>
  );
}
