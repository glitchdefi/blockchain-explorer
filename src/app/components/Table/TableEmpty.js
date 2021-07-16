import { React } from "react";
import tw from "twin.macro";

import { TableRow, TableCell } from "../Table";
import { NotFoundIcon } from "../Svg/Icons";
export default function TableEmpty({ colSpan, invisible }) {
  return (
    <TableRow>
      <TableCell colSpan={colSpan}>
        <Wrapper css={[invisible && tw`invisible`]}>
          <div>
            <NotFoundIcon />
          </div>
        </Wrapper>
      </TableCell>
    </TableRow>
  );
}

const Wrapper = tw.div`w-full max-h-full p-10 items-center justify-center opacity-30 h-96 flex`;

TableEmpty.defaultProps = {
  colSpan: 6,
};
