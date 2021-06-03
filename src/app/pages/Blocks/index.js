import React, { useState } from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

// Hooks
import { useBlockSlice, useBlockList } from "src/state/block/hooks";

// Components
import { Text } from "src/app/components/Text";
import { BlocksTable } from "./components/BlocksTable";
import { TabPanel } from "src/app/components/Tab/Horizontal";

export function BlocksPage() {
  useBlockSlice();
  const { t } = useTranslation();
  const [params, setParams] = useState();
  const { isLoading, data, total } = useBlockList(params);

  return (
    <>
      <Wrapper>
        <Text tw="text-lg">{t("common.blocks")}</Text>
        <TabPanel tw="mt-5">
          <BlocksTable
            loading={isLoading}
            total={total}
            data={data}
            onChange={(p) => setParams(p)}
          />
        </TabPanel>
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`mb-4`;
