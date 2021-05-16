import React, { useEffect, useState } from "react";
import { producerTableHeaders } from "src/constants/tableConfig";

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

export function ProducerTable({ data }) {
  const isDataEmpty = !data?.length;

  // Test skeleton
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => {
      setIsLoading(false);

      return () => {
        clearTimeout(timer);
      };
    }, 1500);
  }, []);

  const renderHeaders = () => {
    return producerTableHeaders.map((item, i) => (
      <TableHeaderCell key={`producer-header-${i}`}>{item}</TableHeaderCell>
    ));
  };

  const renderBodyRows = () => {
    if (isDataEmpty) return <Empty />;

    return data.map((item, i) => {
      return <TableBodyRows item={item} key={`producer-body-${i}`} />;
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
          <TableBody loading={{ isShow: isLoading }}>{renderBodyRows()}</TableBody>
        </Table>
      </TableContainer>
      {renderPagination()}
    </>
  );
}
