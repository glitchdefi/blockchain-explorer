import React, { cloneElement, isValidElement } from "react";
import tw, { styled } from "twin.macro";
import { StyledButton } from "./StyledButton";

const StartIconWrapper = styled.div(() => [tw`mr-2`]);
const EndIconWrapper = styled.div(() => [tw`ml-2`]);

export function Button(props) {
  const { startIcon, endIcon, isLoading, disabled, children, ...rest } = props;
  const isDisabled = isLoading || disabled;

  return (
    <StyledButton isLoading={isLoading} disabled={isDisabled} {...rest}>
      <>
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
