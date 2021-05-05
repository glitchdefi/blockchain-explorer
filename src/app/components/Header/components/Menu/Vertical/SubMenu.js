import React from "react";
import tw, { styled, css, theme } from "twin.macro";
import PropTypes from "prop-types";
import { Link } from "src/app/components/Link";
import { useLocation } from "react-router";

export function Submenu({ items }) {
  const location = useLocation();

  return (
    <>
      <Wrapper>
        {items.map((item, i) => {
          const { label, href } = item;
          return (
            <SubMenuItem isActive={href === location.pathname} key={i}>
              <Link href={href}>{label}</Link>
            </SubMenuItem>
          );
        })}
      </Wrapper>
    </>
  );
}

Submenu.propTypes = {
  items: PropTypes.array,
};

Submenu.defaultProps = {
  items: [],
};

const Wrapper = tw.ul`
  w-full 
  shadow-lg 
  bg-bgPrimary
`;

export const SubMenuItem = styled.li(({ isActive }) => [
  tw`
    grid
    ml-8
    px-5
    py-3 
    cursor-pointer 
    select-none
    `,
  css`
    border-left-color: ${theme`colors.primary`};
    border-left-width: 4px;
    border-left-style: solid;

    a {
      color: ${isActive ? theme`colors.primary` : "white"} !important;
    }
  `,
]);
