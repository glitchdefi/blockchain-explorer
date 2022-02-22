import React from "react";
import tw, { css, theme } from "twin.macro";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { useDashboardDaily, useDashboardData } from "src/state/dashboard/hooks";
import { useFinalizedBlock } from "src/state/block/hooks";

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
  const history = useHistory();
  const { t } = useTranslation();
  const { dashboardData } = useDashboardData();
  const { isDashboardDailyFetching, chartsData } = useDashboardDaily();
  const { finalizedBlock } = useFinalizedBlock();
  const { active_account_count, tx_count } = dashboardData || {};
  const { txCount, dailyNewAccount, dailyAverageBlockTime } = chartsData || {};

  return (
    <Wrapper>
      <Flex>
        <Box>
          <InfoItem
            icon={<TransactionIcon />}
            title={t("common.transactions")}
            tooltipLabel="View transactions"
            value={tx_count}
            onValueClick={() => history.push("/txs")}
          />
        </Box>

        <Box>
          <InfoItem
            icon={<TotalAccountIcon />}
            title={t("homePage.active_accounts")}
            tooltipLabel="View all accounts"
            value={active_account_count}
            onValueClick={() => history.push("/accounts")}
          />
        </Box>

        <Box className="finalized-block-box">
          <InfoItem
            icon={<HeadBlockIcon />}
            title={t("homePage.finalized_block")}
            tooltipLabel="View blocks"
            value={finalizedBlock}
            onValueClick={() => history.push("/blocks")}
          />
        </Box>
      </Flex>

      <Flex className="charts-section">
        <Box>
          <Text size={theme`fontSize.sm`} color={theme`colors.textColor1`} bold>
            {t("homePage.daily_txn_count")}
          </Text>

          <div tw="flex mt-4 h-32">
            <DailyTxnCount loading={isDashboardDailyFetching} data={txCount} />
          </div>
        </Box>

        <Box>
          <Text size={theme`fontSize.sm`} color={theme`colors.textColor1`} bold>
            {t("homePage.daily_new_account")}
          </Text>

          <div tw="flex mt-4 h-32">
            <DailyNewAccount
              loading={isDashboardDailyFetching}
              data={dailyNewAccount}
            />
          </div>
        </Box>

        <Box className="daily-average-blocktime-chart">
          <Text size={theme`fontSize.sm`} color={theme`colors.textColor1`} bold>
            {t("homePage.daily_average_blocktime")}
          </Text>

          <div tw="flex mt-4 h-32">
            <DailyAverageBlockTime
              loading={isDashboardDailyFetching}
              data={dailyAverageBlockTime}
            />
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
