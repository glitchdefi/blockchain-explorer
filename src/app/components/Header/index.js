import React from "react";
import tw, { styled } from "twin.macro";

// Sub Components
import { PageElementWrap } from "../../layouts/PageElementWrap";
import { Logo } from "src/app/components/Logo";
import { NavMenu } from "./components/NavMenu";
import { SearchInput } from "./components/SearchInput";

export function Header() {
  return (
    <>
      <Wrapper>
        <PageElementWrap>
          <NavCols>
            <Logo />
            <NavMenu />
            <SearchInput />
          </NavCols>
        </PageElementWrap>
      </Wrapper>
    </>
  );
}

// Styles
const Wrapper = styled.div(() => [tw`w-full flex flex-wrap items-center py-3`]);
const NavCols = styled.div(() => [tw`grid grid-cols-7 gap-4`]);
