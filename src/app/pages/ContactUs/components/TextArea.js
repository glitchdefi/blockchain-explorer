import tw, { styled, css, theme } from "twin.macro";

export const TextArea = styled.textarea(({ hasError }) => [
  tw`outline-none w-full p-4 placeholder-color4 text-base text-color7 mt-2 bg-transparent font-mono`,
  css`
    border: 1px solid ${hasError ? theme`colors.fail` : theme`colors.color3`};
  `,
]);
