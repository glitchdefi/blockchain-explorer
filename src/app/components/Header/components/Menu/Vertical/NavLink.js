import React, { useState } from "react";
import tw, { styled, css, theme } from "twin.macro";
import PropTypes from "prop-types";

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
    <Wrapper>
      <LinkWrapper onClick={onToggle}>
        {href === "#" ? (
          <Text isActive={isActive}>{children}</Text>
        ) : (
          <CustomLink href={href} isActive={isActive}>
            {children}
          </CustomLink>
        )}
        {isSubmenu && <DropdownIcon />}
      </LinkWrapper>
      {isSubmenu && isShowSubMenu && <Submenu items={items} />}
    </Wrapper>
  );
}

NavLink.propTypes = {
  isActive: PropTypes.bool,
  link: PropTypes.object,
  children: PropTypes.element,
};

const Wrapper = tw.li`
  relative 
  w-full 
  inline-block 
  items-center 
  justify-center
  hover:bg-bg5
`;

const CustomLink = styled(Link)(({ isActive }) => [
  tw`flex w-full items-center px-6 py-3 hover:text-white`,
  isActive &&
    css`
      color: ${theme`colors.primary`} !important;
    `,
]);

const Text = styled(TextBase)(({ isActive }) => [
  tw`flex w-full items-center px-6 py-3 hover:text-white cursor-pointer`,
  isActive &&
    css`
      color: ${theme`colors.primary`} !important;
    `,
]);

const LinkWrapper = tw.div`flex pr-8 items-center`;
