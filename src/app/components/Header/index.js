import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import tw, { theme } from "twin.macro";

// Hooks
import { useGlobalSlice } from "src/state/global/hooks";

// Components
import { Logo } from "src/app/components/Logo";
import { HorizontalMenu, VerticalMenu } from "./components/Menu";
import { Text } from "../Text";
import { Button } from "../Button";
import { PageElementWrap } from "../../layouts/PageElementWrap";
import { SearchInput } from "./components/Menu/Horizontal/SearchInput";

// Icon
import { HamburgerIcon, CloseIcon } from "./icons";

export function Header() {
  useGlobalSlice();
  const [isShowVerticalMenu, setIsShowVerticalMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isShowVerticalMenu) setIsShowVerticalMenu(false);
  }, [location]);

  const toggleVerticalMenu = () => {
    setIsShowVerticalMenu(!isShowVerticalMenu);
  };

  return (
    <>
      <Wrapper>
        <PageElementWrap>
          <NavCols>
            <Logo tw="lg:(absolute left-0)" />
            {/* Menu for Desktop */}
            <HorizontalMenu />
            {/* Toggle Menu Vertical */}
            <div tw="lg:hidden flex items-center">
              {!isShowVerticalMenu ? (
                <Button tw="p-0" onClick={toggleVerticalMenu}>
                  <HamburgerIcon />
                </Button>
              ) : (
                <Button tw="p-0" onClick={toggleVerticalMenu}>
                  <CloseIcon />
                </Button>
              )}
            </div>
          </NavCols>
        </PageElementWrap>
        {/* Menu for Mobile */}
        {isShowVerticalMenu && <VerticalMenu />}

        <PageElementWrap>
          {location.pathname === "/searchNotFound" && (
            <Text
              tw="mt-8 lg:mt-16"
              size={theme`fontSize.base`}
            >{`Glitch Explorer > Search`}</Text>
          )}
          <SearchInput />
        </PageElementWrap>
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`items-center py-3`;
const NavCols = tw.div`relative flex flex-wrap w-full items-center justify-between lg:justify-center`;
