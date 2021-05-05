import tw, { css, styled } from "twin.macro";

export const StyledButton = styled.button(({ isLoading, disabled }) => [
  tw`
  inline-flex 
  text-textPrimary 
  text-sm 
  font-mono
  leading-none 
  border-none 
  rounded
  outline-none 
  p-3 
  items-center 
  justify-center 
  cursor-pointer 
  hover:opacity-90
  bg-transparent
  `,

  css`
    transition: background-color 0.2s;
  `,

  (isLoading || disabled) && tw`disabled:cursor-not-allowed`,
]);
