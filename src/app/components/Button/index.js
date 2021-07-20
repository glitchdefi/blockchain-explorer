import React, { cloneElement, isValidElement } from "react";
import tw, { styled, theme } from "twin.macro";
import { Spinner } from "../LoadingIndicator/Spinner";
import { StyledButton } from "./StyledButton";
import { useTheme } from "src/hooks/useTheme";

const StartIconWrapper = styled.div(() => [tw`mr-2`]);
const EndIconWrapper = styled.div(() => [tw`ml-2`]);

export function Button(props) {
  const { startIcon, endIcon, isLoading, disabled, children, ...rest } = props;
  const isDisabled = isLoading || disabled;
  const { isDark } = useTheme();

  return (
    <StyledButton
      isDark={isDark}
      isLoading={isLoading}
      disabled={isDisabled}
      {...rest}
    >
      <>
        {isLoading && <Spinner tw="mr-2" stroke={theme`colors.white`} />}
        {isValidElement(startIcon) && (
          <StartIconWrapper>{cloneElement(startIcon)}</StartIconWrapper>
        )}
        {children}
        {isValidElement(endIcon) && (
          <EndIconWrapper>{cloneElement(endIcon)}</EndIconWrapper>
        )}
      </>
    </StyledButton>
  );
}
