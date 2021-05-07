import React from "react";
import { css } from "twin.macro";
import { GlitchText } from "./GlitchText";

export function LoadingIndicator() {
  return (
    <div css={[styles]}>
      <GlitchText />
    </div>
  );
}

const styles = css`
  min-height: 65vh;
  display: flex;
  margin: 0;
  overflow: hidden;
`;
