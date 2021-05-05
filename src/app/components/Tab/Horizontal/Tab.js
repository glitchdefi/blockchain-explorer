import React from "react";
import tw, { styled, css, theme } from "twin.macro";
import { Button } from "../../Button";
import { Text } from "../../Text";
import { useTabState } from "../hooks/useTabState";

export function Tab({ children, onClick, labelStyles, ...props }) {
  const { isActive, onChangeTab } = useTabState();
  return (
    <Wrapper
      isActive={isActive}
      onClick={() => {
        onChangeTab();
        onClick && onClick();
      }}
      {...props}
    >
      <Text
        className="tab-label"
        css={[
          tw`text-sm md:text-tiny lg:text-base uppercase font-bold text-primary!`,
          labelStyles,
        ]}
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
    lg:py-4
  `,

  css`
    border-radius: 5px 5px 0px 0px;
    background-color: ${theme`colors.bg6`};
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;

    .tab-label {
      color: ${isActive ? "white" : theme`colors.primary`} !important;
      opacity: ${isActive ? "100%" : "60%"};
      word-break: inherit;
    }
  `,

  isActive && tw`bg-gradient-to-r from-primary to-secondary text-white`,
]);
