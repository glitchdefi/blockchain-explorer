import React from "react";
import tw, { css, styled } from "twin.macro";

// Components
import {
  TableContainer,
  Table,
  TableRow,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableCell,
} from "src/app/components/Table";
import { Empty } from "src/app/components/Empty";
import { CardLayout } from "src/app/pages/Wallet/components/CardLayout";
import { Text } from "src/app/components/Text";

const configHeader = ["Rank", "Address", "Total Txn", "Percentage"];

export function RankTable({ tableName, data }) {
  const isDataEmpty = !data?.length;

  const renderHeaders = () => {
    return configHeader.map((item, i) => (
      <TableHeaderCell key={i}>{item}</TableHeaderCell>
    ));
  };

  const renderBodyRows = () => {
    if (isDataEmpty) return <Empty />;

    return data.map((item, i) => {
      return (
        <TableRow css={[rowStyles]} key={i}>
          <TableCell>1</TableCell>
          <TableCell isLink>dhjsoepn694278hfie</TableCell>
          <TableCell>2,000,000 GLCH</TableCell>
          <TableCell>7%</TableCell>
        </TableRow>
      );
    });
  };

  return (
    <>
      <div>
        <Text tw="mb-4">{tableName}</Text>
        <CardLayout tw="block p-2">
          <TableContainer>
            <Table tw="bg-bgSecondary">
              <TableHeader>
                <TableRow>{renderHeaders()}</TableRow>
              </TableHeader>
              <TableBody tw="bg-bgSecondary">{renderBodyRows()}</TableBody>
            </Table>
          </TableContainer>
        </CardLayout>
      </div>
    </>
  );
}

const rowStyles = css`
  &:last-child: {
    td {
      border-bottom: none;
    }
  }
`;
