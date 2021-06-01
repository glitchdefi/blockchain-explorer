import React from "react";
import PropTypes from "prop-types";
import { StyledLink } from "./StyledLink";
export function Link({ children, href, ...props }) {
  return (
    <StyledLink to={href} {...props}>
      {children}
    </StyledLink>
  );
}
Link.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
  props: PropTypes.object,
};
