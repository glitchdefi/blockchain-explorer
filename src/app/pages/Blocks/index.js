import React, { useState } from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

// Hooks
import { useBlockSlice, useBlockList } from "src/state/block/hooks";

// Components
import { Text } from "src/app/components/Text";
import { BlocksTable } from "./components/BlocksTable";

export function BlocksPage() {
  useBlockSlice();
  const { t } = useTranslation();
  const [params, setParams] = useState();
  const { isLoading, data, total } = useBlockList(params);

  return (
    <>
      <Wrapper>
        <Text bold tw="text-lg">{t("common.blocks")}</Text>
        <div tw="mt-4">
          <BlocksTable
            loading={isLoading}
            total={total}
            data={data}
            onChange={(p) => setParams(p)}
          />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`mt-16`;
