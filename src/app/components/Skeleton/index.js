import React from "react";
import PropTypes from "prop-types";
import { styled, css, theme } from "twin.macro";
import { keyframes } from "styled-components";
import { animation as ANIMATION, variant as VARIANT } from "./types";

const waves = keyframes`
   from {
        left: -150px;
    }
    to   {
        left: 100%;
    }
`;

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const Root = styled.div(({ variant, height }) => [
  css`
    min-height: ${height ? `${height}px` : "16px"};
    display: block;
    background-color: ${theme`colors.bgSecondary`};
    border-radius: ${variant === VARIANT.CIRCLE ? "50%" : "5px"};
  `,
]);

const Pulse = styled(Root)`
  animation: ${pulse} 2s infinite ease-out;
  transform: translate3d(0, 0, 0);
`;

const Waves = styled(Root)`
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  &:before {
    content: "";
    position: absolute;
    background-image: linear-gradient(
      90deg,
      transparent,
      #878889,
      transparent
    );
    top: 0;
    left: -150px;
    height: 100%;
    width: 150px;
    animation: ${waves} 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;

export const Skeleton = ({
  variant = VARIANT.RECT,
  animation = ANIMATION.PULSE,
  ...props
}) => {
  if (animation === ANIMATION.WAVES) {
    return <Waves variant={variant} {...props} />;
  }

  return <Pulse variant={variant} {...props} />;
};

Skeleton.propTypes = {
  variant: PropTypes.string,
  animation: PropTypes.string,
  height: PropTypes.number,
};
