import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

// Components
import { Card as CardBase } from "src/app/components/Card";
import { Text as TextBase } from "src/app/components/Text";
import { TokenDropdown } from "./TokenDropdown";

export function OverviewCard() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Card>
        <Text tw="text-base font-bold">{t("common.overview")}</Text>
        <Block tw="mt-6">
          <Text tw="w-1/4 mb-1 lg:mb-0">{t("common.balance")}</Text>
          <Text>88,888,888888 Glitch</Text>
        </Block>
        <Block>
          <Text tw="w-1/4 mb-1 lg:mb-0">{t("common.value")}</Text>
          <Text>$58,888,888</Text>
        </Block>
        <Block>
          <Text tw="w-1/4 mb-1 lg:mb-0">{t("common.token")}</Text>
          <TokenDropdown />
        </Block>
      </Card>
    </Wrapper>
  );
}

export const Wrapper = tw.div`grid grid-cols-1 gap-4`;
export const Card = tw(CardBase)`flex-col items-start p-6`;
export const Block = tw.div`my-2 lg:flex flex-wrap items-center w-full`;
export const Text = tw(TextBase)`text-tiny`;
