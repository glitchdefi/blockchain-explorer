import React from "react";
import { useTranslation } from "react-i18next";
import "twin.macro";

// Components
import { Card, Wrapper, Block, Text } from "./OverviewCard";

export function MoreInfoCard() {
  const { t } = useTranslation();
  
  return (
    <Wrapper>
      <Card>
        <Text tw="text-14 font-bold">{t("userDetails.more_info")}</Text>
        <Block tw="mt-6">
          <Text tw="w-1/4 mb-1 lg:mb-0">{t("userDetails.name_tag")}</Text>
          <Text tw="text-primary!">julian1234abc</Text>
        </Block>
        <Block>
          <Text tw="w-1/4 mb-1 lg:mb-0">{t("userDetails.mined")}</Text>
          <Text>1,671,306 Blocks</Text>
        </Block>
      </Card>
    </Wrapper>
  );
}
