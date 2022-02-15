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
import { formatNumber } from "src/utils/numbers";
import { formatDateTimeUTC, formatTimeAgo, FORMAT_1 } from "src/utils/dates";
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
          <TableHeaderCell tw="pl-5">Epoch</TableHeaderCell>
          <TableHeaderCell>Block</TableHeaderCell>
          <TableHeaderCell>Age</TableHeaderCell>
          <TableHeaderCell>Validator</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {isEmpty(data) ? (
          <TableEmpty invisible={loading} />
        ) : (
          data.map((o, i) => {
            const { epoch, time, index, validator } = o;

            return (
              <TableRow
                key={i}
                count={countUpdated.current}
                animation={i === 0}
              >
                <TableCell tw="pl-5">{formatNumber(epoch)}</TableCell>
                <TableCell isLink href={`/block/${index}`}>
                  {index}
                </TableCell>
                <TableCell>
                  {formatTimeAgo(time)}
                  <Text tw="mt-1 text-sm text-color6 dark:text-color5">
                    {formatDateTimeUTC(time, FORMAT_1)} GMT
                  </Text>
                </TableCell>
                <TableCell>{validator}</TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
});
