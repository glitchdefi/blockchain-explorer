import React from "react";
import tw, { styled, css, theme } from "twin.macro";
import PropTypes from "prop-types";

// Constants
import { getHomeNavIds } from "src/constants/refIds";

// Components
import { Link } from "src/app/components/Link";
import { Submenu } from "./SubMenu";
import { DropdownIcon } from "../../../icons";
export function NavLink({ isActive, link, children }) {
  const { href, items } = link || {};
  const isSubmenu = items?.length;

  return (
    <Wrapper isActive={isActive} className="horizontal-menu-item">
      <LinkWrapper isActive={isActive}>
        <Link
          id={getHomeNavIds(children?.toLowerCase())}
          className="menu-item-link"
          href={href}
        >
          {children}
        </Link>
        {isSubmenu && <DropdownIcon tw="mb-1" />}
      </LinkWrapper>

      {isSubmenu && <Submenu items={items} />}
    </Wrapper>
  );
}

const Wrapper = styled.li(() => [
  tw`inline-block px-6 py-2 items-center justify-center`,
]);

const LinkWrapper = styled.div(({ isActive }) => [
  tw`flex items-center!`,
  css`
    transition: all 0.3s ease;
    cursor: pointer;

    svg {
      transform: rotate(0deg);
      transition: transform 300ms;
      color: ${theme`colors.color7`};
    }

    &:hover {
      .menu-item-link {
        color: ${theme`colors.primary`};
      }

      svg {
        color: ${theme`colors.primary`} !important;
        transform: rotate(-180deg);
      }
    }
  `,

  isActive &&
    css`
      .menu-item-link {
        color: ${theme`colors.primary`};
      }

      svg {
        color: ${theme`colors.primary`} !important;
      }
    `,
]);
NavLink.propTypes = {
  isActive: PropTypes.bool,
  link: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
