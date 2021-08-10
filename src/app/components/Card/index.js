import React from "react";
import tw, { styled, css, theme } from "twin.macro";

export function Card({ children, ...props }) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.div(() => [
  tw`flex p-5 items-center bg-color1`,
  css`
    border: 1px solid ${theme`colors.color2`};
  `,
]);
