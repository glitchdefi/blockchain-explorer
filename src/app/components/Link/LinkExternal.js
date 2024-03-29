import React from "react";
import PropTypes from "prop-types";
import { StyledLinkExternal } from "./StyledLinkExternal";

export function LinkExternal({ children, href, ...props }) {
  return (
    <StyledLinkExternal as="a" href={href} {...props}>
      {children}
    </StyledLinkExternal>
  );
}

LinkExternal.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
  props: PropTypes.object,
};
