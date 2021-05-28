import React from "react";
import PropTypes from "prop-types";
import { css, theme } from "twin.macro";
import { isEmpty } from "lodash";

// Components
import { TableRow, TableCell, TableBody } from "src/app/components/Table";
import { NumberChange } from "src/app/components/NumberChange";
import { Tag } from "src/app/components/Tag";
import { BlockProducerName } from "./BlockProducerName";

export const TableBodyRows = React.memo(({ isLoading, data }) => {
  const renderBodyRows = () => {
    if (isEmpty(data)) return <TableEmpty />;

    return data.map((producer, i) => {
      const { name } = producer;
      return (
        <TableRow key={i}>
          <TableCell>1</TableCell>
          <TableCell>
            <BlockProducerName>{name}</BlockProducerName>
          </TableCell>
          <TableCell>
            <Tag color="success">Success</Tag>
          </TableCell>
          <TableCell>Test</TableCell>
          <TableCell>
            <NumberChange css={[numberChangeStyles]} value="370,850,779" />
          </TableCell>
          <TableCell>Test</TableCell>
        </TableRow>
      );
    });
  };

  return (
    <>
      <TableBody loading={{ isShow: isLoading }}>{renderBodyRows()}</TableBody>
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
  isLoading: PropTypes.bool,
  data: PropTypes.array,
};
