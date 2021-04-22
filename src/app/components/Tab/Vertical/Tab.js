import React from "react";
import tw, { styled, css, theme } from "twin.macro";
import { Button } from "../../Button";
import { Text } from "../../Text";
import { useTabState } from "../hooks/useTabState";

export function Tab({ children, onClick, ...props }) {
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
      <Text className="tab-label" tw="text-14">
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
    background-color: ${isActive
      ? "rgba(255, 255, 255, 0.1)"
      : theme`colors.black-pearl`};

    border-radius: 0px;

    &:first-child {
      border-radius: 5px 5px 0px 0px;
    }

    &:last-child {
      border-radius: 0px 0px 5px 5px;
    }

    .tab-label {
      color: ${isActive
        ? theme`colors.primary`
        : "rgba(255,255,255,0.7)"} !important;

      font-weight: ${isActive ? "bold" : "normal"};
    }
  `,

  isActive &&
    css`
      &:after {
        content: "";
        display: block;
        position: absolute;
        right: 0;
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-right: 20px solid ${theme`colors.black-pearl`};
        border-bottom: 10px solid transparent;
      }
    `,
]);
