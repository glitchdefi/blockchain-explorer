import React from "react";
import PropTypes from "prop-types";
import tw, { css } from "twin.macro";

export default function TableHeaderCell({ children, ...props }) {
  return (
    <th
      scope="col"
      css={[
        tw`px-6 py-3 text-center text-14 font-medium text-white tracking-wider`,
        styles,
      ]}
      {...props}
    >
      {children}
    </th>
  );
}

const styles = css`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(255, 255, 255, 0.4);
`;

TableHeaderCell.propTypes = {
  children: PropTypes.element,
};
