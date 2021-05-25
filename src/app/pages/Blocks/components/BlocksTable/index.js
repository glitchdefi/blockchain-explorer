import React from "react";
import { isEmpty } from "lodash";
import "twin.macro";

// Components
import { Table, TableContainer } from "src/app/components/Table";
import { Pagination } from "src/app/components/Pagination";
import { TableHeaderRows, TableBodyRows } from "./components";

// Hooks
import { usePagination } from "src/hooks/usePagination";
import { useBlockList } from "src/state/block/hooks";
import { TabPanel } from "src/app/components/Tab/Horizontal";

export const BlocksTable = React.memo(() => {
  const { current, pParams, onChange } = usePagination();
  const { isLoading, blockList } = useBlockList(pParams);

  return (
    <TabPanel tw="mt-5">
      <TableContainer tw="mb-6">
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
    </TabPanel>
  );
});
