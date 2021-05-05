import React from "react";
import PropTypes from "prop-types";

import { StyledText } from "./StyledText";
export function Text({ children, ...props }) {
  return <StyledText {...props}>{children}</StyledText>;
}

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  size: PropTypes.string,
  color: PropTypes.string,
  bold: PropTypes.bool,
  textTransform: PropTypes.string,
};
