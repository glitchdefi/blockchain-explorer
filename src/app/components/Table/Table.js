import React from "react";
import PropTypes from "prop-types";
import tw, { css } from "twin.macro";

export default function Table({ children, ...props }) {
  return (
    <table css={[tw`w-full bg-black-pearl`, tableStyles]} {...props}>
      {children}
    </table>
  );
}

const tableStyles = css`
  border-spacing: inherit;
`;

Table.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
