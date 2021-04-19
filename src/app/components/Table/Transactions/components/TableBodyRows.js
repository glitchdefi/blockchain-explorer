import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

// Components
import { TableRow, TableCell } from "src/app/components/Table";
import { Link } from "src/app/components/Link";
import { Tag } from "src/app/components/Tag";

export function TableBodyRows({ item }) {
  return (
    <>
      <TableRow>
        <TableCell>
          <CustomLink>54agdt367dgt65656</CustomLink>
        </TableCell>
        <TableCell>
          <CustomLink>5192802</CustomLink>
        </TableCell>
        <TableCell>01/12/2021</TableCell>
        <TableCell>
          <CustomLink>54agdt367dgt65656</CustomLink>
        </TableCell>
        <TableCell>
          <CustomLink>54agdt367dgt65656</CustomLink>
        </TableCell>
        <TableCell>0.0005 GLCH</TableCell>
        <TableCell>0.0005 GLCH</TableCell>
        <TableCell>
          <Tag color="pending">Pending</Tag>
        </TableCell>
      </TableRow>
    </>
  );
}

const CustomLink = styled(Link)(() => [
  tw`text-white text-opacity-70! underline`,
]);

TableBodyRows.propTypes = {
  item: PropTypes.object.isRequired,
};
