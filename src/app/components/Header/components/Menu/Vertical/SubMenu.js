import React from "react";
import tw, { styled, css, theme } from "twin.macro";
import PropTypes from "prop-types";
import { Link } from "src/app/components/Link";
import { useLocation } from "react-router";

export function Submenu({ items, open }) {
  const location = useLocation();

  return (
    <>
      <Wrapper open={open}>
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

const Wrapper = styled.ul(({ open }) => [
  tw`
  w-full
  bg-color1
`,

  css`
    transition: all 0.3s ease-in-out;
    height: ${open ? "135px" : "0px"};
    overflow: hidden;
  `,
]);

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
};

Submenu.defaultProps = {
  items: [],
};
