import React from "react";
import { useLocation } from "react-router";
import tw, { styled, css } from "twin.macro";
import { mainNav as links } from "../../../../constants/navConfig";

// Sub Components
import { NavLink } from "./NavLink";

const Wrapper = styled.ul(() => [
  tw`flex flex-row col-span-3 w-full items-center justify-center m-0`,
  css`
    .nav-menu-item:hover {
      .nav-submenu {
        display: block;
      }
    }
  `,
]);

export function NavMenu() {
  const location = useLocation();

  return (
    <Wrapper>
      {links.map((link) => {
        const isActive = link.href === location.pathname;
        return (
          <NavLink isActive={isActive} link={link}>
            {link.label}
          </NavLink>
        );
      })}
    </Wrapper>
  );
}
