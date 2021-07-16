import { styled, css } from "twin.macro";
import bg from "./assets/g_bg.jpg";

export const Container = styled.div(() => [
  css`
    background-image: url(${bg});
    background-size: cover;
    background-attachment: fixed;
  `,
]);
