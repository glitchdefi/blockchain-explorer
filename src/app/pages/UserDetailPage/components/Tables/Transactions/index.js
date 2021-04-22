import React from "react";
import "twin.macro";
import { transWithActionTableHeader } from "src/constants/tableConfig";

// Components
import {
  Table,
  TableRow,
  TableHeader,
  TableHeaderCell,
  TableBody,
} from "src/app/components/Table";
import { Empty } from "src/app/components/Empty";
import { Pagination } from "src/app/components/Pagination";
import { TableBodyRows } from "./components";

export function TransactionTable({ data }) {
  const isDataEmpty = !data?.length;

  const renderHeaders = () => {
    return transWithActionTableHeader.map((item, i) => (
      <TableHeaderCell key={`transactions-header-${i}`}>{item}</TableHeaderCell>
    ));
  };

  const renderBodyRows = () => {
    if (isDataEmpty) return <Empty />;

    return data.map((item, i) => {
      return <TableBodyRows item={item} key={`transactions-body-${i}`} />;
    });
  };

  const renderPagination = () => {
    if (isDataEmpty) return null;
    return <Pagination />;
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>{renderHeaders()}</TableRow>
        </TableHeader>
        <TableBody>{renderBodyRows()}</TableBody>
      </Table>
      {renderPagination()}
    </>
  );
}
