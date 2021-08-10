import React from "react";
import { css, styled, theme } from "twin.macro";
import { Button } from "../Button";
import { Text } from "../Text";

import { CloseIcon } from "./icons/Close";
import { getThemeColor, getIcon } from "./utils";
import { useTheme } from "src/hooks/useTheme";

export const Alert = ({ title, children, variant, onClick }) => {
  const { isDark } = useTheme();
  const Icon = getIcon(variant);

  return (
    <StyledAlert
      isDark={isDark}
      variant={variant}
      tw="bg-color9 dark:bg-color1"
    >
      <IconLabel variant={variant} hasDescription={!!children}>
        <Icon color="currentColor" width="24px" />
      </IconLabel>

      <Details hasHandler={!!onClick}>
        <Text
          bold
          size={theme`fontSize.base`}
          tw="mb-1"
          css={css`
            color: ${getThemeColor({ variant })};
          `}
        >
          {title}
        </Text>
        {typeof children === "string" ? (
          <Text
            css={css`
              color: ${getThemeColor({ variant })};
              font-size: ${theme`fontSize.sm`};
            `}
            as="p"
          >
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

const StyledAlert = styled.div(({ isDark, variant }) => [
  css`
    display: flex;
    position: relative;
    background-color: ${theme`colors.color1`};
    border: 1px solid ${getThemeColor({ variant })};
    box-shadow: 0px 20px 40px -8px ${isDark ? theme`colors.color1` : theme`colors.color3`};
  `,
]);

const IconLabel = styled.div(({ variant }) => [
  css`
    color: ${getThemeColor({ variant })};
    padding: 12px 12px 12px 24px;
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
