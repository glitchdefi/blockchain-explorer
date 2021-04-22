import React from "react";
import tw, { css, styled } from "twin.macro";

export function DropdownItem({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div(() => [
  tw`p-3
     cursor-pointer
     hover:opacity-80
    `,
  css`
    border-bottom-width: 1px;
    border-bottom-color: rgba(255, 255, 255, 0.1);
    border-bottom-style: solid;
  `,
]);
