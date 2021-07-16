import React, { useEffect, useRef } from "react";
import { isEmpty } from "lodash";
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
import { formatAmount, formatWei, formatNumber } from "src/utils/numbers";
import { formatDateTimeUTC, formatTimeAgo, FORMAT_1 } from "src/utils/dates";
import { ValueWithPrefix } from "src/app/components/ValueWithPrefix";
import { Text } from "src/app/components/Text";

export const BlocksTable = React.memo((props) => {
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
        <TableRow animation={false}>
          <TableHeaderCell tw="pl-5">Epoch/ Slot</TableHeaderCell>
          <TableHeaderCell>Block</TableHeaderCell>
          <TableHeaderCell>Age</TableHeaderCell>
          <TableHeaderCell tw="text-right">Reward</TableHeaderCell>
          <TableHeaderCell tw="text-center">Size (Bytes)</TableHeaderCell>
          <TableHeaderCell>Validator</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {isEmpty(data) ? (
          <TableEmpty invisible={loading} />
        ) : (
          data.map((o, i) => {
            const { epoch, slot, size, height, create_at, reward, producer } =
              o;

            return (
              <TableRow
                key={i}
                count={countUpdated.current}
                animation={i === 0}
              >
                <TableCell tw="pl-5">
                  {formatNumber(epoch)}/ {slot}
                </TableCell>
                <TableCell isLink href={`/block/${height}`}>
                  {formatAmount(height)}
                </TableCell>
                <TableCell>
                  {formatTimeAgo(create_at)}
                  <Text tw="mt-1 text-sm text-color5">
                    {formatDateTimeUTC(create_at, FORMAT_1)} GMT
                  </Text>
                </TableCell>
                <TableCell>
                  <ValueWithPrefix tw="justify-end" value={formatWei(reward)} />
                </TableCell>
                <TableCell tw="text-center">{formatAmount(size)}</TableCell>
                <TableCell>{producer}</TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
});
