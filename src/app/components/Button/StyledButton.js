import tw, { css, styled, theme } from "twin.macro";

export const StyledButton = styled.button(({ isLoading, disabled, shadow }) => [
  tw`
  text-color7 
  text-sm 
  font-mono
  leading-none 
  border-none
  outline-none 
  p-3 
  items-center 
  justify-center 
  cursor-pointer 
  hover:opacity-90
  relative
  bg-transparent
  `,

  css`
    transition: background-color 0.2s;
  `,

  shadow &&
    css`
      div {
        position: relative;
        z-index: 2;
      }

      &:before,
      &:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        z-index: 0;
        transition: all ease-in-out 0.2s;
      }

      &:before {
        background-color: ${theme`colors.secondary`};
        top: -1px;
        left: 3px;
      }

      &:after {
        background-color: ${theme`colors.primary`};
        left: -3px;
        top: 3px;
      }
    `,
  (isLoading || disabled) && tw`disabled:cursor-not-allowed`,
]);
