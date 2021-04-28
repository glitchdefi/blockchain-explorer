import tw, { css, styled } from "twin.macro";

export const Text = styled.div(() => [
  tw`
  text-sm 
  text-black 
  dark:text-white 
  font-normal
  normal-case
  `,

  css`
    word-break: break-word;
  `,
]);
