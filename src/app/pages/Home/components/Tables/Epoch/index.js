import React from "react";
import { epochTableHeaders } from "src/constants/tableConfig";

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

export function EpochTable({ data }) {
  const isDataEmpty = !data?.length;

  const renderHeaders = () => {
    return epochTableHeaders.map((item, i) => (
      <TableHeaderCell key={`epoch-header-${i}`}>{item}</TableHeaderCell>
    ));
  };

  const renderBodyRows = () => {
    if (isDataEmpty) return <Empty />;

    return data.map((item, i) => {
      return <TableBodyRows item={item} key={`epoch-body-${i}`} />;
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
