import React from "react";
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

export const LogsTable = React.memo((props) => {
  const { loading, total, onChange, data, ...rest } = props;

  return (
    <Table loading={loading} total={total} onChange={onChange} {...rest}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Log ID</TableHeaderCell>
          <TableHeaderCell>Block</TableHeaderCell>
          <TableHeaderCell>Type</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {isEmpty(data) ? (
          <TableEmpty invisible={loading} />
        ) : (
          data.map((o, i) => {
            const { block, id, title } = o || {};
            return (
              <TableRow key={i}>
                <TableCell>{id}</TableCell>
                <TableCell isLink href={`/block/${block}`}>
                  {block}
                </TableCell>
                <TableCell>{title}</TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
});
