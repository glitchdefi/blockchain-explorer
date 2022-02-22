import React from "react";
import tw, { css, theme, styled } from "twin.macro";
import { useTranslation } from "react-i18next";
import { isEmpty } from "lodash";

// Utils
import { formatDateTimeUTC, formatTimeAgo, FORMAT_2 } from "src/utils/dates";
import { formatNumber } from "src/utils/numbers";
import { useFinalizedBlock } from "src/state/block/hooks";

// Components
import { InfoRow } from "src/app/components/InfoRow";
import { Empty } from "src/app/components/Empty";
import { LoadingPage } from "src/app/components/LoadingIndicator/LoadingPage";
import { Text } from "src/app/components/Text";
import { OverviewCard } from "../OverviewCard";
import { BlockNavigation } from "../BlockNavigation";

export const BlockDetailsCard = React.memo(({ loading, blockHeight, data }) => {
  const { t } = useTranslation();
  const { finalizedBlock } = useFinalizedBlock();
  const { txNum, index, time, hash, epoch, validator } = data || {};

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
        <BlockNavigation currentBlock={index} nextBlock={finalizedBlock} />
        <InfoRow
          isCopy={true}
          label={t("blockDetails.hash")}
          customValueComp={<Text color={theme`colors.primary`}>{hash}</Text>}
          dataTip={t("blockDetails.hash_tip")}
          copyValue={hash}
        />

        <InfoRow
          label={t("blockDetails.block")}
          value={index}
          dataTip={t("blockDetails.height_tip")}
        />

        <InfoRow
          label={t("blockDetails.epoch_slot")}
          value={`${formatNumber(epoch)}`}
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
          value={validator}
          dataTip={t("blockDetails.validator_tip")}
        />

        <InfoRow
          label={t("common.total_txs")}
          value={formatNumber(txNum)}
          dataTip={t("blockDetails.txs_tip")}
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
});

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
