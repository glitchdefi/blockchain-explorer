import React from "react";
import PropTypes from "prop-types";

import TableRow from "./TableRow";
import TableCell from "./TableCell";
import { Skeleton } from "../Skeleton";

const ROWS = 5;
export default function TableRowLoading({ cols }) {
  return Array.from({ length: ROWS }, (_, i) => (
    <TableRow key={i}>
      {Array.from({ length: cols }, (_, i) => (
        <TableCell key={i}>
          <Skeleton height={24} animation="waves" />
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
