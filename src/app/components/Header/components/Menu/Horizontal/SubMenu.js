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
              <Link tw="pl-6 pr-2 py-2" href={href}>{label}</Link>
            </SubMenuItem>
          );
        })}
      </Wrapper>
    </>
  );
}

const Wrapper = tw.ul`absolute mt-2 w-full md:w-48 hidden rounded shadow-lg bg-big-stone`;
export const SubMenuItem = styled.li(({ isActive }) => [
  tw`
  grid 
  cursor-pointer 
  select-none 
  first:rounded-t
  last:rounded-b
  hover:bg-white-10
  transition duration-200
`,
  isActive && tw`bg-white-10`,
]);
Submenu.propTypes = {
  items: PropTypes.array,
  isActive: PropTypes.bool,
};

Submenu.defaultProps = {
  items: [],
};
