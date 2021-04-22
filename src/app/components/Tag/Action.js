import { styled, css } from "twin.macro";
import { Text } from "../Text";
import { getColor } from "./utils";

export const Action = styled(Text)(({ type }) => [
  css`
    color: ${getColor(type)} !important;
  `,
]);
