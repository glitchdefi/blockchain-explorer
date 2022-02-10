import React from "react";
import { isEmpty } from "lodash";
import tw, { styled, css } from "twin.macro";

import { truncateAddress } from "src/utils/strings";

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
import { Text } from "src/app/components/Text";
import { Link } from "src/app/components/Link";
import { Tooltip } from "src/app/components/Tooltip";
import { formatWei } from "src/utils/numbers";

export const BalanceTransferTable = React.memo((props) => {
  const { loading, total, onChange, data, ...rest } = props;

  return (
    <Table loading={loading} total={total} onChange={onChange} {...rest}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Block</TableHeaderCell>
          <TableHeaderCell>From</TableHeaderCell>
          <TableHeaderCell>To</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {isEmpty(data) ? (
          <TableEmpty invisible={loading} />
        ) : (
          data.map((o, i) => {
            const { block, from, to, value } = o || {};
            return (
              <TableRow key={i}>
                <TableCell isLink href={`/block/${block}`}>
                  {block}
                </TableCell>
                <TableCell>
                  <AddressCell id={i} address={from} evmAddress={null} />
                </TableCell>
                <TableCell>
                  <AddressCell id={i} address={to} evmAddress={null} />
                </TableCell>
                <TableCell>{formatWei(value)} GLCH</TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
});

const AddressCell = ({ id, address, evmAddress }) => {
  const addressId = `${address} row-${id}`;
  const evmAddressId = `${evmAddress} row-${id}`;

  return (
    <>
      <Flex>
        <Link
          primary
          href={`/account/${address}`}
          data-tip={address}
          data-for={addressId}
        >
          {truncateAddress(address)}
        </Link>
      </Flex>

      {evmAddress && (
        <Flex>
          <Text
            tw="text-color6 text-sm"
            data-tip={evmAddress}
            data-for={evmAddressId}
          >
            {truncateAddress(evmAddress)}
          </Text>
          <Text tw="ml-1 text-color5 text-sm">(EVM address)</Text>
        </Flex>
      )}

      <StyledTooltip className="tooltip" id={addressId} />
      {evmAddress && <StyledTooltip id={evmAddressId} />}
    </>
  );
};

const Flex = tw.div`flex items-center`;
const StyledTooltip = styled(Tooltip)(() => [
  css`
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 2%),
      0 10px 10px -5px rgb(0 0 0 / 2%);
  `,
]);
