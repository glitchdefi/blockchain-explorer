import React from "react";
import PropTypes from "prop-types";
import "twin.macro";

export default function TableBody({ children, ...props }) {
  return (
    <tbody tw="bg-black-pearl" {...props}>
      {children}
    </tbody>
  );
}

TableBody.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
