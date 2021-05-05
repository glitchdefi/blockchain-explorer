import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

// Components
import { Heading } from "../Heading";
import { CardLayout } from "../CardLayout";
import { Text as TextBase } from "../Text";

export function InfoGlitchTokenCard() {
  const { t } = useTranslation();

  return (
    <>
      <Heading>{t("common.glitch")}</Heading>
      <CardLayout>
        <Block>
          <Label>{t("walletPage.total_glitch_balance")}:</Label>
          <Text>julian1234abc</Text>
        </Block>
        <Block>
          <Label>{t("walletPage.total_usd_value")}:</Label>
          <Text>1,671,306 Blocks</Text>
        </Block>
        <Block>
          <Label>{t("walletPage.glitch_value")}:</Label>
          <Text>1,671,306 Blocks</Text>
        </Block>
      </CardLayout>
    </>
  );
}

const Block = tw.div`my-2 lg:flex flex-wrap items-center w-full`;
const Text = tw(TextBase)`text-14`;
const Label = tw(Text)`w-full lg:w-1/4 mb-1 lg:mb-0`;
