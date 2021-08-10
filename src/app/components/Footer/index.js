import React from "react";
import tw, { css, theme } from "twin.macro";
import { PageElementWrap } from "../../layouts/PageElementWrap";

// Sub Components
import GlitchInfo from "./GlitchInfo";

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

const Wrapper = tw.div`mt-6`;
