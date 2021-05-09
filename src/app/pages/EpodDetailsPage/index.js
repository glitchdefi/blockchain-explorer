import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

// Components
import { Text } from "src/app/components/Text";
import { EpodDetailsCard } from "./components/EpodDetailsCard";
import { EpodDetailsTable } from "./components/EpodDetailsTable";

export function EpodDetailsPage() {
  const { t } = useTranslation();

  return (
    <>
      <Wrapper>
        <HeadWrapper>
          <Heading>{t("epodDetails.title")}</Heading>
          <Heading tw="text-textSecondary! ml-4">#111111</Heading>
        </HeadWrapper>

        <EpodDetailsCard />

        <Heading tw="mt-8 lg:mt-12">{t("common.blocks")}</Heading>
        <EpodDetailsTable />
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`mb-4`;
const HeadWrapper = tw.div`flex flex-wrap items-center mb-4`;
const Heading = tw(Text)`text-base lg:text-lg`;
