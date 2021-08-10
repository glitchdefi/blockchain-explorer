import React from "react";
import PropTypes from "prop-types";
import "twin.macro";
function TableBody({ children, ...props }) {
  return (
    <tbody tw="bg-color1" {...props}>
      {children}
    </tbody>
  );
}

export default React.memo(TableBody);
TableBody.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

TableBody.defaultProps = {};
