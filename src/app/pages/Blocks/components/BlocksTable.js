import React, { useEffect, useRef } from "react";
import { isEmpty } from "lodash";
import moment from "moment";
import Web3Utils from "web3-utils";
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
import { formatAmount } from "src/utils/numbers";

export const BlocksTable = React.memo((props) => {
  const { loading, total, onChange, data, ...rest } = props;
  const countUpdated = useRef(0);

  useEffect(() => {
    if (data?.length) {
      countUpdated.current += 1;
    }
  }, [data]);

  return (
    <Table loading={loading} total={total} onChange={onChange} {...rest}>
      <TableHeader>
        <TableRow animation={false}>
          <TableHeaderCell>Epoch/ Slot</TableHeaderCell>
          <TableHeaderCell>Block</TableHeaderCell>
          <TableHeaderCell>Create At</TableHeaderCell>
          <TableHeaderCell>Reward (Glitch)</TableHeaderCell>
          <TableHeaderCell>Size (Bytes)</TableHeaderCell>
          <TableHeaderCell>Producer</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {isEmpty(data) ? (
          <TableEmpty invisible={loading} />
        ) : (
          data.map((o, i) => {
            const { epoch, slot, size, height, time, reward, producer } = o;
            return (
              <TableRow
                key={i}
                count={countUpdated.current}
                animation={i === 0}
              >
                <TableCell>
                  {epoch}/ {slot}
                </TableCell>
                <TableCell isLink href={`/block/${height}`}>
                  {height}
                </TableCell>
                <TableCell>
                  {moment(time).format("DD/MM/YYYY h:mm A")}
                </TableCell>
                <TableCell>
                  {formatAmount(Number(Web3Utils.fromWei(reward.toString())))}{" "}
                  GLCH
                </TableCell>
                <TableCell>{size}</TableCell>
                <TableCell>{producer}</TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
});
