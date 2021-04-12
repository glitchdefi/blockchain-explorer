import React from "react";
import tw, { styled } from "twin.macro";
import { footerNav as links } from "../../../constants/navConfig";
import { Link } from "../Link";

const Wrapper = styled.ul(() => [
  tw`flex flex-row mt-6 col-span-2 self-start justify-end list-none`,
]);

const LinkWrapper = styled.li(() => [tw`pl-8`]);

function NavBar() {
  return (
    <Wrapper>
      {links.map((link) => {
        return (
          <LinkWrapper>
            <Link href={link.href}>{link.label}</Link>
          </LinkWrapper>
        );
      })}
    </Wrapper>
  );
}

export default NavBar;
