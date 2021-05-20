import React from "react";

// Components
import {
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "src/app/components/Table";

export function TableHeaderRows() {
  const renderHeaders = () => {
    return headers.map((item, i) => (
      <TableHeaderCell key={`producer-header-${i}`}>{item}</TableHeaderCell>
    ));
  };

  return (
    <TableHeader>
      <TableRow>{renderHeaders()}</TableRow>
    </TableHeader>
  );
}

const headers = [
  "Rank",
  "Block Producer",
  "Status",
  "Vote",
  "Total Vote",
  "Total Rewards",
];
