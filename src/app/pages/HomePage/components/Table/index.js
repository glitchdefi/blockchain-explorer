import React from "react";
import "twin.macro";
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
import { Tabs } from "./Tabs";
import { Tag } from "src/app/components/Tag";

export function Table() {
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
              <TableCell>Test</TableCell>
              <TableCell>
                <Tag color="success">Success</Tag>
              </TableCell>
              <TableCell>Test</TableCell>
              <TableCell>Test</TableCell>
              <TableCell>Test</TableCell>
            </TableRow>
          </TableBody>
        </PTable>
      </TabContentWrapper>
    </TableContainer>
  );
}
