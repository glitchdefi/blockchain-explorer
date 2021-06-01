import React from "react";
import PropTypes from "prop-types";
import { css, theme } from "twin.macro";
import { isEmpty } from "lodash";

// Components
import {
  TableRow,
  TableCell,
  TableBody,
  TableEmpty,
} from "src/app/components/Table";
import { NumberChange } from "src/app/components/NumberChange";
import { Tag } from "src/app/components/Tag";
import { BlockProducerName } from "./BlockProducerName";

export const TableBodyRows = React.memo(({ data }) => {
  const renderBodyRows = () => {
    if (isEmpty(data)) return <TableEmpty />;

    return data.map((producer, i) => {
      const { rank, producer_name, status, total_rewards, total_votes, votes } =
        producer;
      return (
        <TableRow key={i}>
          <TableCell>{rank}</TableCell>
          <TableCell>
            <BlockProducerName href="">{producer_name}</BlockProducerName>
          </TableCell>
          <TableCell>
            <Tag color={status}>{status}</Tag>
          </TableCell>
          <TableCell>{votes}</TableCell>
          <TableCell>
            <NumberChange css={[numberChangeStyles]} value={total_votes} />
          </TableCell>
          <TableCell>{total_rewards}</TableCell>
        </TableRow>
      );
    });
  };

  return (
    <>
      <TableBody>{renderBodyRows()}</TableBody>
    </>
  );
});

const numberChangeStyles = css`
  justify-content: center;
  .number-change-value {
    font-size: 13px;
    color: ${theme`colors.white`};
    opacity: 70%;
  }
`;
TableBodyRows.propTypes = {
  data: PropTypes.array,
};
