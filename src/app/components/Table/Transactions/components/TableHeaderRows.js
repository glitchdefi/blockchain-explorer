import React from "react";

// Components
import TableHeader from "../../TableHeader";
import TableHeaderCell from "../../TableHeaderCell";
import TableRow from "../../TableRow";

export function TableHeaderRows() {
  const renderHeaders = () => {
    return headers.map((item, i) => (
      <TableHeaderCell key={`tx-header-${i}`}>{item}</TableHeaderCell>
    ));
  };

  return (
    <TableHeader>
      <TableRow>{renderHeaders()}</TableRow>
    </TableHeader>
  );
}

const headers = [
  "Txn Hash",
  "Block",
  "Create At",
  "From",
  "To",
  "Value (Glitch)",
  "Txn Fee",
  "Status",
];
