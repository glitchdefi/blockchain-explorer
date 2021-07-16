import React from "react";
import tw from "twin.macro";
import { PageElementWrap } from "../../layouts/PageElementWrap";

// Sub Components
import GlitchInfo from "./GlitchInfo";

const Wrapper = tw.div`mt-8 py-3`;

export function Footer() {
  return (
    <>
      <Wrapper>
        <PageElementWrap>
          <GlitchInfo />
        </PageElementWrap>
      </Wrapper>
    </>
  );
}
