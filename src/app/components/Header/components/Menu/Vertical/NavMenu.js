import React from "react";
import { useLocation } from "react-router";
import tw, { styled } from "twin.macro";
import { mainNav as links } from "src/constants/navConfig";

// Sub Components
import { NavLink } from "./NavLink";

export function NavMenu() {
  const location = useLocation();

  return (
    <Wrapper>
      {/* Menu */}
      <UlWrapper>
        {links.map((link, i) => {
          const items = link?.items;
          const isActive = items?.length
            ? items.findIndex((sub) => sub.href === location.pathname) >= 0
            : link.href === location.pathname ||
              location.pathname.includes(link.child);
          return (
            <NavLink key={i} isActive={isActive} link={link}>
              {link.label}
            </NavLink>
          );
        })}
      </UlWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div(() => [
  tw`
  flex
  flex-col
  w-full 
  lg:hidden 
  mt-2
  bg-color1
`,
]);

const UlWrapper = tw.ul`
  flex 
  flex-col 
  w-full
  items-center 
  justify-center 
`;
