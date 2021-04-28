import tw, { styled } from "twin.macro";
import { Text } from "./index";

export const Heading = styled(Text)(() => [
  tw`
  text-16 
  text-black 
  dark:text-white 
  font-bold
  `,
]);
