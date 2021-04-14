import React from "react";
import tw, { styled, css, theme } from "twin.macro";
import PropTypes from "prop-types";
import { Link } from "../../../../Link";

export function Submenu({ items }) {
  return (
    <>
      <Wrapper className="horizontal-menu-submenu">
        {items.map((item, i) => {
          const { label, href } = item;
          return (
            <SubMenuItem key={i}>
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

const Wrapper = styled.ul(() => [
  tw`absolute mt-2 w-full md:w-48 rounded hidden shadow-lg bg-oxfordBlue`,
  css`
    & {
      border-top-color: ${theme`colors.primary`};
      border-top-width: 5px;
      border-top-style: solid;
    }
  `,
]);

export const SubMenuItem = tw.li`
  grid 
  pl-6 
  pr-2 
  py-2 
  cursor-pointer 
  select-none 
  last:rounded-b 
  hover:bg-gray-800
`;
