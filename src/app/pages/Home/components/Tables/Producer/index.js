import React from "react";

import { usePagination } from "src/hooks/usePagination";

// Components
import { Table, TableContainer } from "src/app/components/Table";
import { Pagination } from "src/app/components/Pagination";
import { TableBodyRows, TableHeaderRows } from "./components";
import { useProducerList } from "src/state/producer/hooks";

export function ProducerTable() {
  const { current, pParams, onChange } = usePagination();
  const { isFetchingProducerList, producerList } = useProducerList(pParams);

  return (
    <>
      <TableContainer>
        <Table>
          <TableHeaderRows />
          <TableBodyRows
            data={producerList}
            isLoading={isFetchingProducerList}
          />
        </Table>
      </TableContainer>
      <Pagination current={current} total={5} onChange={onChange} />
    </>
  );
}
