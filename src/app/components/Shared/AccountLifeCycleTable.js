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

export const AccountLifeCycleTable = React.memo((props) => {
  const { loading, total, onChange, data, ...rest } = props;

  return (
    <Table loading={loading} total={total} onChange={onChange} {...rest}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Block</TableHeaderCell>
          <TableHeaderCell>Activity</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {isEmpty(data) ? (
          <TableEmpty invisible={loading} />
        ) : (
          data.map((o, i) => {
            return (
              <TableRow key={i}>
                <TableCell isLink href={`/block/7228858`}>
                  7228858
                </TableCell>
                <TableCell>Created account</TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
});
