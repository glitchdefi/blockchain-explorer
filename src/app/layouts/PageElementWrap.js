import tw, { styled, css } from "twin.macro";

export const PageElementWrap = styled.div(() => [
  tw`
  px-8
  lg:px-16
  `,
  css`
    max-width: 1440px;
    margin: 0 auto;
  `,
]);
