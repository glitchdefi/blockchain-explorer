import React from "react";
import "twin.macro";
import { blockDetailsTableHeader } from "src/constants/tableConfig";

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

export function BlockDetailsTable({ data }) {
  const isDataEmpty = !data?.length;

  const renderHeaders = () => {
    return blockDetailsTableHeader.map((item, i) => (
      <TableHeaderCell key={`blockDetails-header-${i}`}>{item}</TableHeaderCell>
    ));
  };

  const renderBodyRows = () => {
    if (isDataEmpty) return <Empty />;

    return data.map((item, i) => {
      return <TableBodyRows item={item} key={`blockDetails-body-${i}`} />;
    });
  };

  const renderPagination = () => {
    if (isDataEmpty) return null;
    return <Pagination />;
  };

  return (
    <>
      <TabPanel>
        <TableContainer>
          <Table>
            <TableHeader>
              <TableRow>{renderHeaders()}</TableRow>
            </TableHeader>
            <TableBody>{renderBodyRows()}</TableBody>
          </Table>
        </TableContainer>
        {/* {renderPagination()} */}
      </TabPanel>
    </>
  );
}
