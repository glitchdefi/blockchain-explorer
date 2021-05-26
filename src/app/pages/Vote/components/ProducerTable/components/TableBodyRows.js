import React from "react";
import PropTypes from "prop-types";
import { css, theme } from "twin.macro";

// Components
import { TableRow, TableCell } from "src/app/components/Table";
import { Checkbox } from "src/app/components/Checkbox";
import { Tag } from "src/app/components/Tag";
import { NumberChange } from "src/app/components/NumberChange";

export function TableBodyRows({ item }) {
  return (
    <>
      <TableRow>
        <TableCell>
          <Checkbox />
        </TableCell>
        <TableCell>1</TableCell>
        <TableCell isLink>glitchabc1</TableCell>
        <TableCell>
          <Tag color="pending">Pending</Tag>
        </TableCell>
        <TableCell>3.060%</TableCell>
        <TableCell>
          <NumberChange css={[numberChangeStyles]} value="500,000,000" />
        </TableCell>
        <TableCell>982.4231</TableCell>
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
