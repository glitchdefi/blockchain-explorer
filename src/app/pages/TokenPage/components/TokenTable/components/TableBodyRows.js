import React from "react";
import PropTypes from "prop-types";
import { css, theme } from "twin.macro";

// Components
import { TableRow, TableCell } from "src/app/components/Table";

export function TableBodyRows({ item }) {
  return (
    <>
      <TableRow>
        <TableCell>1</TableCell>
        <TableCell>Token 1</TableCell>
        <TableCell>2,841,842,693.46</TableCell>
        <TableCell>2.89</TableCell>
        <TableCell>1,000,000</TableCell>
        <TableCell>1,5%</TableCell>
        <TableCell>1,000,000</TableCell>
        <TableCell>1,000,000 TK1</TableCell>
        <TableCell>1,000,000 TK1</TableCell>
      </TableRow>
    </>
  );
}

const numberChangeStyles = css`
  justify-content: center;
  .number-change-value {
    font-size: 13px;
    color: ${theme`colors.white`};
    opacity: 70%;
  }
`;

TableBodyRows.propTypes = {
  item: PropTypes.object.isRequired,
};
