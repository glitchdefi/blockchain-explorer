import React from "react";
import "twin.macro";
import { isEmpty } from "lodash";
import { useTxList } from "src/state/transaction/hooks";

// Components
import { Table, TableContainer } from "src/app/components/Table";
import { Pagination } from "src/app/components/Pagination";
import { TableBodyRows, TableHeaderRows } from "./components";

export function TransactionTable() {
  const { isLoading, txList } = useTxList();

  return (
    <>
      <TableContainer>
        <Table>
          <TableHeaderRows />
          <TableBodyRows isLoading={isLoading} data={txList} />
        </Table>
      </TableContainer>
      {!isEmpty(txList) && <Pagination />}
    </>
  );
}
