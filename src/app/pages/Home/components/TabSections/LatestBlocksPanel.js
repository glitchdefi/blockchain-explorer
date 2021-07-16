import React, { useState } from "react";
import { useHistory } from "react-router";
import { DEFAULT_PAGE_SIZE_WS } from "src/constants";

// Hooks
import { useBlockList } from "src/state/block/hooks";

// Components
import { BlocksTable } from "src/app/pages/Blocks/components/BlocksTable";
import { ViewAllButton } from "../ViewAllButton";
import { useTranslation } from "react-i18next";

export function LatestBlocksPanel() {
  const history = useHistory();
  const [params, setParams] = useState();
  const { t } = useTranslation();
  const { isLoading, data, total } = useBlockList(params);

  return (
    <>
      <BlocksTable
        loading={isLoading}
        total={total}
        data={data}
        onChange={(p) => setParams(p)}
        showPagination={false}
        customPageSize={DEFAULT_PAGE_SIZE_WS}
      />
      <ViewAllButton
        title={t("homePage.show_all_blocks")}
        onClick={() => history.push("/blocks")}
      />
    </>
  );
}
