import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import tw from "twin.macro";

import { HOME_IDS } from "src/constants/refIds";

// Hooks
import { useGlobalSlice } from "src/state/global/hooks";

// Components
import { Logo } from "src/app/components/Logo";
import { HorizontalMenu, VerticalMenu } from "./components/Menu";
import { Button } from "../Button";
import { PageElementWrap } from "../../layouts/PageElementWrap";
import { SearchInput } from "./components/SearchInput";

// Icon
import { HamburgerIcon, CloseIcon } from "./icons";
import ThemeToggle from "./components/ThemeToggle";

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
            <Logo id={HOME_IDS.logo} />

            <div tw="flex items-center">
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
              <ThemeToggle />
            </div>
          </NavCols>
        </PageElementWrap>
        {/* Menu for Mobile */}
        {isShowVerticalMenu && <VerticalMenu />}

        {location.pathname !== "/contactus" && (
          <PageElementWrap>
            <SearchInput />
          </PageElementWrap>
        )}
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`items-center py-3`;
const NavCols = tw.div`relative flex flex-wrap w-full items-center justify-between`;
