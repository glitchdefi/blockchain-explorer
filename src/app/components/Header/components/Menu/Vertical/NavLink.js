import React, { useState } from "react";
import tw, { styled, css, theme } from "twin.macro";
import PropTypes from "prop-types";

import { getHomeNavIds } from "src/constants/refIds";

// Components
import { Text as TextBase } from "src/app/components/Text";
import { Link } from "src/app/components/Link";
import { Submenu } from "./SubMenu";
import { DropdownIcon } from "../../../icons";

export function NavLink({ isActive, link, children }) {
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);

  const { href, items } = link || {};
  const isSubmenu = items?.length;

  const onToggle = () => {
    setIsShowSubMenu(!isShowSubMenu);
  };

  return (
    <Wrapper isActive={isActive}>
      <div tw="flex pr-8 items-center cursor-pointer" onClick={onToggle}>
        {href === "#" ? (
          <Text isActive={isActive}>{children}</Text>
        ) : (
          <CustomLink
            id={getHomeNavIds(children?.toLowerCase())}
            href={href}
            isActive={isActive}
          >
            {children}
          </CustomLink>
        )}
        {isSubmenu && <DropdownIcon />}
      </div>
      {isSubmenu && <Submenu items={items} open={isShowSubMenu} />}
    </Wrapper>
  );
}

NavLink.propTypes = {
  isActive: PropTypes.bool,
  link: PropTypes.object,
  children: PropTypes.any,
};

const Wrapper = styled.li(({ isActive }) => [
  tw`
  relative 
  w-full 
  inline-block 
  items-center 
  justify-center
`,

  css`
    &:hover {
      svg {
        color: ${theme`colors.primary`};
      }
    }
  `,

  isActive &&
    css`
      svg {
        color: ${theme`colors.primary`};
      }
    `,
]);

const CustomLink = styled(Link)(({ isActive }) => [
  tw`flex w-full items-center px-6 py-3`,
  css`
    &:hover {
      a {
        color: ${theme`colors.primary`};
      }
    }
  `,
  isActive &&
    css`
      color: ${theme`colors.primary`} !important;
    `,
]);

const Text = styled(TextBase)(({ isActive }) => [
  tw`flex w-full items-center px-6 py-3 hover:text-primary`,
  isActive &&
    css`
      color: ${theme`colors.primary`} !important;
    `,
]);
