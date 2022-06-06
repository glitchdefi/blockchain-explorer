import React from "react";
import { isEmpty } from "lodash";
import "twin.macro";

import { formatAmount, formatWei } from "src/utils/numbers";

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
  const { loading, total, onChange, data, pageInfo, ...rest } = props;
  const { page_size, page_index } = pageInfo || {};

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
            const { glitch_address, balance, evm_address, tx_count } = o || {};
            return (
              <TableRow key={i}>
                <TableCell>{page_size * (page_index - 1) + i + 1}</TableCell>
                <TableCell>
                  <div>
                    {glitch_address && (
                      <Link primary href={`/account/${glitch_address}`}>
                        {glitch_address}
                      </Link>
                    )}
                    {evm_address && (
                      <div tw="flex items-center">
                        <Link
                          tw="text-sm text-color6"
                          href={`/account/${glitch_address || evm_address}`}
                        >
                          {evm_address}
                        </Link>
                        <Text tw="ml-1 text-sm text-color5">(EVM address)</Text>
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell>{formatAmount(tx_count)}</TableCell>
                <TableCell>{formatWei(balance)} GLCH</TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
});
