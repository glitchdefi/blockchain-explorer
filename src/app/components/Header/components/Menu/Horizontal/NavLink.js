import React from "react";
import tw, { styled, css } from "twin.macro";
import PropTypes from "prop-types";

// Components
import { Link } from "../../../../Link";
import { Submenu } from "./SubMenu";
import { DropdownIcon } from "../../../icons";

export function NavLink({ isActive, link, children }) {
  const { href, items } = link || {};
  const isSubmenu = items?.length;

  return (
    <Wrapper className="horizontal-menu-item">
      <LinkWrapper>
        <Link href={href} isActive={isActive}>
          {children}
        </Link>
        {isSubmenu && <DropdownIcon />}
      </LinkWrapper>

      {isSubmenu && <Submenu items={items} />}
    </Wrapper>
  );
}

NavLink.propTypes = {
  isActive: PropTypes.bool,
  link: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

const Wrapper = styled.div(() => [
  tw`relative inline-block px-8 py-2 items-center justify-center`,
  css`
    svg {
      transform: rotate(0deg);
      transition: transform 300ms;
    }

    &:hover {
      a {
        color: #9ca3af;
      }
      
      svg {
        color: #9ca3af !important;
        transform: rotate(-180deg);
      }

      .horizontal-menu-submenu a {
        color: white;
      }
    }
  `,
]);

const LinkWrapper = tw.div`flex items-center!`;
