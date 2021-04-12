import tw, { css, styled } from "twin.macro";

export const StyledButton = styled.button(({ isLoading, disabled }) => [
  tw`
  inline-flex 
  text-white 
  text-sm 
  leading-none 
  border-none 
  rounded
  outline-none 
  px-3 py-2 
  items-center 
  justify-center 
  cursor-pointer 
  hover:opacity-90
  `,

  css`
    transition: background-color 0.2s;
  `,  

  (isLoading || disabled) && tw`disabled:cursor-not-allowed`,
]);
