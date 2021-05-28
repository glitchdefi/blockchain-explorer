import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

// Hooks
import { useBlockSlice } from "src/state/block/hooks";

// Components
import { Text } from "src/app/components/Text";
import { BlocksTable } from "./components/BlocksTable";

export function BlocksPage() {
  const { t } = useTranslation();
  useBlockSlice();

  return (
    <>
      <Wrapper>
        <Text tw="text-lg">{t("common.blocks")}</Text>
        <BlocksTable />
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`mb-4`;
