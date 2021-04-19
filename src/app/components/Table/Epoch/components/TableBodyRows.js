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
        <TableCell>
          <Link tw="text-white text-opacity-70! underline">241</Link>
        </TableCell>
        <TableCell>432000</TableCell>
        <TableCell>19251</TableCell>
        <TableCell>2021/01/10 21:45:01</TableCell>
        <TableCell>2021/01/15 09:53:30</TableCell>
        <TableCell>57584</TableCell>
      </TableRow>
    </>
  );
}

TableBodyRows.propTypes = {
  item: PropTypes.object.isRequired,
};
