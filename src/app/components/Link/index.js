import tw, { styled, css, theme } from "twin.macro";
import PropTypes from "prop-types";
import { Text } from "../Text";

const StyledLink = styled(Text)(({ isActive }) => [
  tw`relative cursor-pointer select-none no-underline hover:text-gray-400`,
  isActive &&
    css`
      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 80%;
        height: 4px;
        background: ${theme`colors.primary`};
      }
    `,
]);

export function Link({ children, href, ...props }) {
  return (
    <StyledLink as="a" href={href} {...props}>
      {children}
    </StyledLink>
  );
}

Link.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  href: PropTypes.string,
  props: PropTypes.object,
};
