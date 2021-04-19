import React from "react";
import tw from "twin.macro";
import { PageElementWrap } from "../../layouts/PageElementWrap";

// Sub Components
import GlitchInfo from "./GlitchInfo";
import NavBar from "./NavBar";
import Copyrite from "./Copyright";

const Wrapper = tw.div`mt-4 bg-nero`;

const ContentWrapper = tw.div`
  w-full 
  py-6 
  lg:(flex justify-between)
`;

export function Footer() {
  return (
    <>
      <Wrapper>
        <PageElementWrap>
          <ContentWrapper>
            <GlitchInfo />
            <NavBar />
          </ContentWrapper>
          <Copyrite />
        </PageElementWrap>
      </Wrapper>
    </>
  );
}
