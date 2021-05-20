import React from "react";
import PropTypes from "prop-types";
import { css, theme } from "twin.macro";

// Components
import { TableRow, TableCell } from "src/app/components/Table";
import { NumberChange } from "src/app/components/NumberChange";
import { Tag } from "src/app/components/Tag";
import { BlockProducerName } from "./BlockProducerName";

export function TableBodyRows({ item }) {
  return (
    <>
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
    </>
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

TableBodyRows.propTypes = {
  item: PropTypes.object.isRequired,
};
