import React from "react";
import tw, { styled } from "twin.macro";
import { Button as ButtonBase } from "../Button";

export function DropdownLabel({ children, onClick, ...props }) {
  return (
    <ButtonWrapper onClick={onClick} {...props}>
      <Wrapper>{children}</Wrapper>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled(ButtonBase)(() => [
  tw`border
  border-primary
  border-solid
  px-5
  `,
]);

const Wrapper = tw.div`
 relative
 flex
 flex-wrap
 items-center
 justify-between
 w-64
`;
