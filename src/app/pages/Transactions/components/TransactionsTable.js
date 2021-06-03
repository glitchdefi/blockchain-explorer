import React, { useEffect, useRef } from "react";
import { isEmpty } from "lodash";
import moment from "moment";
import Web3Utils from "web3-utils";
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
            const { tx_hash, value, to, from, time, block, status, tx_fee } =
              tx;

            return (
              <TableRow
                key={i}
                count={countUpdated.current}
                animation={i === 0}
              >
                <TableCell isLink href={`/tx/${tx_hash}`} dataTip={tx_hash}>
                  {sliceString(tx_hash)}
                </TableCell>
                <TableCell isLink href={`/block/${block}`}>
                  {block}
                </TableCell>
                <TableCell>
                  {moment(time).format("DD/MM/YYYY h:mm A")}
                </TableCell>
                <TableCell isLink href={`/address/${from}`} dataTip={from}>
                  {sliceString(from)}
                </TableCell>
                <TableCell isLink href={`/address/${to}`} dataTip={to}>
                  {sliceString(to)}
                </TableCell>
                <TableCell>{value} GLCH</TableCell>
                <TableCell>
                  {Web3Utils.fromWei(tx_fee?.toString())} GLCH
                </TableCell>
                <TableCell>
                  <Tag color={status?.toLowerCase()}>{status}</Tag>
                </TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
});
