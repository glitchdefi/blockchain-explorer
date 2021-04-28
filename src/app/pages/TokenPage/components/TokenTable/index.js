import React from "react";
import "twin.macro";
import { headerConfig } from "./config";

// Components
import {
  Table,
  TableContainer,
  TableRow,
  TableHeader,
  TableHeaderCell,
  TableBody,
} from "src/app/components/Table";
import { TabPanel } from "src/app/components/Tab/Horizontal";
import { Empty } from "src/app/components/Empty";
import { Pagination } from "src/app/components/Pagination";
import { TableBodyRows } from "./components";

export function TokenTable({ data }) {
  const isDataEmpty = !data?.length;

  const renderHeaders = () => {
    return headerConfig.map((item, i) => (
      <TableHeaderCell key={i}>{item}</TableHeaderCell>
    ));
  };

  const renderBodyRows = () => {
    if (isDataEmpty) return <Empty />;

    return data.map((item, i) => {
      return <TableBodyRows item={item} key={i} />;
    });
  };

  const renderPagination = () => {
    if (isDataEmpty) return null;
    return <Pagination />;
  };

  return (
    <>
      <TabPanel tw="mt-5">
        <TableContainer>
          <Table>
            <TableHeader>
              <TableRow>{renderHeaders()}</TableRow>
            </TableHeader>
            <TableBody>{renderBodyRows()}</TableBody>
          </Table>
        </TableContainer>
        {renderPagination()}
      </TabPanel>
    </>
  );
}
