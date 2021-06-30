import tw, { styled } from "twin.macro";

export const Input = styled.input(() => [
  tw`
  bg-bg3
  py-2
  px-4
  rounded
  block
  border-none
  outline-none
  placeholder-textSecondary
  text-base
  text-textPrimary
  font-mono
  focus:shadow-lg
  `,
]);
