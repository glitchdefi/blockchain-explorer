import tw, { styled, css } from "twin.macro";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)(() => [
  tw`
  relative
  text-base 
  text-textPrimary
  font-normal
  normal-case
  inline-block
  cursor-pointer
  select-none
  no-underline
  hover:text-gray-400
  `,

  css`
    word-break: break-word;
  `,
]);
