import React from "react";

import { usePagination } from "src/hooks/usePagination";

// Components
import { Table, TableContainer } from "src/app/components/Table";
import { Pagination } from "src/app/components/Pagination";
import { TableBodyRows, TableHeaderRows } from "./components";

export function ProducerTable() {
  const { current, pParams, onChange } = usePagination();

  return (
    <>
      <TableContainer>
        <Table>
          <TableHeaderRows />
          <TableBodyRows data={[1, 2, 3]} isLoading={false} />
        </Table>
      </TableContainer>
      <Pagination current={current} total={20} onChange={onChange} />
    </>
  );
}
