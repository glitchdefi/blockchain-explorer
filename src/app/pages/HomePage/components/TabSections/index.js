import React from "react";
import { css, theme } from "twin.macro";
import {
  TableContainer,
  Table as PTable,
  TableRow,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableCell,
} from "src/app/components/Table";
import { TabContentWrapper } from "src/app/components/Tab/TabContentWrapper";
import { Tag } from "src/app/components/Tag";
import { Pagination } from "src/app/components/Pagination";

import { Tabs } from "./Tabs";
import { BlockProducerName } from "./BlockProducerName";
import { NumberChange } from "../NumberChange";

export function DemoTable() {
  return (
    <TableContainer>
      <Tabs />
      <TabContentWrapper>
        <PTable>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Rank</TableHeaderCell>
              <TableHeaderCell>Block Producer</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Vote</TableHeaderCell>
              <TableHeaderCell>Total Vote</TableHeaderCell>
              <TableHeaderCell>Total Rewards</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>
                <BlockProducerName>Block Producer 1</BlockProducerName>
              </TableCell>
              <TableCell>
                <Tag color="success">Success</Tag>
              </TableCell>
              <TableCell>Test</TableCell>
              <TableCell>
                <NumberChange
                  css={[numberChangeStyles]}
                  value="370,850,779"
                  diff="26,049,388"
                />
              </TableCell>
              <TableCell>Test</TableCell>
            </TableRow>
          </TableBody>
        </PTable>
        <Pagination />
      </TabContentWrapper>
    </TableContainer>
  );
}

const numberChangeStyles = css`
  justify-content: center;
  .number-change-value {
    font-size: 13px;
    color: ${theme`colors.white`};
    opacity: 70%;
  }
`;
