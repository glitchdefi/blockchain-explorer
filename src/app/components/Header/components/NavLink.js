import React from "react";
import tw, { styled } from "twin.macro";
import PropTypes from "prop-types";

// Components
import { Link } from "../../Link";
import { Submenu } from "./SubMenu";

const Wrapper = styled.li(() => [
  tw`relative inline-block px-8 py-2 items-center justify-center`,
]);

export function NavLink({ isActive, link, children }) {
  const { href, items } = link || {};
  const isSubmenu = items?.length;

  return (
    <Wrapper className="nav-menu-item">
      <Link href={href} isActive={isActive}>
        {children}
      </Link>
      {isSubmenu && <Submenu items={items} />}
    </Wrapper>
  );
}

NavLink.propTypes = {
  isActive: PropTypes.bool,
  link: PropTypes.object,
  children: PropTypes.element,
};
