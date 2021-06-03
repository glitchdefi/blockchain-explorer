import React from "react";
import tw, { css } from "twin.macro";
import { useTranslation } from "react-i18next";
import moment from "moment";

// Components
import { TableContainer as Container } from "src/app/components/Table";
import { TabPanel as Card } from "src/app/components/Tab/Horizontal";
import { InfoRow } from "src/app/components/InfoRow";
import { Link } from "src/app/components/Link";
import { Empty } from "src/app/components/Empty";
import { LoadingPage } from "src/app/components/LoadingIndicator/LoadingPage";

export const BlockDetailsCard = React.memo(({ loading, blockHeight, data }) => {
  const { t } = useTranslation();
  const { block_size, num_txs, proposer_address, height, time, hash } =
    data || {};

  if (loading)
    return (
      <Card css={[cardStyles]}>
        <LoadingPage title={`Loading Block #${blockHeight}`} />
      </Card>
    );

  if (!data)
    return (
      <Card css={[cardStyles]}>
        <Empty title={`${t("blockDetails.empty", { height: blockHeight })}`} />
      </Card>
    );

  return (
    <Container>
      <Card>
        <Wrapper>
          <InfoRow label={t("blockDetails.block_height")} value={height} />

          <InfoRow
            label={t("common.timeStamp")}
            value={`${moment(time).fromNow()} (${moment
              .utc(time)
              .format("MMM-DD-YYYY HH:mm:ss A")} +UTC)`}
          />

          <InfoRow label={t("common.transactions")} value={num_txs} />

          <InfoRow
            label={t("blockDetails.produced_by")}
            customValueComp={
              <Link href={`/address/${proposer_address}`} tw="underline">
                {proposer_address}
              </Link>
            }
          />

          <InfoRow
            label={t("blockDetails.block_reward")}
            value="3.105465374371711284 Ether (2 + 1.105465374371711284)"
          />

          <InfoRow
            label={t("common.difficulty")}
            value="4,153,661,732,410,000"
          />

          <InfoRow
            label={t("blockDetails.total_difficulty")}
            value="20,255,456,233,619,604,483,769"
          />

          <InfoRow label={t("common.size")} value={`${block_size} bytes`} />

          <InfoRow label={t("blockDetails.hash")} value={hash} />
        </Wrapper>
      </Card>
    </Container>
  );
});

export const Wrapper = tw.div`w-full px-1 py-3 lg:pl-6`;
const cardStyles = css`
  .inner {
    min-height: 300px;
    align-items: center;
    justify-content: center;
    display: flex;
  }
`;
