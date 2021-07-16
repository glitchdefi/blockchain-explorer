import React, { useState } from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";

import {
  useBlockDetails,
  useBlockSlice,
  useBlockTxs,
} from "src/state/block/hooks";
import { useProducerSlice } from "src/state/producer/hooks";

// Components
import { Text } from "src/app/components/Text";
import { Breadcrumb } from "src/app/components/Breadcrumb";
import { BlockDetailsCard } from "./components/BlockDetailsCard";
import { TransactionsTable } from "../Transactions/components/TransactionsTable";

export function BlockDetailsPage() {
  useBlockSlice();
  useProducerSlice();
  const [params, setParams] = useState();
  const { t } = useTranslation();
  const { height } = useParams();
  const { isFetchingBlockDetails, blockDetails } = useBlockDetails(height);
  const { isFetchingBlockTxs, data, total } = useBlockTxs(height, params);

  return (
    <>
      <Wrapper>
        <Breadcrumb>
          <Breadcrumb.Link to="/blocks">Blocks</Breadcrumb.Link>
          <Breadcrumb.Text>Block details</Breadcrumb.Text>
        </Breadcrumb>

        <HeadWrapper>
          <Heading>{t("blockDetails.title")}</Heading>
        </HeadWrapper>

        <BlockDetailsCard
          loading={isFetchingBlockDetails}
          blockHeight={height}
          data={blockDetails}
        />

        <Heading tw="mt-8 lg:mt-16">
          {t("blockDetails.transaction_included_in")}{" "}
        </Heading>

        <div tw="mt-4">
          <TransactionsTable
            loading={isFetchingBlockTxs}
            data={data}
            total={total}
            onChange={(p) => setParams(p)}
          />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`mt-16`;
const HeadWrapper = tw.div`flex flex-wrap items-center mt-8`;
const Heading = tw(Text)`text-base lg:text-lg`;
