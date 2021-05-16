import React from "react";
import PropTypes from "prop-types";

// Components
import { TableRow, TableCell } from "src/app/components/Table";
import { Tag } from "src/app/components/Tag";
import { Action } from "src/app/components/Tag/Action";

export function TableBodyRows({ item }) {
  return (
    <>
      <TableRow>
        <TableCell isLink>54agdt367dgt65656</TableCell>
        <TableCell isLink>5192802</TableCell>
        <TableCell>01/12/2021</TableCell>
        <TableCell>
          <Action type="pending">Send</Action>
        </TableCell>
        <TableCell isLink>54agdt367dgt65656</TableCell>
        <TableCell isLink>54agdt367dgt65656</TableCell>
        <TableCell>0.0005 GLCH</TableCell>
        <TableCell>0.0005 GLCH</TableCell>
        <TableCell>
          <Tag color="pending">Pending</Tag>
        </TableCell>
      </TableRow>
    </>
  );
}

TableBodyRows.propTypes = {
  item: PropTypes.object.isRequired,
};
