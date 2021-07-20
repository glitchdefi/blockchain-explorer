import React, { useState } from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

// Hooks
import { useTxList, useTxSlice } from "src/state/transaction/hooks";

// Components
import { Text } from "src/app/components/Text";
import { TransactionsTable } from "./components/TransactionsTable";

export function TransactionsPage() {
  useTxSlice();
  const { t } = useTranslation();
  const [params, setParams] = useState();
  const { isLoading, data, total } = useTxList(params);

  return (
    <>
      <Wrapper>
        <Text bold tw="text-lg">{t("common.transactions")}</Text>

        <div tw="mt-4">
          <TransactionsTable
            loading={isLoading}
            total={total}
            data={data}
            onChange={(p) => setParams(p)}
          />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`mt-16`;
