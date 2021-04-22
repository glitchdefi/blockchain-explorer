import React from "react";
import { theme, styled, css } from "twin.macro";
import { usePanelState } from "../hooks/usePanelState";

export function TabPanel({ children, isCard, ...props }) {
  const { isActive } = usePanelState();

  if (!isCard && !isActive) return null;

  return (
    <Wrapper {...props}>
      <div className="tab-panel">
        <div className="inner">{children}</div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div(() => [
  css`
    border-radius: 0 0px 5px 5px;
    position: relative;
    padding-left: 12px;
    padding-right: 12px;
    &:before {
      content: "";
      display: block;
      width: 30px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      background: ${theme`colors.secondary`};
      opacity: 16%;
    }
    &:after {
      content: "";
      display: block;
      width: 30px;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      background: ${theme`colors.primary`};
      opacity: 30%;
    }
    .inner {
      position: relative;
      z-index: 2;
      background-color: ${theme`colors.black-pearl`};
      padding: 16px;
      border-radius: 0 0px 5px 5px;
    }
  `,
]);
