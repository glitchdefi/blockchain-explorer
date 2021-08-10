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
      <LinkWrapper>
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

const Wrapper = styled.li(({ isActive }) => [
  tw`inline-block px-6 py-2 items-center justify-center`,
  css`
    svg {
      transform: rotate(0deg);
      transition: transform 300ms;
    }

    .menu-item-link:after {
      display: block;
      content: "";
      width: 0;
      height: 2px;
      background: ${theme`colors.primary`};
      transition: width 0.2s;
      margin-top: 14px;
    }

    .menu-item-link:hover:after {
      width: 100%;
      transition: width 0.2s;
    }

    .menu-item-link:hover {
      color: ${theme`colors.primary`};;
    }

    &:hover {
      svg {
        color: ${theme`colors.primary`} !important;
        transform: rotate(-180deg);
      }

      .horizontal-menu-submenu a {
        color: white;
      }
    }
  `,

  isActive &&
    css`
      .menu-item-link:after {
        display: block;
        content: "";
        width: 100%;
        height: 2px;
        background: ${theme`colors.primary`};
        margin-top: 14px;
      }

      .menu-item-link {
        color: ${theme`colors.primary`};
      }
    `,
]);

const LinkWrapper = tw.div`flex items-center!`;
NavLink.propTypes = {
  isActive: PropTypes.bool,
  link: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
