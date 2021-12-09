import React from "react";
import { isEmpty } from "lodash";

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

export const AuthoredBlocksTable = React.memo((props) => {
  const { loading, total, onChange, data, ...rest } = props;

  return (
    <Table loading={loading} total={total} onChange={onChange} {...rest}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Age</TableHeaderCell>
          <TableHeaderCell>Block</TableHeaderCell>
          <TableHeaderCell>Session</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {isEmpty(data) ? (
          <TableEmpty invisible={loading} />
        ) : (
          data.map((o, i) => {
            return (
              <TableRow key={i}>
                <TableCell>12 Jul, 2021 | 04:17:56 GMT</TableCell>
                <TableCell isLink href={`/block/7228858`}>
                  7228858
                </TableCell>
                <TableCell isLink>3024</TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
});
