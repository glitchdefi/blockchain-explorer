import React, { useState } from "react";
import { useHistory } from "react-router";
import { DEFAULT_PAGE_SIZE_WS } from "src/constants";

// Hooks
import { useTxList } from "src/state/transaction/hooks";

// Components
import { TransactionsTable } from "src/app/pages/Transactions/components/TransactionsTable";
import { ViewAllButton } from "../ViewAllButton";
import { useTranslation } from "react-i18next";

export function LatestTxnsPanel() {
  const history = useHistory();
  const [params, setParams] = useState();
  const { t } = useTranslation();
  const { isLoading, data } = useTxList(params);

  return (
    <>
      <TransactionsTable
        loading={isLoading}
        animation={true}
        data={data}
        onChange={(p) => setParams(p)}
        pageSize={DEFAULT_PAGE_SIZE_WS}
        showPagination={false}
      />
      <ViewAllButton
        title={t("homePage.view_all_txs")}
        onClick={() => history.push("/txs")}
      />
    </>
  );
}
