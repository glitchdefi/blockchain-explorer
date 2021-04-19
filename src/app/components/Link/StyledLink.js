import tw, { styled, css, theme } from "twin.macro";
import { Text } from "../Text";

export const StyledLink = styled(Text)(({ isActive }) => [
  tw`relative cursor-pointer select-none no-underline hover:text-gray-400`,
  isActive &&
    css`
      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 80%;
        height: 4px;
        background: ${theme`colors.primary`};
      }
    `,
]);
