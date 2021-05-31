import React, { useState } from "react";

// Components
import { Table } from "src/app/components/Table";
import { TableBodyRows, TableHeaderRows } from "./components";
import { useProducerList } from "src/state/producer/hooks";

export function ProducerTable() {
  const [params, setParams] = useState();
  const { isFetchingProducerList, producerList } = useProducerList(params);

  return (
    <Table
      loading={isFetchingProducerList}
      total={producerList?.length}
      onChange={(p) => setParams(p)}
    >
      <TableHeaderRows />
      <TableBodyRows data={producerList}/>
    </Table>
  );
}
