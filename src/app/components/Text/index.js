import tw, { css, styled, theme } from "twin.macro";
import PropTypes from "prop-types";
export function Text({ children, ...props }) {
  return <StyledText {...props}>{children}</StyledText>;
}

const StyledText = styled.div(({ size, color, bold, textTransform }) => [
  css`
    color: ${color || theme`colors.textPrimary`};
    font-size: ${size || theme`fontSize.base`};
    font-weight: ${bold ? "bold" : 400};
    word-break: break-word;
  `,

  textTransform &&
    css`
      text-transform: ${textTransform};
    `,
]);
Text.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  bold: PropTypes.bool,
  textTransform: PropTypes.string,
};

Text.defaultProps = {};
