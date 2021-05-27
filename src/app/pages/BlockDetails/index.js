import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";

// Components
import { Text } from "src/app/components/Text";
import { BlockDetailsCard } from "./components/BlockDetailsCard";
import { BlockDetailsTable } from "./components/BlockDetailsTable";
import { useBlockDetails, useBlockSlice } from "src/state/block/hooks";

export function BlockDetailsPage() {
  useBlockSlice();
  const { t } = useTranslation();
  const { id } = useParams();
  const { isFetchingBlockDetails, blockDetails } = useBlockDetails();

  return (
    <>
      <Wrapper>
        <HeadWrapper>
          <Heading>{t("blockDetails.title")}</Heading>
          <Heading tw="text-textSecondary! ml-4">#{id}</Heading>
        </HeadWrapper>

        <BlockDetailsCard
          loading={isFetchingBlockDetails}
          blockId={id}
          data={blockDetails?.length ? blockDetails[0] : null}
        />

        {!isFetchingBlockDetails && blockDetails && (
          <Heading tw="mt-8 lg:mt-12">{t("blockDetails.title")}</Heading>
        )}
        {!isFetchingBlockDetails && blockDetails && (
          <BlockDetailsTable data={[1, 2, 3]} />
        )}
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`mb-4`;
const HeadWrapper = tw.div`flex flex-wrap items-center`;
const Heading = tw(Text)`text-base lg:text-lg mb-5`;
