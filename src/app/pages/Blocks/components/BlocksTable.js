import React, { useState } from "react";
import { isEmpty } from "lodash";
import moment from "moment";
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

// Hooks
import { useBlockList } from "src/state/block/hooks";
import { TabPanel } from "src/app/components/Tab/Horizontal";
import { formatCurrencyAmount } from "src/utils/numbers";

export const BlocksTable = React.memo(() => {
  const [params, setParams] = useState();
  const { isLoading, blockList } = useBlockList(params);

  return (
    <TabPanel tw="mt-5">
      <Table
        loading={isLoading}
        total={blockList?.length}
        onChange={(p) => setParams(p)}
      >
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Epoch/ Slot</TableHeaderCell>
            <TableHeaderCell>Block</TableHeaderCell>
            <TableHeaderCell>Create At</TableHeaderCell>
            <TableHeaderCell>Reward (Glitch)</TableHeaderCell>
            <TableHeaderCell>Size (Bytes)</TableHeaderCell>
            <TableHeaderCell>Producer</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {isEmpty(blockList) ? (
            <TableEmpty />
          ) : (
            blockList.map((block, i) => {
              const { epoch, slot, block_size, height, time, reward } = block;
              return (
                <TableRow key={i}>
                  <TableCell>
                    {epoch}/ {slot}
                  </TableCell>
                  <TableCell isLink href={`/block/${height}`}>
                    {height}
                  </TableCell>
                  <TableCell>{moment(time).format("DD/MM/YYYY")}</TableCell>
                  <TableCell>
                    {formatCurrencyAmount(reward, 2)} GLCH
                  </TableCell>
                  <TableCell>{block_size}</TableCell>
                  <TableCell>Julian</TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </TabPanel>
  );
});
