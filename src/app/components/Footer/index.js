import React from "react";
import tw, { styled } from "twin.macro";
import { PageElementWrap } from "../../layouts/PageElementWrap";

// Sub Components
import GlitchInfo from "./GlitchInfo";
import NavBar from "./NavBar";
import Copyrite from "./Copyright";

const Wrapper = styled.div(() => [tw`bg-nero`]);

const ContentWrapper = styled.div(() => [
  tw`w-full py-6 grid grid-cols-3 items-center justify-between`,
]);

export function Footer() {
  return (
    <>
      <Wrapper>
        <PageElementWrap tw="flex flex-col items-center">
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
