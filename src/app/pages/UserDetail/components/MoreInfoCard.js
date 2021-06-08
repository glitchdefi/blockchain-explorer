import React from "react";
import { useTranslation } from "react-i18next";
import "twin.macro";

// Components
import { Card, Wrapper, Block, Text } from "./OverviewCard";
import { Skeleton } from "src/app/components/Skeleton";

export function MoreInfoCard({ loading }) {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Card>
        <Text tw="text-base font-bold">{t("userDetails.more_info")}</Text>
        <Block tw="mt-6">
          <Text tw="w-1/4 mb-1 lg:mb-0">{t("userDetails.name_tag")}</Text>
          {loading ? (
            <Skeleton tw="flex-grow" animation="waves" />
          ) : (
            <Text tw="text-primary!">--</Text>
          )}
        </Block>
        <Block>
          <Text tw="w-1/4 mb-1 lg:mb-0">{t("userDetails.mined")}</Text>
          {loading ? (
            <Skeleton tw="flex-grow" animation="waves" />
          ) : (
            <Text>--</Text>
          )}
        </Block>
      </Card>
    </Wrapper>
  );
}
