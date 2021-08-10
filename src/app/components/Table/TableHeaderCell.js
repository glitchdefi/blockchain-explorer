import React from "react";
import PropTypes from "prop-types";
import tw, { css, theme } from "twin.macro";
export default function TableHeaderCell({ children, ...props }) {
  return (
    <th
      scope="col"
      css={[
        tw`p-4 text-left text-base text-color6 tracking-wider font-normal bg-color11 dark:bg-color2`,
        styles,
      ]}
      {...props}
    >
      {children}
    </th>
  );
}

const styles = css`
  border-bottom: 1px solid ${theme`colors.color2`};
`;

TableHeaderCell.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
