import React from "react";
import PropTypes from "prop-types";
import "twin.macro";

// Components
import { TableRow, TableCell } from "src/app/components/Table";

export function TableBodyRows({ item }) {
  return (
    <>
      <TableRow>
        <TableCell>240/ 432860</TableCell>
        <TableCell isLink>5192802</TableCell>
        <TableCell>01/12/2021</TableCell>
        <TableCell>4,00 GLCH</TableCell>
        <TableCell>3</TableCell>
        <TableCell>Julian</TableCell>
      </TableRow>
    </>
  );
}

TableBodyRows.propTypes = {
  item: PropTypes.object.isRequired,
};
