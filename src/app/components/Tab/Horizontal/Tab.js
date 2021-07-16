import React from "react";
import tw, { styled, css, theme } from "twin.macro";
import { Button } from "../../Button";
import { Text } from "../../Text";
import { useTabState } from "../hooks/useTabState";

export function Tab({ children, evtKey, onClick, labelStyles, ...props }) {
  const { isActive, onChangeTab } = useTabState(evtKey);
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
        css={[tw`text-sm md:text-tiny lg:text-base`, labelStyles]}
      >
        {children}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled(Button)(({ isActive }) => [
  tw`
    w-full
    py-5
    rounded-none
  `,

  css`
    border: 1px solid ${theme`colors.color2`};
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;

    .tab-label {
      color: ${isActive
        ? theme`colors.primary`
        : theme`colors.color6`} !important;
      word-break: inherit;
    }
  `,

  isActive &&
    css`
      background-color: ${theme`colors.color2`};
      border-bottom: 2px solid ${theme`colors.primary`};
    `,
]);
