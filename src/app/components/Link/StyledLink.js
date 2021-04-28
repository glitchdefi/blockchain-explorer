import tw from "twin.macro";
import { Text } from "../Text";

export const StyledLink = tw(
  Text
)`inline-block relative cursor-pointer select-none no-underline hover:text-gray-400`;
