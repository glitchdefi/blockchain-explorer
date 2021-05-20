import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import "twin.macro";

// Components
import { TableRow, TableCell, TableBody } from "src/app/components/Table";
import { Empty } from "src/app/components/Empty";

export function TableBodyRows({ isLoading, data }) {
  const renderBodyRows = () => {
    if (isEmpty(data)) return <Empty />;

    return data.map((block, i) => {
      return (
        <TableRow key={i}>
          <TableCell>240/ 432860</TableCell>
          <TableCell isLink>5192802</TableCell>
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
