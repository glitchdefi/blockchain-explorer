import React from "react";
import tw, { styled, css, theme } from "twin.macro";
import { Button } from "../../Button";
import { Text } from "../../Text";
import { useTabState } from "../hooks/useTabState";
import { useTheme } from "src/hooks/useTheme";

export function Tab({ children, evtKey, onClick, labelStyles, ...props }) {
  const { isActive, onChangeTab } = useTabState(evtKey);
  const { isDark } = useTheme();

  return (
    <Wrapper
      isActive={isActive}
      isDark={isDark}
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

const Wrapper = styled(Button)(({ isActive, isDark }) => [
  tw`
    py-5
    rounded-none
    bg-transparent
    m-0
  `,

  css`
    border: 1px solid ${theme`colors.color2`};

    .tab-label {
      color: ${isActive
        ? theme`colors.primary`
        : theme`colors.color6`} !important;
      word-break: initial;
    }
  `,

  isActive &&
    css`
      background-color: ${isDark ? theme`colors.color2` : theme`colors.color1`};
      border-bottom: 2px solid ${theme`colors.primary`};
    `,
]);
