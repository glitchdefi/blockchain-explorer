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
import { formatAmount, formatWei } from "src/utils/numbers";

export const ValidatorsTable = React.memo((props) => {
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
            const { address, balance, tx_count, evmAddress } = o || {};
            return (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>
                  <div>
                    <Link primary href={`/validator/${address}`}>
                      {address}
                    </Link>
                    {evmAddress && (
                      <div tw="flex items-center">
                        <Link
                          tw="text-sm text-color6"
                          href={`/validator/${evmAddress}`}
                        >
                          {evmAddress}
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
