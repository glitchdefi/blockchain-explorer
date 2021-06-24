import React from "react";
import tw, { css, theme } from "twin.macro";
import { useTranslation } from "react-i18next";
import { isEmpty } from "lodash";

// Utils
import { formatAmount, formatWei } from "src/utils/numbers";

// Components
import { TableContainer as Container } from "src/app/components/Table";
import { TabPanel as Card } from "src/app/components/Tab/Horizontal";
import { InfoRow } from "src/app/components/InfoRow";
// import { Link } from "src/app/components/Link";
import { Spinner } from "src/app/components/LoadingIndicator/Spinner";
import { Empty } from "src/app/components/Empty";
import { LoadingPage } from "src/app/components/LoadingIndicator/LoadingPage";
import {
  D_FOR_DETAIL,
  formatDateTimeUTC,
  formatTimeAgo,
} from "src/utils/dates";
import { useProducerDetails } from "src/state/producer/hooks";

export const BlockDetailsCard = React.memo(({ loading, blockHeight, data }) => {
  const { t } = useTranslation();
  const {
    block_size,
    total_txs,
    proposer_address,
    height,
    time,
    hash,
    reward,
  } = data || {};
  const { producerDetails } = useProducerDetails(proposer_address);
  const { name } = producerDetails || {};

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
            value={formatAmount(height)}
            dataTip={t("blockDetails.height_tip")}
          />

          <InfoRow
            label={t("common.timeStamp")}
            value={`${formatTimeAgo(time)} (${formatDateTimeUTC(
              time,
              D_FOR_DETAIL
            )} +UTC)`}
            dataTip={t("blockDetails.time_tip")}
          />

          <InfoRow
            isCopy={name}
            label={t("blockDetails.produced_by")}
            value={
              name || (
                <Spinner
                  tw="mt-1"
                  size="12px"
                  stroke={theme`colors.textSecondary`}
                />
              )
            }
            copyValue={proposer_address}
            dataTip={t("blockDetails.producer_tip")}
          />

          <InfoRow
            label={t("common.total_txs")}
            value={formatAmount(total_txs)}
            dataTip={t("blockDetails.txs_tip")}
          />

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
            value={`${formatAmount(block_size)} bytes`}
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
