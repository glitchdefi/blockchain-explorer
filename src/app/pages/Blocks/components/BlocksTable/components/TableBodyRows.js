import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import moment from "moment";
import "twin.macro";

// Components
import {
  TableRow,
  TableCell,
  TableBody,
  TableEmpty,
} from "src/app/components/Table";

export const TableBodyRows = React.memo(({ isLoading, data }) => {
  const renderBodyRows = () => {
    if (isEmpty(data)) return <TableEmpty />;

    return data.map((block, i) => {
      const { height, time } = block;
      return (
        <TableRow key={i}>
          <TableCell>240/ 432860</TableCell>
          <TableCell isLink href={`/block/${height}`}>
            {height}
          </TableCell>
          <TableCell>{moment(time).format("DD/MM/YYYY")}</TableCell>
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
});

TableBodyRows.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array,
};