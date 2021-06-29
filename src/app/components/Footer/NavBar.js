import React from "react";
import tw, { styled } from "twin.macro";

import { getFooterNavIds } from "src/constants/refIds";

import { footerNav as links } from "../../../constants/navConfig";
import { Link } from "../Link";

const Wrapper = tw.ul`
  mt-6 
  col-span-2 
  self-start 
  justify-end 
  list-none 
  hidden 
  lg:flex
`;

const LinkWrapper = styled.li(() => [tw`pl-8`]);

function NavBar() {
  return (
    <Wrapper>
      {links.map((link, i) => {
        return (
          <LinkWrapper key={i}>
            <Link id={getFooterNavIds(link.href)} href={link.href}>
              {link.label}
            </Link>
          </LinkWrapper>
        );
      })}
    </Wrapper>
  );
}

export default NavBar;
