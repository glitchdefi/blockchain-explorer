import React from "react";
import "twin.macro";
import { MinedBlocksTableHeader } from "src/constants/tableConfig";

// Components
import {
  Table,
  TableContainer,
  TableRow,
  TableHeader,
  TableHeaderCell,
  TableBody,
} from "src/app/components/Table";
import { Empty } from "src/app/components/Empty";
import { Pagination } from "src/app/components/Pagination";
import { TableBodyRows } from "./components";

export function MinedBlockTable({ data }) {
  const isDataEmpty = !data?.length;

  const renderHeaders = () => {
    return MinedBlocksTableHeader.map((item, i) => (
      <TableHeaderCell key={`minedBlock-header-${i}`}>{item}</TableHeaderCell>
    ));
  };

  const renderBodyRows = () => {
    if (isDataEmpty) return <Empty />;

    return data.map((item, i) => {
      return <TableBodyRows item={item} key={`minedBlock-body-${i}`} />;
    });
  };

  const renderPagination = () => {
    if (isDataEmpty) return null;
    return <Pagination />;
  };

  return (
    <>
      <TableContainer>
        <Table>
          <TableHeader>
            <TableRow>{renderHeaders()}</TableRow>
          </TableHeader>
          <TableBody>{renderBodyRows()}</TableBody>
        </Table>
      </TableContainer>
      {renderPagination()}
    </>
  );
}
