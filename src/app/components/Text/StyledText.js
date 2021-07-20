import { css, styled, theme } from "twin.macro";

export const StyledText = styled.div(({ size, color, bold, textTransform }) => [
  css`
    color: ${color || theme`colors.color7`};
    font-size: ${size || theme`fontSize.base`};
    font-weight: ${bold ? 600 : 400};
    word-break: break-word;
  `,

  textTransform &&
    css`
      text-transform: ${textTransform};
    `,
]);
