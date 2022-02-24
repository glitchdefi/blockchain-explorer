import React, { useState } from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";
import { useHistory, useParams } from "react-router";

import {
  useBlockDetails,
  useBlockSlice,
  useBlockTxs,
  useFinalizedBlock,
} from "src/state/block/hooks";
import { useProducerSlice } from "src/state/producer/hooks";
import { useAllGlitchInfo, usePriceSlice } from "src/state/price/hooks";
import { useFinalizedBlockSocket } from "src/services/socket/hooks/useFinalizedBlockSocket";

// Components
import { Text } from "src/app/components/Text";
import { BlockDetailsCard } from "./components/BlockDetailsCard";
import { LeftArrowIcon } from "src/app/components/Svg/Icons";
import { Button } from "src/app/components/Button";
import {
  TabContainer,
  Tabs,
  Tab,
  TabPanel,
} from "src/app/components/Tab/Horizontal";
import { TransactionsTable } from "../Transactions/components/TransactionsTable";
import { LogsTable } from "./components/LogsTable";

export function BlockDetailsPage() {
  useBlockSlice();
  useProducerSlice();
  usePriceSlice();
  useFinalizedBlockSocket();

  const [params, setParams] = useState();
  const { t } = useTranslation();
  const { height } = useParams();
  const history = useHistory();
  const { isFetchingBlockDetails, blockDetails } = useBlockDetails(height);
  const { isFetchingBlockTxs, data, total } = useBlockTxs(height, params);
  const { allGlitchInfo } = useAllGlitchInfo();
  const { current_price } = allGlitchInfo || {};

  return (
    <>
      <Wrapper>
        <HeadWrapper>
          <Button tw="p-0 pr-3" onClick={() => history.push("/blocks")}>
            <LeftArrowIcon />
          </Button>
          <Heading bold>{t("blockDetails.title")}</Heading>
        </HeadWrapper>

        <BlockDetailsCard
          loading={isFetchingBlockDetails}
          blockHeight={height}
          data={blockDetails}
          currentPrice={current_price}
        />

        <Heading bold tw="mt-8 lg:mt-16">
          {`${t("blockDetails.include_in_block")} #${height}`}
        </Heading>

        <TabContainer>
          <Tabs tw="grid-cols-2 lg:grid-cols-4">
            <Tab evtKey="transactions">{t("common.transactions")}</Tab>
            <Tab evtKey="logs">{t("common.logs")}</Tab>
          </Tabs>

          <TabPanel evtKey="transactions">
            <TransactionsTable
              showBlockCol={false}
              loading={isFetchingBlockTxs}
              data={data}
              total={total}
              onChange={(p) => setParams(p)}
            />
          </TabPanel>
          <TabPanel evtKey="logs">
            <LogsTable data={[1, 2, 3, 4, 5]} />
          </TabPanel>
        </TabContainer>
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`mt-16`;
const HeadWrapper = tw.div`flex flex-wrap items-center mt-8`;
const Heading = tw(Text)`text-base lg:text-lg`;
