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
import { Link } from "src/app/components/Link";
import { Text } from "src/app/components/Text";

export const AllAccountsTable = React.memo((props) => {
  const { loading, total, onChange, data, ...rest } = props;

  return (
    <Table loading={loading} total={total} onChange={onChange} {...rest}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Rank</TableHeaderCell>
          <TableHeaderCell>Address</TableHeaderCell>
          <TableHeaderCell>Transactions</TableHeaderCell>
          <TableHeaderCell>Balance</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {isEmpty(data) ? (
          <TableEmpty invisible={loading} />
        ) : (
          data.map((o, i) => {
            return (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>
                  <div>
                    <Link primary href={`/address/tglc1elnpa4avu4nd5auu2m7tyz5qdynrfs3qsz8x7a`}>
                      0x11a9f2119ade1ef6394579b95d1c60df106bbc9f
                    </Link>
                    <div tw="flex items-center">
                      <Text tw="text-sm text-color6">
                        0x8c6f4De63ec0E55f180E33D29E113826A189AbcD
                      </Text>
                      <Text tw="ml-1 text-sm text-color5">(EVM address)</Text>
                    </div>
                  </div>
                </TableCell>
                <TableCell>132,722</TableCell>
                <TableCell>311,357,346.86 GLCH</TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
});
