import React from "react";
import "twin.macro";

// Components
import { Table, TableContainer } from "../index";
import { TableBodyRows, TableHeaderRows } from "./components";
import { Pagination } from "../../Pagination";
import { useTxList } from "src/state/transaction/hooks";
import { isEmpty } from "lodash";

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
