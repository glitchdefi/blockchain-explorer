import React from "react";
import PropTypes from "prop-types";

// Components
import { TableRow, TableCell } from "src/app/components/Table";

export function TableBodyRows({ item }) {
  return (
    <>
      <TableRow>
        <TableCell isLink>5192802</TableCell>
        <TableCell>01/12/2021</TableCell>
        <TableCell>110</TableCell>
        <TableCell>4,00 TH</TableCell>
        <TableCell>0.0005 GLCH</TableCell>
      </TableRow>
    </>
  );
}

TableBodyRows.propTypes = {
  item: PropTypes.object.isRequired,
};
