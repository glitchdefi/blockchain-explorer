import React, { useState } from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

// Components
import { Text } from "src/app/components/Text";
import { AllAccountsTable } from "./components/AllAccountsTable";
import { useAddressList, useAddressSlice } from "src/state/address/hooks";

export function AllAccountsPage() {
  useAddressSlice();
  const { t } = useTranslation();
  const [params, setParams] = useState();

  const { isFetchingAddressList, data, total } = useAddressList(params);

  return (
    <>
      <Wrapper>
        <Text bold tw="text-lg">
          {t("common.all_accounts")}
        </Text>
        <div tw="mt-4">
          <AllAccountsTable
            loading={isFetchingAddressList}
            total={total}
            data={data}
            pageInfo={params}
            onChange={(p) => setParams(p)}
          />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`mt-16`;
