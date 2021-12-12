import React from "react";
import tw, { styled } from "twin.macro";

import { getFooterNavIds } from "src/constants/refIds";

import { footerNav as links } from "../../../constants/navConfig";
import { Link } from "../Link";

const Wrapper = tw.ul`
  flex-1
  items-end
  justify-end 
  list-none
  lg:flex
`;

const LinkWrapper = styled.li(() => [tw`pl-0`]);

function NavBar() {
  return (
    <Wrapper>
      {links.map((link, i) => {
        return (
          <LinkWrapper key={i}>
            <Link
              id={getFooterNavIds(link.href)}
              href={link.href}
              tw="text-primary font-semibold underline w-32 my-4 text-center lg:my-0 lg:text-right"
            >
              {link.label}
            </Link>
          </LinkWrapper>
        );
      })}
    </Wrapper>
  );
}

export default NavBar;
