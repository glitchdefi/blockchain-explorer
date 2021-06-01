import React, { useState } from "react";
import { isEmpty } from "lodash";
import moment from "moment";
import "twin.macro";

// Components
import {
  Table,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TableBody,
  TableEmpty,
  TableCell,
} from "src/app/components/Table";

// Hooks
import { formatAmount } from "src/utils/numbers";

export const BlocksTable = React.memo((props) => {
  const { loading, total, onChange, data, ...rest } = props;
  return (
    <Table loading={loading} total={total} onChange={onChange} {...rest}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Epoch/ Slot</TableHeaderCell>
          <TableHeaderCell>Block</TableHeaderCell>
          <TableHeaderCell>Create At</TableHeaderCell>
          <TableHeaderCell>Reward (Glitch)</TableHeaderCell>
          <TableHeaderCell>Size (Bytes)</TableHeaderCell>
          <TableHeaderCell>Producer</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {isEmpty(data) ? (
          <TableEmpty />
        ) : (
          data.map((block, i) => {
            const { epoch, slot, block_size, height, time, reward } = block;
            return (
              <TableRow key={i}>
                <TableCell>
                  {epoch}/ {slot}
                </TableCell>
                <TableCell isLink href={`/block/${height}`}>
                  {height}
                </TableCell>
                <TableCell>{moment(time).format("DD/MM/YYYY")}</TableCell>
                <TableCell>{formatAmount(Number(reward))} GLCH</TableCell>
                <TableCell>{block_size}</TableCell>
                <TableCell>Julian</TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
});
