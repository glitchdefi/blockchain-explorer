import { styled, css } from "twin.macro";
import bg from "./assets/g_bg.jpg";

export const Container = styled.div(() => [
  css`
    background-image: url(${bg});
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-attachment: fixed;
  `,
]);
