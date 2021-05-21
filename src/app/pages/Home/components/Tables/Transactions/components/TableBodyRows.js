import React from "react";
import PropTypes from "prop-types";
import "twin.macro";

import { isEmpty } from "lodash";

// Components
import {
  TableRow,
  TableCell,
  TableBody,
  TableEmpty,
} from "src/app/components/Table";
import { Tag } from "src/app/components/Tag";

export function TableBodyRows({ isLoading, data }) {
  const renderBodyRows = () => {
    if (isEmpty(data)) return <TableEmpty colSpan={8} />;

    return data.map((tx, i) => {
      return (
        <TableRow key={i}>
          <TableCell isLink>54agdt367dgt65656</TableCell>
          <TableCell isLink>5192802</TableCell>
          <TableCell>01/12/2021</TableCell>
          <TableCell isLink>54agdt367dgt65656</TableCell>
          <TableCell isLink>54agdt367dgt65656</TableCell>
          <TableCell>0.0005 GLCH</TableCell>
          <TableCell>0.0005 GLCH</TableCell>
          <TableCell>
            <Tag color="pending">Pending</Tag>
          </TableCell>
        </TableRow>
      );
    });
  };

  return (
    <TableBody loading={{ isShow: isLoading, cols: 8 }}>
      {renderBodyRows()}
    </TableBody>
  );
}

TableBodyRows.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array,
};
