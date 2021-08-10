import React from "react";
import tw, { css, theme, styled } from "twin.macro";
import { useTranslation } from "react-i18next";
import { isEmpty } from "lodash";

// Utils
import { formatDateTimeUTC, formatTimeAgo, FORMAT_2 } from "src/utils/dates";
import { formatDollarAmount, formatNumber, formatWei } from "src/utils/numbers";

// Hooks
import { useProducerDetails } from "src/state/producer/hooks";

// Components
import { InfoRow } from "src/app/components/InfoRow";
import { Spinner } from "src/app/components/LoadingIndicator/Spinner";
import { Empty } from "src/app/components/Empty";
import { LoadingPage } from "src/app/components/LoadingIndicator/LoadingPage";
import { ValueWithPrefix } from "src/app/components/ValueWithPrefix";
import { Text } from "src/app/components/Text";
import { OverviewCard } from "../OverviewCard";
import { BlockNavigation } from "../BlockNavigation";

export const BlockDetailsCard = React.memo(
  ({ loading, currentPrice, blockHeight, data }) => {
    const { t } = useTranslation();
    const {
      block_size,
      num_txs,
      proposer_address,
      height,
      time,
      hash,
      reward,
      epoch,
      slot,
    } = data || {};
    const { producerDetails } = useProducerDetails(proposer_address);
    const { name } = producerDetails || {};
    const rewardToUsd = formatWei(reward) * currentPrice;
    
    const getContent = () => {
      if (loading)
        return (
          <div css={[cardStyles]}>
            <LoadingPage title={`Loading Block #${blockHeight}`} />
          </div>
        );

      if (!loading && isEmpty(data))
        return (
          <div css={[cardStyles]}>
            <Empty
              title={`${t("blockDetails.empty", { height: blockHeight })}`}
            />
          </div>
        );
      return (
        <>
          <BlockNavigation currentBlock={height} />
          <InfoRow
            isCopy={true}
            label={t("blockDetails.hash")}
            customValueComp={<Text color={theme`colors.primary`}>{hash}</Text>}
            dataTip={t("blockDetails.hash_tip")}
          />

          <InfoRow
            label={t("blockDetails.block")}
            value={formatNumber(height)}
            dataTip={t("blockDetails.height_tip")}
          />

          <InfoRow
            label={t("blockDetails.epoch_slot")}
            value={`${formatNumber(epoch)} / ${slot}`}
            dataTip={t("blockDetails.epoch_slot_tip")}
          />

          <InfoRow
            label={t("common.timeStamp")}
            value={`${formatTimeAgo(time)} • (${formatDateTimeUTC(
              time,
              FORMAT_2
            )} +UTC)`}
            dataTip={t("blockDetails.time_tip")}
          />

          <InfoRow
            label={t("blockDetails.validator")}
            value={
              name || (
                <Spinner tw="mt-1" size="12px" stroke={theme`colors.color2`} />
              )
            }
            dataTip={t("blockDetails.validator_tip")}
          />

          <InfoRow
            label={t("common.total_txs")}
            value={formatNumber(num_txs)}
            dataTip={t("blockDetails.txs_tip")}
          />

          <InfoRow
            label={t("blockDetails.block_reward")}
            customValueComp={
              <ValueWithPrefix
                value={formatWei(reward)}
                usd={`${rewardToUsd}`}
              />
            }
            dataTip={t("blockDetails.reward_tip")}
          />

          <InfoRow
            label={t("common.size")}
            customValueComp={
              <ValueWithPrefix
                value={formatNumber(block_size)}
                prefix="bytes"
              />
            }
            dataTip={t("blockDetails.size_tip")}
          />
        </>
      );
    };

    return (
      <>
        <OverviewCard />
        <Wrapper>{getContent()}</Wrapper>
      </>
    );
  }
);

export const Wrapper = styled.div(() => [
  tw`w-full p-6 bg-color1`,
  css`
    border: 1px solid ${theme`colors.color2`};
  `,
]);
const cardStyles = css`
  min-height: 280px;
  align-items: center;
  justify-content: center;
  display: flex;
`;
