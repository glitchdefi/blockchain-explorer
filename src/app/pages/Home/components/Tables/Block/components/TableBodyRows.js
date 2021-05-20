import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import "twin.macro";

// Components
import {
  TableRow,
  TableCell,
  TableBody,
  TableEmpty,
} from "src/app/components/Table";
export function TableBodyRows({ isLoading, data }) {
  const renderBodyRows = () => {
    if (isEmpty(data)) return <TableEmpty />;

    return data.map((block, i) => {
      return (
        <TableRow key={i}>
          <TableCell>240/ 432860</TableCell>
          <TableCell isLink href={`/block/${5192802}`}>
            5192802
          </TableCell>
          <TableCell>01/12/2021</TableCell>
          <TableCell>4,00 GLCH</TableCell>
          <TableCell>3</TableCell>
          <TableCell>Julian</TableCell>
        </TableRow>
      );
    });
  };

  return (
    <>
      <TableBody loading={{ isShow: isLoading }}>{renderBodyRows()}</TableBody>
    </>
  );
}

TableBodyRows.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array,
};
