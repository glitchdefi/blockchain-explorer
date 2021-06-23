import React, { useState } from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
// Utils
import { formatNumber } from "src/utils/numbers";
// Components
import { Text } from "src/app/components/Text";
import { TabPanel } from "src/app/components/Tab/Horizontal";
import { BlockDetailsCard } from "./components/BlockDetailsCard";
import {
  useBlockDetails,
  useBlockSlice,
  useBlockTxs,
} from "src/state/block/hooks";
import { TransactionsTable } from "../Transactions/components/TransactionsTable";

export function BlockDetailsPage() {
  useBlockSlice();
  const [params, setParams] = useState();
  const { t } = useTranslation();
  const { height } = useParams();
  const { isFetchingBlockDetails, blockDetails } = useBlockDetails(height);
  const { isFetchingBlockTxs, data, total } = useBlockTxs(height, params);

  return (
    <>
      <Wrapper>
        <HeadWrapper>
          <Heading>{t("blockDetails.title")}</Heading>
          <Heading tw="text-textSecondary! ml-4">#{height}</Heading>
        </HeadWrapper>

        <BlockDetailsCard
          loading={isFetchingBlockDetails}
          blockHeight={height}
          data={blockDetails}
        />

        <Heading tw="mt-8 lg:mt-12">{t("common.transactions")}</Heading>

        <TabPanel>
          <TransactionsTable
            loading={isFetchingBlockTxs}
            data={data}
            total={total}
            onChange={(p) => setParams(p)}
          />
        </TabPanel>
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`mb-4`;
const HeadWrapper = tw.div`flex flex-wrap items-center`;
const Heading = tw(Text)`text-base lg:text-lg mb-5`;
