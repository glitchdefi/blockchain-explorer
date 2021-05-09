import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

// Components
import { Text } from "src/app/components/Text";
import { BlockDetailsCard } from "./components/BlockDetailsCard";
import { BlockDetailsTable } from "./components/BlockDetailsTable";

export function BlockDetailsPage() {
  const { t } = useTranslation();

  return (
    <>
      <Wrapper>
        <HeadWrapper>
          <Heading>{t("blockDetails.title")}</Heading>
          <Heading tw="text-textSecondary! ml-4">#111111</Heading>
        </HeadWrapper>

        <BlockDetailsCard />

        <Heading tw="mt-8 lg:mt-12">{t("blockDetails.title")}</Heading>
        <BlockDetailsTable data={[1, 2, 3]} />
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`mb-4`;
const HeadWrapper = tw.div`flex flex-wrap items-center`;
const Heading = tw(Text)`text-base lg:text-lg mb-5`;
