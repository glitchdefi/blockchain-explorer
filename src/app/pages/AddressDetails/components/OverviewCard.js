import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

// Hooks
import { useAllGlitchInfo } from "src/state/price/hooks";

// Utils
import { formatDollarAmount, formatWei } from "src/utils/numbers";

// Components
import { Card as CardBase } from "src/app/components/Card";
import { Text as TextBase } from "src/app/components/Text";
import { TokenDropdown } from "./TokenDropdown";
import { Skeleton } from "src/app/components/Skeleton";

export function OverviewCard({ loading, data }) {
  const { t } = useTranslation();
  const { allGlitchInfo } = useAllGlitchInfo();
  const { balance } = data || {};
  const { current_price } = allGlitchInfo || {};

  const totalValue =
    balance && current_price
      ? formatDollarAmount(formatWei(balance, false) * current_price, 2, false)
      : "--";

  return (
    <Wrapper>
      <Card>
        <Text tw="text-base font-bold">{t("common.overview")}</Text>
        <Block tw="mt-6">
          <Text tw="w-1/4 mb-1 lg:mb-0">{t("common.balance")}</Text>
          {loading ? (
            <Skeleton tw="flex-grow" animation="waves" />
          ) : (
            <Text>{formatWei(balance)} GLCH</Text>
          )}
        </Block>
        <Block>
          <Text tw="w-1/4 mb-1 lg:mb-0">{t("common.value")}</Text>
          {loading ? (
            <Skeleton tw="flex-grow" animation="waves" />
          ) : (
            <Text>{totalValue}</Text>
          )}
        </Block>
        <Block>
          <Text tw="w-1/4 mb-1 lg:mb-0">{t("common.token")}</Text>
          {loading ? (
            <Skeleton tw="flex-grow h-10" animation="waves" />
          ) : (
            <TokenDropdown />
          )}
        </Block>
      </Card>
    </Wrapper>
  );
}

export const Wrapper = tw.div`grid grid-cols-1 gap-4`;
export const Card = tw(CardBase)`flex-col items-start p-6`;
export const Block = tw.div`my-2 lg:flex flex-wrap items-center w-full`;
export const Text = tw(TextBase)`text-tiny`;
