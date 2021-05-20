import React, { useState } from "react";
import { isEmpty } from "lodash";

// Components
import { Table, TableContainer } from "../index";
import { TableHeaderRows } from "./components/TableHeaderRows";
import { TableBodyRows } from "./components";
import { Pagination } from "../../Pagination";

// Redux
import { useBlockList } from "src/state/block/hooks";
import { DEFAULT_PAGE_SIZE } from "src/constants";

export function BlockTable() {
  const [params, setParams] = useState({
    page_size: DEFAULT_PAGE_SIZE,
    page_index: 1,
  });
  const { isLoading, blockList } = useBlockList(params);

  return (
    <>
      <TableContainer>
        <Table>
          <TableHeaderRows />
          <TableBodyRows isLoading={isLoading} data={blockList} />
        </Table>
      </TableContainer>
      {!isEmpty(blockList) && <Pagination />}
    </>
  );
}
