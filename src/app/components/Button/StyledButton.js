import tw, { css, styled, theme } from "twin.macro";

export const StyledButton = styled.button(
  ({ isDark, isLoading, disabled, shadow, primary }) => [
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

    primary &&
      css`
        line-height: initial;
        border: 1px solid ${theme`colors.primary`};
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
          background-color: ${isDark
            ? theme`colors.secondary`
            : theme`colors.primary`};
          top: -1px;
          left: 3px;
        }

        &:after {
          background-color: ${isDark
            ? theme`colors.primary`
            : theme`colors.secondary`};
          left: -3px;
          top: 3px;
        }
      `,
    (isLoading || disabled) && tw`disabled:cursor-not-allowed`,
  ]
);
