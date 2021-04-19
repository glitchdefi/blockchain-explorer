import React from "react";
import PropTypes from "prop-types";
import "twin.macro";

// Components
import { TableRow, TableCell } from "src/app/components/Table";
import { Link } from "src/app/components/Link";

export function TableBodyRows({ item }) {
  return (
    <>
      <TableRow>
        <TableCell>240/ 432860</TableCell>
        <TableCell>
          <Link tw="text-white text-opacity-70! underline">5192802</Link>
        </TableCell>
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
