import React from "react";
import PropTypes from "prop-types";
import "twin.macro";

import TableRowLoading from "./TableRowLoading";

export default function TableBody({ children, loading, ...props }) {
  return (
    <tbody tw="bg-bgPrimary" {...props}>
      {loading?.isShow ? <TableRowLoading cols={loading?.cols} /> : children}
    </tbody>
  );
}

TableBody.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  loading: PropTypes.shape({ isShow: PropTypes.bool, cols: PropTypes.number }),
};

TableBody.defaultProps = {};
