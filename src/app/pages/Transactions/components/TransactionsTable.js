import React, { useEffect, useRef } from "react";
import { isEmpty } from "lodash";
import moment from "moment";

// Hooks
import { sliceString } from "src/utils/strings";
import { formatAmount, formatWei } from "src/utils/numbers";

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
  const { loading, total, onChange, data, animation = false, ...rest } = props;
  const countUpdated = useRef(0);

  useEffect(() => {
    if (data?.length) {
      countUpdated.current += 1;
    }
  }, [data]);

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
          <TableEmpty colSpan={8} invisible={loading} />
        ) : (
          data.map((tx, i) => {
            const { hash, value, to, from, create_at, height, result_log, gasused } =
              tx;
            const status = result_log === 1 ? "Success" : "Fail";
            return (
              <TableRow
                key={i}
                count={countUpdated.current}
                animation={animation && i === 0}
              >
                <TableCell isLink href={`/tx/${hash}`} dataTip={hash}>
                  {sliceString(hash)}
                </TableCell>
                <TableCell isLink href={`/block/${height}`}>
                  {height}
                </TableCell>
                <TableCell>
                  {moment(create_at).format("DD/MM/YYYY HH:mm:ss")}
                </TableCell>
                <TableCell isLink href={`/address/${from}`} dataTip={from}>
                  {sliceString(from)}
                </TableCell>
                <TableCell isLink href={`/address/${to}`} dataTip={to}>
                  {sliceString(to)}
                </TableCell>
                <TableCell>{formatAmount(Number(value))} GLCH</TableCell>
                <TableCell>{formatWei(gasused, false)} GLCH</TableCell>
                <TableCell>
                  <Tag color={status.toLowerCase()}>{status}</Tag>
                </TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
});
