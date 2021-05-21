import React from "react";
import { isEmpty } from "lodash";

// Components
import { Table, TableContainer } from "src/app/components/Table";
import { Pagination } from "src/app/components/Pagination";
import { TableHeaderRows, TableBodyRows } from "./components";

// Redux
import { usePagination } from "src/hooks/usePagination";
import { useBlockList } from "src/state/block/hooks";

export const BlockTable = React.memo(function () {
  const { current, pParams, onChange } = usePagination();
  const { isLoading, blockList } = useBlockList(pParams);

  return (
    <>
      <TableContainer>
        <Table>
          <TableHeaderRows />
          <TableBodyRows isLoading={isLoading} data={blockList} />
        </Table>
      </TableContainer>
      {!isEmpty(blockList) && (
        <Pagination
          current={current}
          total={blockList?.length + 10}
          onChange={onChange}
        />
      )}
    </>
  );
});
