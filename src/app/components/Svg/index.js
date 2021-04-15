import React from "react";
import PropTypes from "prop-types";
import { styled, css } from "twin.macro";

export const Svg = ({ width, height, children, ...props }) => {
  return (
    <Wrapper width={width} height={height} {...props}>
      {children}
    </Wrapper>
  );
};

Svg.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  children: PropTypes.any.isRequired,
};

const Wrapper = styled.svg(({ width, height }) => [
  css`
    width: ${width};
    height: ${height};
    flex-shrink: 0;
  `,
]);
