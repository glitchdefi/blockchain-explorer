import React, { useState } from "react";
import { isEmpty } from "lodash";
import moment from "moment";
import "twin.macro";

// Hooks
import { useTxList } from "src/state/transaction/hooks";
import { sliceString } from "src/utils/strings";

// Components
import {
  Table,
  TableBody,
  TableCell,
  TableEmpty,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "src/app/components/Table";
import { TabPanel } from "src/app/components/Tab/Horizontal";
import { Tag } from "src/app/components/Tag";

export function TransactionsTable() {
  const [params, setParams] = useState();
  const { isLoading, txList } = useTxList(params);

  return (
    <TabPanel tw="mt-5">
      <Table
        loading={isLoading}
        total={txList?.length}
        onChange={(p) => setParams(p)}
      >
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Txn Hash</TableHeaderCell>
            <TableHeaderCell>Block</TableHeaderCell>
            <TableHeaderCell>Create At</TableHeaderCell>
            <TableHeaderCell>From</TableHeaderCell>
            <TableHeaderCell>To</TableHeaderCell>
            <TableHeaderCell>Value (Glitch)</TableHeaderCell>
            <TableHeaderCell>Txn Fee</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {isEmpty(txList) ? (
            <TableEmpty colSpan={8} />
          ) : (
            txList.map((tx, i) => {
              const { hash, value, to, from, time, height } = tx;
              return (
                <TableRow key={i}>
                  <TableCell isLink>{sliceString(hash)}</TableCell>
                  <TableCell isLink>{height}</TableCell>
                  <TableCell>{moment(time).format("DD/MM/YYYY")}</TableCell>
                  <TableCell isLink>{sliceString(from)}</TableCell>
                  <TableCell isLink>{sliceString(to)}</TableCell>
                  <TableCell>{value} GLCH</TableCell>
                  <TableCell>0.0005 GLCH</TableCell>
                  <TableCell>
                    <Tag color="pending">Pending</Tag>
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </TabPanel>
  );
}
