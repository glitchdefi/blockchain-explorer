import React from "react";
import { isEmpty } from "lodash";
import tw from "twin.macro";

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
import { truncateAddress } from "src/utils/strings";

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
            return (
              <TableRow key={i}>
                <TableCell isLink href={`/block/152805`}>
                  152805
                </TableCell>
                <TableCell>
                  <FromCellView
                    id={i}
                    from="0x6460777cDa22AD67bBb97536FFC446D65761197E"
                    to="0x6460777cDa22AD67bBb97536FFC446D65761197E"
                  />
                </TableCell>
                <TableCell>
                  <FromCellView
                    id={i}
                    from="0x6460777cDa22AD67bBb97536FFC446D65761197E"
                    to="0x6460777cDa22AD67bBb97536FFC446D65761197E"
                  />
                </TableCell>
                <TableCell>127408.23227 GLCH</TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
});

const FromCellView = ({ id, from, to }) => {
  const fromId = `${from} row-${id}`;
  const toId = `${to} row-${id}`;

  return (
    <>
      <Flex>
        <Link
          primary
          href={`/address/${from}`}
          data-tip={from}
          data-for={fromId}
        >
          {truncateAddress(from)}
        </Link>
      </Flex>

      <Flex>
        <Text tw="text-color6 text-sm" data-tip={to} data-for={toId}>
          {truncateAddress(to)}
        </Text>
        <Text tw="ml-1 text-color5 text-sm">(EVM address)</Text>
      </Flex>

      <Tooltip id={fromId} />
      <Tooltip id={toId} />
    </>
  );
};

const Flex = tw.div`flex items-center`;
