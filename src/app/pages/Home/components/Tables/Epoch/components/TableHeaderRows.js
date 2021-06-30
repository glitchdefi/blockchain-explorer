import React from "react";

// Components
import {
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "src/app/components/Table";

export const TableHeaderRows = React.memo(() => {
  const renderHeaders = () => {
    return headers.map((item, i) => (
      <TableHeaderCell key={`epoch-header-${i}`}>{item}</TableHeaderCell>
    ));
  };

  return (
    <TableHeader>
      <TableRow>{renderHeaders()}</TableRow>
    </TableHeader>
  );
});

const headers = [
  "Epoch",
  "Slot",
  "Block",
  "Started at",
  "Last block at",
  "Transactions",
];
