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
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.any.isRequired,
};

const Wrapper = styled.svg(({ color, width, height }) => [
  css`
    fill: ${color};
    width: ${width};
    height: ${height};
    flex-shrink: 0;
  `,
]);
