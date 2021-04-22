import React from "react";
import PropTypes from "prop-types";

export default function TableRow({ children, ...props }) {
  return <tr {...props}>{children}</tr>;
}

TableRow.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
