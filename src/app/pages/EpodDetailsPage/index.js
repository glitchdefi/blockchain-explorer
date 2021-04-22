import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

import { Page } from "src/app/layouts/Page";

// Components
import { Text } from "src/app/components/Text";
import { EpodDetailsCard } from "./components/EpodDetailsCard";
import { EpodDetailsTable } from "./components/EpodDetailsTable";

export function EpodDetailsPage() {
  const { t } = useTranslation();

  return (
    <>
      <Page meta={{}}>
        <Wrapper>
          <HeadWrapper>
            <Heading>{t("epodDetails.title")}</Heading>
            <Heading tw="text-opacity-60! ml-4">#111111</Heading>
          </HeadWrapper>

          <EpodDetailsCard />

          <Heading>{t("common.blocks")}</Heading>
          <EpodDetailsTable />
        </Wrapper>
      </Page>
    </>
  );
}

const Wrapper = tw.div`mb-4`;
const HeadWrapper = tw.div`flex flex-wrap items-center mb-4`;
const Heading = tw(Text)`text-16`;
