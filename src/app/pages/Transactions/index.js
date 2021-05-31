import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

// Hooks
import { useTxSlice } from "src/state/transaction/hooks";

// Components
import { Text } from "src/app/components/Text";
import { TransactionsTable } from "./components/TransactionsTable";

export function TransactionsPage() {
  const { t } = useTranslation();
  useTxSlice();

  return (
    <>
      <Wrapper>
        <Text tw="text-lg">{t("common.transactions")}</Text>
        <TransactionsTable />
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`mb-4`;
