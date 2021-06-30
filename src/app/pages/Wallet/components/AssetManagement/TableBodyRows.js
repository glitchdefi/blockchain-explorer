import React from "react";
import PropTypes from "prop-types";

// Components
import { TableRow, TableCell } from "src/app/components/Table";
import { Star } from "./TokenTransactionTable";
import { NumberChange } from "src/app/components/NumberChange";

export function TableBodyRows({ item }) {
  return (
    <>
      <TableRow>
        <TableCell>
          <Star>⭑</Star>
        </TableCell>
        <TableCell>Token 1</TableCell>
        <TableCell>TK1</TableCell>
        <TableCell>100,000</TableCell>
        <TableCell>$1,197.72/ TK1</TableCell>
        <TableCell>
          <NumberChange />
        </TableCell>
        <TableCell>100,000</TableCell>
        <TableCell>100,000,000</TableCell>
      </TableRow>
    </>
  );
}

TableBodyRows.propTypes = {
  item: PropTypes.object.isRequired,
};
