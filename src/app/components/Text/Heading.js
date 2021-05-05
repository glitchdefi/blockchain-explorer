import tw, { styled } from "twin.macro";
import { Text } from "./index";

export const Heading = styled(Text)(() => [
  tw`
  text-16 
  font-bold
  `,
]);
