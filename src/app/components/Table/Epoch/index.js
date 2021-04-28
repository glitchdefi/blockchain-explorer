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
} from "../index";
import { TableBodyRows } from "./components";
import { Empty } from "../../Empty";
import { Pagination } from "../../Pagination";

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