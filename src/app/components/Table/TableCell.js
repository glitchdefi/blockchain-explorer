import React from "react";
import PropTypes from "prop-types";
import tw, { css } from "twin.macro";

export default function TableCell({ children, ...props }) {
  return (
    <td
      css={[tw`px-6 py-4 text-13 text-center whitespace-nowrap`, styles]}
      {...props}
    >
      {children}
    </td>
  );
}

const styles = css`
  color: rgba(255, 255, 255, 0.7);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(255, 255, 255, 0.11);
`;

TableCell.propTypes = {
  children: PropTypes.element,
};
