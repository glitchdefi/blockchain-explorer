import React from "react";
import { useLocation } from "react-router";
import tw, { styled, css, theme } from "twin.macro";
import PropTypes from "prop-types";
import { Link } from "src/app/components/Link";
export function Submenu({ isActive, items }) {
  const location = useLocation();

  return (
    <>
      <Wrapper className="horizontal-menu-submenu">
        {items.map((item, i) => {
          const { label, href } = item;
          return (
            <SubMenuItem isActive={href === location.pathname} key={i}>
              <Link tw="pl-4 pr-2 py-2" href={href}>
                {label}
              </Link>
            </SubMenuItem>
          );
        })}
      </Wrapper>
    </>
  );
}

const Wrapper = tw.ul`absolute mt-2 w-full md:w-48 hidden shadow-lg bg-bgColor1 z-50`;
export const SubMenuItem = styled.li(({ isActive }) => [
  tw`
  grid 
  cursor-pointer 
  select-none 
  first:rounded-t
  last:rounded-b
  transition duration-200
`,
  css`
    &:hover {
      a {
        color: ${theme`colors.primary`};
      }
    }
  `,
  isActive &&
    css`
      a {
        color: ${theme`colors.primary`};
      }
    `,
]);
Submenu.propTypes = {
  items: PropTypes.array,
  isActive: PropTypes.bool,
};

Submenu.defaultProps = {
  items: [],
};
