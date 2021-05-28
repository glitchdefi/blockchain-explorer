import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { isEmpty } from "lodash";
import "twin.macro";

import { sliceString } from "src/utils/strings";

// Components
import {
  TableRow,
  TableCell,
  TableBody,
  TableEmpty,
} from "src/app/components/Table";
import { Tag } from "src/app/components/Tag";

export const TableBodyRows = React.memo(({ isLoading, data }) => {
  const renderBodyRows = () => {
    if (isEmpty(data)) return <TableEmpty colSpan={8} />;

    return data.map((tx, i) => {
      const { hash, value, to, from, time, height } = tx;

      return (
        <TableRow key={i}>
          <TableCell isLink>{sliceString(hash)}</TableCell>
          <TableCell isLink>{height}</TableCell>
          <TableCell>{moment(time).format("DD/MM/YYYY")}</TableCell>
          <TableCell isLink>{sliceString(from)}</TableCell>
          <TableCell isLink>{sliceString(to)}</TableCell>
          <TableCell>{value} GLCH</TableCell>
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
});

TableBodyRows.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array,
};
