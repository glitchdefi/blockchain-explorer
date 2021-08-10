import React from "react";
import { useTranslation } from "react-i18next";
import tw from "twin.macro";

import { Text } from "src/app/components/Text";
import { Button } from "src/app/components/Button";

export function Header() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div tw="flex items-center">
        <Text tw="text-base lg:text-lg">
          {t("votePage.selected_producers")}
        </Text>
        <Text tw="text-base lg:text-lg ml-3">0/30</Text>
      </div>

      <VoteButton>
        <Text tw="font-bold uppercase">{t("common.vote")}</Text>
      </VoteButton>
    </Wrapper>
  );
}

const Wrapper = tw.div`flex flex-wrap justify-between items-center`;
const VoteButton = tw(
  Button
)`px-10 py-2.5`;
