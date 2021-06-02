import { React } from "react";
import tw, { theme } from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

import { TableRow, TableCell } from "../Table";
import { Text } from "../Text";

export default function TableEmpty({ colSpan, invisible }) {
  return (
    <TableRow>
      <TableCell colSpan={colSpan}>
        <Wrapper css={[invisible && tw`invisible`]}>
          <FontAwesomeIcon icon={faDatabase} size="3x" />
          <Text
            size={theme`fontSize.lg`}
            color={theme`colors.textSecondary`}
            tw="mt-2"
          >
            Empty
          </Text>
        </Wrapper>
      </TableCell>
    </TableRow>
  );
}

const Wrapper = tw.div`w-full h-full p-10 items-center justify-center opacity-30`;

TableEmpty.defaultProps = {
  colSpan: 6,
};
