import React from "react";
import PropTypes from "prop-types";
import { css } from "twin.macro";

export default function TableRow({ children, ...props }) {
  return (
    <tr css={[styles]} {...props}>
      {children}
    </tr>
  );
}

const styles = css`
  &:last-child {
    td {
      border: none;
    }
  }
`;

TableRow.propTypes = {
  children: PropTypes.element,
};
