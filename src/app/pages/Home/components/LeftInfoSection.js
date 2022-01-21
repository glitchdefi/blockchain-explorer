import React from "react";
import tw, { css, theme } from "twin.macro";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { InfoItem } from "./InfoItem";
import { Text } from "src/app/components/Text";
import {
  HeadBlockIcon,
  TotalAccountIcon,
  TransactionIcon,
} from "src/app/components/Svg/Icons";
import { DailyTxnCount } from "./Charts/DailyTxnCount";
import { DailyNewAccount } from "./Charts/DailyNewAccount";
import { DailyAverageBlockTime } from "./Charts/DailyAverageBlockTime";

export const LeftInfoSection = React.memo(() => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Flex>
        <Box>
          <InfoItem
            icon={<TransactionIcon />}
            title={t("common.transactions")}
            tooltipLabel="View transactions"
            value={10000000}
          />
        </Box>

        <Box>
          <InfoItem
            icon={<TotalAccountIcon />}
            title={t("homePage.active_accounts")}
            tooltipLabel="View all accounts"
            value={100000}
          />
        </Box>

        <Box className="finalized-block-box">
          <InfoItem
            icon={<HeadBlockIcon />}
            title={t("homePage.finalized_block")}
            tooltipLabel="View blocks"
            value={100000}
          />
        </Box>
      </Flex>

      <Flex className="charts-section">
        <Box>
          <Text size={theme`fontSize.sm`} color={theme`colors.textColor1`} bold>
            {t("homePage.daily_txn_count")}
          </Text>

          <div tw="flex mt-4 h-32">
            <DailyTxnCount />
          </div>
        </Box>

        <Box>
          <Text size={theme`fontSize.sm`} color={theme`colors.textColor1`} bold>
            {t("homePage.daily_new_account")}
          </Text>

          <div tw="flex mt-4 h-32">
            <DailyNewAccount />
          </div>
        </Box>

        <Box className="daily-average-blocktime-chart">
          <Text size={theme`fontSize.sm`} color={theme`colors.textColor1`} bold>
            {t("homePage.daily_average_blocktime")}
          </Text>

          <div tw="flex mt-4 h-32">
            <DailyAverageBlockTime />
          </div>
        </Box>
      </Flex>
    </Wrapper>
  );
});

const Wrapper = styled.div(() => [
  css`
    background-color: ${theme`colors.color1`};
    height: 100%;

    .finalized-block-box,
    .daily-average-blocktime-chart {
      border-right: 0px;
    }

    .charts-section {
      border-bottom: 0px;
    }
  `,
]);

const Flex = styled.div(() => [
  css`
    border-bottom: 1px solid ${theme`colors.color3`};
  `,
  tw`py-6 flex flex-col items-center md:flex-row`,
]);

const Box = styled.div(() => [
  css`
    @media (min-width: 768px) {
      border-right: 1px solid ${theme`colors.color3`};
    }
  `,
  tw`flex flex-col flex-1 w-full mb-4 md:mb-0 px-6 py-2`,
]);
