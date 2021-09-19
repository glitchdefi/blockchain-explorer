import tw, { styled, css } from "twin.macro";

export const Container = styled.div(({ isDark }) => [
  isDark
    ? css`
        background-image: url(/images/g_bg.webp);
        background-size: cover;
        background-attachment: fixed;
      `
    : tw`bg-color9`,
]);
