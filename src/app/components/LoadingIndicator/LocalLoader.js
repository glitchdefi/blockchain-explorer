import React from "react";
import { styled, css, theme } from "twin.macro";
import { keyframes } from "styled-components";

import glLogo from "src/assets/images/gl_logo.png";

export const LocalLoader = ({ fill }) => {
  return (
    <Wrapper fill={fill ? 1 : 0}>
      <AnimatedImg>
        <img src={glLogo} alt="loading-icon" />
      </AnimatedImg>
    </Wrapper>
  );
};

const Wrapper = styled.div(({ fill }) => [
  css`
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${fill ? "black" : theme`colors.bgPrimary`};
    width: 100%;
  `,
  fill &&
    css`
      height: 100vh;
    `,
]);

const pulse = keyframes`
  0% { transform: scale(1); }
  60% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const AnimatedImg = styled.div`
  animation: ${pulse} 800ms linear infinite;
  & > * {
    width: 150px;
  }
`;
