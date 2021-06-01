import React, { useState } from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

// Hooks
import { useTxList, useTxSlice } from "src/state/transaction/hooks";

// Components
import { Text } from "src/app/components/Text";
import { TransactionsTable } from "./components/TransactionsTable";
import { TabPanel } from "src/app/components/Tab/Horizontal";

export function TransactionsPage() {
  useTxSlice();
  const { t } = useTranslation();
  const [params, setParams] = useState();
  const { isLoading, txList } = useTxList(params);

  return (
    <>
      <Wrapper>
        <Text tw="text-lg">{t("common.transactions")}</Text>
        <TabPanel tw="mt-5">
          <TransactionsTable
            loading={isLoading}
            total={txList?.length}
            data={txList}
            onChange={(p) => setParams(p)}
          />
        </TabPanel>
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`mb-4`;
