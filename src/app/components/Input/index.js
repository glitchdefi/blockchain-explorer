import tw, { styled, css, theme } from "twin.macro";

export const Input = styled.input(() => [
  tw`
  py-2
  px-4
  block
  outline-none!
  shadow-none!
  placeholder-color4
  text-base
  text-color7
  bg-transparent
  font-mono
  `,

  css`
    border: 1px solid ${theme`colors.color3`};
    border-radius: 0px;
    background-clip: padding-box;
  `,
]);
