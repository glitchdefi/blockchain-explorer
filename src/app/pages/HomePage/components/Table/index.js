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
import { Tabs } from "./Tabs";

export function Table() {
  return (
    <TableContainer>
      <Tabs />
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
            <TableCell>Test</TableCell>
            <TableCell>Test</TableCell>
            <TableCell>Test</TableCell>
            <TableCell>Test</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Test</TableCell>
            <TableCell>Test</TableCell>
            <TableCell>Test</TableCell>
            <TableCell>Test</TableCell>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </PTable>
    </TableContainer>
  );
}
