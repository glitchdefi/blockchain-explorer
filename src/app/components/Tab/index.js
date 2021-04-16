import React from "react";
import tw, { styled, css, theme } from "twin.macro";
import { Button } from "../Button";
import { Text } from "../Text";

export function Tab({ children, ...props }) {
  return (
    <Wrapper {...props}>
      <Text
        className="tab-label"
        tw="text-14 uppercase font-bold text-primary!"
      >
        {children}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled(Button)(({ isActive }) => [
  tw`
    w-full
    py-3
  `,

  css`
    border-radius: 5px 5px 0px 0px;
    background-color: ${theme`colors.oxford-blue-2`};

    .tab-label {
      color: ${isActive ? "white" : theme`colors.primary`} !important;
      opacity: ${isActive ? "100%" : "60%"};
    }
  `,

  isActive && tw`bg-gradient-to-r from-primary to-secondary text-white`,
]);
