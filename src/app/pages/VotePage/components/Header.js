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
        <Text tw="text-16">{t("votePage.selected_producers")}</Text>
        <Text tw="text-16 text-white-70! ml-3">0/30</Text>
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
)`bg-gradient-to-r from-primary to-secondary px-8 py-2`;
