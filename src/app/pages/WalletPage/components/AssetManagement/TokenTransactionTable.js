import React from "react";
import tw, { styled, css, theme } from "twin.macro";
import { useTranslation } from "react-i18next";

// Components
import {
  Table,
  TableContainer,
  TableRow,
  TableHeader,
  TableHeaderCell,
  TableBody,
} from "src/app/components/Table";
import { TableBodyRows } from "./TableBodyRows";
import { Empty } from "src/app/components/Empty";
import { Pagination } from "src/app/components/Pagination";

import { CardLayout } from "../CardLayout";
import { Text } from "src/app/components/Text";

const headerConfig = [
  "⭑",
  "Token Name",
  "Symbol",
  "Quantity",
  "Token Price",
  "Change (24h)",
  "Value in GLCH",
  "Value in USD",
];

export function TokenTransactionTable({ data }) {
  const { t } = useTranslation();
  const isDataEmpty = !data?.length;

  const renderHeaders = () => {
    return headerConfig.map((item, i) => (
      <TableHeaderCell key={`token-transactions-header-${i}`}>
        {i === 0 ? <Star>{item}</Star> : item}
      </TableHeaderCell>
    ));
  };

  const renderBodyRows = () => {
    if (isDataEmpty) return <Empty />;

    return data.map((item, i) => {
      return <TableBodyRows item={item} key={`token-transactions-body-${i}`} />;
    });
  };

  const renderPagination = () => {
    if (isDataEmpty) return null;
    return <Pagination />;
  };

  return (
    <div tw="mt-7">
      <CardLayout tw="block py-0 px-1">
        <TableContainer>
          <Table tw="bg-bgSecondary">
            <TableHeader>
              <TableRow>{renderHeaders()}</TableRow>
            </TableHeader>
            <TableBody tw="bg-bgSecondary">{renderBodyRows()}</TableBody>
          </Table>
        </TableContainer>
      </CardLayout>
      {renderPagination()}
    </div>
  );
}

export const Star = tw(Text)`text-2xl text-textSecondary!`;
