import React from "react";
import PropTypes from "prop-types";
import "twin.macro";
import { isEmpty } from "lodash";

// Components
import { TableRow, TableCell, TableBody } from "src/app/components/Table";

export const TableBodyRows = React.memo(({ isLoading, data }) => {
  const renderBodyRows = () => {
    if (isEmpty(data)) return <TableEmpty />;

    return data.map((epoch, i) => {
      return (
        <TableRow key={i}>
          <TableCell isLink>241</TableCell>
          <TableCell>432000</TableCell>
          <TableCell>19251</TableCell>
          <TableCell>2021/01/10 21:45:01</TableCell>
          <TableCell>2021/01/15 09:53:30</TableCell>
          <TableCell>57584</TableCell>
        </TableRow>
      );
    });
  };

  return (
    <>
      <TableBody loading={{ isShow: isLoading }}>{renderBodyRows()}</TableBody>
    </>
  );
});

TableBodyRows.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array,
};
