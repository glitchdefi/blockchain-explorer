import React from "react";
import tw, { css } from "twin.macro";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { isEmpty } from "lodash";

// Utils
import { formatWei } from "src/utils/numbers";

// Components
import { TableContainer as Container } from "src/app/components/Table";
import { TabPanel as Card } from "src/app/components/Tab/Horizontal";
import { InfoRow } from "src/app/components/InfoRow";
// import { Link } from "src/app/components/Link";
import { Empty } from "src/app/components/Empty";
import { LoadingPage } from "src/app/components/LoadingIndicator/LoadingPage";

export const BlockDetailsCard = React.memo(({ loading, blockHeight, data }) => {
  const { t } = useTranslation();
  const {
    block_size,
    total_txs,
    // proposer_address,
    height,
    time,
    hash,
    reward,
  } = data || {};

  if (loading)
    return (
      <Card css={[cardStyles]}>
        <LoadingPage title={`Loading Block #${blockHeight}`} />
      </Card>
    );

  if (!loading && isEmpty(data))
    return (
      <Card css={[cardStyles]}>
        <Empty title={`${t("blockDetails.empty", { height: blockHeight })}`} />
      </Card>
    );

  return (
    <Container>
      <Card>
        <Wrapper>
          <InfoRow
            label={t("blockDetails.block_height")}
            value={height}
            dataTip={t("blockDetails.height_tip")}
          />

          <InfoRow
            label={t("common.timeStamp")}
            value={`${moment(time).fromNow()} (${moment
              .utc(time)
              .format("MMM-DD-YYYY HH:mm:ss A")} +UTC)`}
            dataTip={t("blockDetails.time_tip")}
          />

          {/* <InfoRow label={t("common.transactions")} value={num_txs} /> */}
          <InfoRow
            label={t("common.total_txs")}
            value={total_txs}
            dataTip={t("blockDetails.txs_tip")}
          />

          {/* <InfoRow
            label={t("blockDetails.produced_by")}
            customValueComp={
              <Link href={`/address/${proposer_address}`} tw="underline">
                {proposer_address}
              </Link>
            }
          /> */}

          <InfoRow
            label={t("blockDetails.block_reward")}
            value={`${formatWei(reward)} GLCH`}
            dataTip={t("blockDetails.reward_tip")}
          />

          {/* <InfoRow
            label={t("common.difficulty")}
            value="4,153,661,732,410,000"
          />

          <InfoRow
            label={t("blockDetails.total_difficulty")}
            value="20,255,456,233,619,604,483,769"
          /> */}

          <InfoRow
            label={t("common.size")}
            value={`${block_size} bytes`}
            dataTip={t("blockDetails.size_tip")}
          />

          <InfoRow
            isCopy={true}
            label={t("blockDetails.hash")}
            value={hash}
            dataTip={t("blockDetails.hash_tip")}
          />
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
