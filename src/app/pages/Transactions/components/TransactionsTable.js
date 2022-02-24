import React, { useEffect, useRef } from "react";
import { isEmpty } from "lodash";
import "twin.macro";

// Hooks
import { truncateAddress } from "src/utils/strings";
import { formatDateTimeUTC, formatTimeAgo, FORMAT_1 } from "src/utils/dates";
import { formatWei } from "src/utils/numbers";

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
import { Status } from "src/app/components/Status";
import { Text } from "src/app/components/Text";
import { ValueWithPrefix } from "src/app/components/ValueWithPrefix";
import { Journey } from "./Journey";

export const TransactionsTable = React.memo((props) => {
  const {
    loading,
    total,
    onChange,
    data,
    animation = false,
    showBlockCol = true,
    ...rest
  } = props;
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
          {showBlockCol && <TableHeaderCell>Block</TableHeaderCell>}
          <TableHeaderCell>Journey</TableHeaderCell>
          <TableHeaderCell>Age</TableHeaderCell>
          <TableHeaderCell tw="text-right">Amount</TableHeaderCell>
          <TableHeaderCell tw="text-right">Txn fee</TableHeaderCell>
          <TableHeaderCell tw="text-center">Status</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {isEmpty(data) ? (
          <TableEmpty colSpan={8} invisible={loading} />
        ) : (
          data.map((tx, i) => {
            const { hash, value, to, from, time, fee, block, status, tip } = tx;
            return (
              <TableRow
                key={i}
                count={countUpdated.current}
                animation={animation && i === 0}
              >
                <TableCell id={i} isLink href={`/tx/${hash}`} tip={hash}>
                  {truncateAddress(hash, 8, 8)}
                </TableCell>
                {showBlockCol && (
                  <TableCell isLink href={`/block/${block}`}>
                    {block}
                  </TableCell>
                )}
                <TableCell>
                  <Journey id={i} from={from} to={to} />
                </TableCell>
                <TableCell>
                  {formatTimeAgo(time)}
                  <Text tw="mt-1 text-sm text-color6 dark:text-color5">
                    {formatDateTimeUTC(time, FORMAT_1)} GMT
                  </Text>
                </TableCell>

                <TableCell>
                  <ValueWithPrefix tw="justify-end" value={formatWei(value)} />
                </TableCell>
                <TableCell>
                  <ValueWithPrefix
                    tw="justify-end"
                    value={formatWei(fee + tip)}
                  />
                </TableCell>
                <TableCell tw="text-center">
                  <Status
                    id={`${status.toLowerCase()} row-${i}`}
                    status={status.toLowerCase()}
                  />
                </TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
});
