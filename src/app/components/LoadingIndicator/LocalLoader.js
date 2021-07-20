import React from "react";
import { styled, css } from "twin.macro";
import { keyframes } from "styled-components";

import { useTheme } from "src/hooks/useTheme";

export const LocalLoader = ({ fill }) => {
  const { isDark } = useTheme();
  return (
    <Wrapper fill={fill ? 1 : 0} tw="bg-color2 dark:bg-color1">
      <AnimatedImg>
        <img
          src={isDark ? "/images/gl_logo.png" : "/images/gl_logo_light.png"}
          alt="loading-icon"
        />
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
