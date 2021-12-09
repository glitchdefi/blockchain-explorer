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
            return (
              <TableRow key={i}>
                <TableCell>152805-0</TableCell>
                <TableCell isLink href={`/block/152805`}>
                  152805
                </TableCell>
                <TableCell>PreRuntime</TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
});
