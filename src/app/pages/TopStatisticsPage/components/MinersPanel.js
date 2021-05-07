import React from "react";
import "twin.macro";

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
import { CardLayout } from "src/app/pages/WalletPage/components/CardLayout";
import { Text } from "src/app/components/Text";

const configHeader = [
  "Rank",
  "Address",
  "Total Blocks Mined",
  "Total Rewards (GLCH)",
  "Estimated Hash Rate (GH/s)",
];

export function MinersPanel({ data }) {
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
        <TableRow key={i}>
          <TableCell>1</TableCell>
          <TableCell isLink>dhjsoepn694278hfie</TableCell>
          <TableCell>1,627</TableCell>
          <TableCell>4,500.212978</TableCell>
          <TableCell>77,250.7239567 (23.57%)</TableCell>
        </TableRow>
      );
    });
  };

  return (
    <>
      <div>
        <Text tw="mt-10 mb-4">Top Miners by Blocks Mined</Text>
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
