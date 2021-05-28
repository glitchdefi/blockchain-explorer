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
      <TableHeaderCell key={`block-header-${i}`}>{item}</TableHeaderCell>
    ));
  };

  return (
    <TableHeader>
      <TableRow>{renderHeaders()}</TableRow>
    </TableHeader>
  );
});

const headers = [
  "Epoch/ Slot",
  "Block",
  "Create At",
  "Reward (Glitch)",
  "Size (Bytes)",
  "Producer",
];
