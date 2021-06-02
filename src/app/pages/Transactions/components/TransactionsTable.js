import React from "react";
import { isEmpty } from "lodash";
import moment from "moment";
import "twin.macro";

// Hooks
import { sliceString } from "src/utils/strings";

// Components
import {
  Table,
  TableBody,
  TableCell,
  TableEmpty,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "src/app/components/Table";
import { Tag } from "src/app/components/Tag";

export const TransactionsTable = React.memo((props) => {
  const { loading, total, onChange, data, ...rest } = props;

  return (
    <Table loading={loading} total={total} onChange={onChange} {...rest}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Txn Hash</TableHeaderCell>
          <TableHeaderCell>Block</TableHeaderCell>
          <TableHeaderCell>Create At</TableHeaderCell>
          <TableHeaderCell>From</TableHeaderCell>
          <TableHeaderCell>To</TableHeaderCell>
          <TableHeaderCell>Value (Glitch)</TableHeaderCell>
          <TableHeaderCell>Txn Fee</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {isEmpty(data) ? (
          <TableEmpty colSpan={8} invisible={loading}/>
        ) : (
          data.map((tx, i) => {
            const { hash, value, to, from, time, height } = tx;
            return (
              <TableRow key={i}>
                <TableCell isLink href={`/tx/${hash}`} dataTip={hash}>
                  {sliceString(hash)}
                </TableCell>
                <TableCell isLink href={`/block/${height}`}>
                  {height}
                </TableCell>
                <TableCell>{moment(time).format("DD/MM/YYYY h:mm A")}</TableCell>
                <TableCell isLink href={`/address/${from}`} dataTip={from}>
                  {sliceString(from)}
                </TableCell>
                <TableCell isLink href={`/address/${to}`} dataTip={to}>
                  {sliceString(to)}
                </TableCell>
                <TableCell>{value} GLCH</TableCell>
                <TableCell>0.0005 GLCH</TableCell>
                <TableCell>
                  <Tag color="pending">Pending</Tag>
                </TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
});
