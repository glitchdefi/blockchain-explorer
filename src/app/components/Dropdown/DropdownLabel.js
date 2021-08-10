import React from "react";
import tw, { styled, css } from "twin.macro";
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
  border-color3
  border-solid
  px-5
  rounded-none
  `,
  css`
    padding: 9.5px 16px;
  `
]);

const Wrapper = tw.div`
 relative
 flex
 flex-wrap
 items-center
 justify-between
`;
