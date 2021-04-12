import tw, { styled, css } from "twin.macro";
import bg from "./assets/g_bg.jpg";

export const Container = styled.div(() => [
  tw`relative w-full h-screen`,
  css`
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `,
]);
