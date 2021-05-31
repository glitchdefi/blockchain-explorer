import React from "react";
import PropTypes from "prop-types";
import "twin.macro";
export default function TableContainer({ children, ...props }) {
  return (
    <div tw="block w-full overflow-x-auto" {...props}>
      {children}
    </div>
  );
}

TableContainer.propTypes = {
  children: PropTypes.element,
};
