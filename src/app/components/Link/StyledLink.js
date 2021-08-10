import tw, { styled, css, theme } from "twin.macro";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)(({ primary }) => [
  tw`
  relative
  text-base
  font-normal
  normal-case
  inline-block
  cursor-pointer
  select-none
  no-underline
  `,

  css`
    word-break: break-word;
    color: ${primary ? theme`colors.primary` : theme`colors.color7`};
  `,
]);
