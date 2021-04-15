import React from "react";
import PropTypes from "prop-types";
import tw, { css } from "twin.macro";

export default function Table({ children, ...props }) {
  return (
    <table css={[tw`min-w-full bg-black-pearl pt-4 pl-4 pr-4`, tableStyles]} {...props}>
      {children}
    </table>
  );
}

const tableStyles = css`
  border-spacing: inherit;
`;

Table.propTypes = {
  children: PropTypes.element,
};
