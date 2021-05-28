import React from "react";
import { useLocation } from "react-router";
import tw, { styled, css } from "twin.macro";
import { mainNav as links } from "../../../../../../constants/navConfig";

// Sub Components
import { NavLink } from "./NavLink";

export function NavMenu() {
  const location = useLocation();

  return (
    <Wrapper>
      {links.map((link, i) => {
        const items = link?.items;
        const isActive = items?.length
          ? items.findIndex((sub) => sub.href === location.pathname) >= 0
          : link.href === location.pathname;

        return (
          <NavLink key={i} isActive={isActive} link={link}>
            {link.label}
          </NavLink>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.ul(() => [
  tw`lg:flex flex-wrap items-center justify-center m-0 hidden my-5`,
  css`
    .horizontal-menu-item:hover {
      .horizontal-menu-submenu {
        display: block;
      }
    }
  `,
]);
