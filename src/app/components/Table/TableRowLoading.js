import React from "react";
import PropTypes from "prop-types";

import TableRow from "./TableRow";
import TableCell from "./TableCell";
import { Skeleton } from "../Skeleton";

const ROWS = 3;

export default function TableRowLoading({ cols }) {
  return Array.from({ length: ROWS }, () => (
    <TableRow>
      {Array.from({ length: cols }, () => (
        <TableCell>
          <Skeleton height={24}/>
        </TableCell>
      ))}
    </TableRow>
  ));
}

TableRowLoading.propTypes = {
  cols: PropTypes.number,
};

TableRowLoading.defaultProps = {
  cols: 6,
};
