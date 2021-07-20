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
              <Link tw="pl-6 pr-2 py-2" href={href}>
                {label}
              </Link>
            </SubMenuItem>
          );
        })}
      </Wrapper>
    </>
  );
}

const Wrapper = tw.ul`absolute mt-2 w-full md:w-48 hidden rounded shadow-lg bg-color1`;
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
      background-color: rgba(255, 255, 255, 0.15);
    }
  `,
  isActive &&
    css`
      background-color: rgba(255, 255, 255, 0.15);
    `,
]);
Submenu.propTypes = {
  items: PropTypes.array,
  isActive: PropTypes.bool,
};

Submenu.defaultProps = {
  items: [],
};
