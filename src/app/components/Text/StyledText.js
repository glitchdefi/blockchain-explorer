import { css, styled, theme } from "twin.macro";

export const StyledText = styled.div(({ size, color, bold, textTransform }) => [
  css`
    color: ${color || theme`colors.textPrimary`};
    font-size: ${size || theme`fontSize.base`};
    font-weight: ${bold ? 700 : 400};
    word-break: break-word;
  `,

  textTransform &&
    css`
      text-transform: ${textTransform};
    `,
]);
