import React from "react";
import { transactionTableHeader } from "src/constants/tableConfig";

// Components
import {
  Table,
  TableRow,
  TableHeader,
  TableHeaderCell,
  TableBody,
} from "../index";
import { TableBodyRows } from "./components";
import { Empty } from "../../Empty";
import { Pagination } from "../../Pagination";

export function TransactionTable({ data }) {
  const isDataEmpty = !data?.length;

  const renderHeaders = () => {
    return transactionTableHeader.map((item, i) => (
      <TableHeaderCell key={`transaction-header-${i}`}>{item}</TableHeaderCell>
    ));
  };

  const renderBodyRows = () => {
    if (isDataEmpty) return <Empty />;

    return data.map((item, i) => {
      return <TableBodyRows item={item} key={`transaction-body-${i}`} />;
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
