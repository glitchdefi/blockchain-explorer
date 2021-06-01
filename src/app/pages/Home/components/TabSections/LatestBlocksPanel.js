import React, { useState } from "react";
import { useHistory } from "react-router";
import { DEFAULT_PAGE_SIZE_WS } from "src/constants";

// Hooks
import { useBlockList } from "src/state/block/hooks";

// Components
import { BlocksTable } from "src/app/pages/Blocks/components/BlocksTable";
import { ViewAllButton } from "../ViewAllButton";
import { useLatestBlock } from "src/services/socket/hooks/useLastestBlock";
import { useTranslation } from "react-i18next";

export function LatestBlocksPanel() {
  useLatestBlock();
  const history = useHistory();
  const [params, setParams] = useState();
  const { t } = useTranslation();
  const { isLoading, blockList } = useBlockList(params);

  return (
    <>
      <BlocksTable
        loading={isLoading}
        total={blockList?.length}
        data={blockList}
        onChange={(p) => setParams(p)}
        showPagination={false}
        pageSize={DEFAULT_PAGE_SIZE_WS}
      />
      <ViewAllButton
        title={t('homePage.view_all_blocks')}
        onClick={() => history.push("/blocks")}
      />
    </>
  );
}
