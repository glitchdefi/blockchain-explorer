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

export const LogsTable = React.memo((props) => {
  const { loading, total, onChange, data, ...rest } = props;

  return (
    <Table loading={loading} total={total} onChange={onChange} {...rest}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Log ID</TableHeaderCell>
          <TableHeaderCell>Type</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {isEmpty(data) ? (
          <TableEmpty colSpan={8} invisible={loading} />
        ) : (
          data.map((o, i) => {
            return (
              <TableRow key={i}>
                <TableCell id={i}>152453-0</TableCell>
                <TableCell>PreRuntime</TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
});
