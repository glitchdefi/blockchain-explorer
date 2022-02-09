import React from "react";
import { isEmpty } from "lodash";
import "twin.macro";

import { formatWei } from "src/utils/numbers";

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
            const { address, balance, evmAddress } = o || {};
            return (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>
                  <div>
                    <Link primary href={`/account/${address}`}>
                      {address}
                    </Link>
                    {evmAddress && (
                      <div tw="flex items-center">
                        <Text tw="text-sm text-color6">{evmAddress}</Text>
                        <Text tw="ml-1 text-sm text-color5">(EVM address)</Text>
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell>-</TableCell>
                <TableCell>{formatWei(balance)} GLCH</TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
});
