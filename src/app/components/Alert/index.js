import React from "react";
import { css, styled, theme } from "twin.macro";
import { Button } from "../Button";
import { Text } from "../Text";

import { CloseIcon } from "./icons/Close";
import { getThemeColor, getIcon } from "./utils";

export const Alert = ({ title, children, variant, onClick }) => {
  const Icon = getIcon(variant);

  return (
    <StyledAlert>
      <IconLabel variant={variant} hasDescription={!!children}>
        <Icon color="currentColor" width="24px" />
      </IconLabel>

      <Details hasHandler={!!onClick}>
        <Text bold size={theme`fontSize.base`} tw="mb-1">
          {title}
        </Text>
        {typeof children === "string" ? (
          <Text size={theme`fontSize.sm`} as="p">
            {children}
          </Text>
        ) : (
          children
        )}
      </Details>

      {onClick && (
        <CloseHandler>
          <Button tw="p-0" onClick={onClick}>
            <CloseIcon width="24px" color={theme`colors.primary`} />
          </Button>
        </CloseHandler>
      )}
    </StyledAlert>
  );
};

const StyledAlert = styled.div`
  display: flex;
  position: relative;
  background-color: ${theme`colors.bgPrimary`};
  border-radius: 16px;
  border: 1px solid ${getThemeColor({ variant: "warning" })};
  box-shadow: 0px 20px 36px -8px ${theme`colors.bg7`};
`;

const IconLabel = styled.div(({ variant }) => [
  css`
    background-color: ${getThemeColor({ variant })};
    border-radius: 15px 0 0 15px;
    color: ${theme`colors.white`};
    padding: 12px;
    justify-content: center;
    align-items: center;
    display: flex;
  `,
]);

const Details = styled.div(({ hasHandler }) => [
  css`
    flex: 1;
    padding-bottom: 12px;
    padding-left: 12px;
    padding-right: ${hasHandler ? `${withHandlerSpacing}px` : "12px"};
    padding-top: 12px;
  `,
]);

const withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position

const CloseHandler = styled.div`
  border-radius: 0 16px 16px 0;
  right: 8px;
  position: absolute;
  top: 8px;
`;
