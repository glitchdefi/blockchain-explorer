import React from "react";
import "twin.macro";
import { isEmpty } from "lodash";

// Hooks
import { useTxList } from "src/state/transaction/hooks";
import { usePagination } from "src/hooks/usePagination";

// Components
import { Table, TableContainer } from "src/app/components/Table";
import { Pagination } from "src/app/components/Pagination";
import { TableBodyRows, TableHeaderRows } from "./components";
import { TabPanel } from "src/app/components/Tab/Horizontal";

export function TransactionTable() {
  const { current, pParams, onChange } = usePagination();
  const { isLoading, txList } = useTxList(pParams);

  return (
    <TabPanel tw="mt-5">
      <TableContainer tw="mb-6">
        <Table>
          <TableHeaderRows />
          <TableBodyRows isLoading={isLoading} data={txList} />
        </Table>
      </TableContainer>
      {!isEmpty(txList) && (
        <Pagination
          current={current}
          total={txList?.length}
          onChange={onChange}
        />
      )}
    </TabPanel>
  );
}
