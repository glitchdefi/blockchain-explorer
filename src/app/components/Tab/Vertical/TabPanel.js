import React from "react";
import { theme, styled, css } from "twin.macro";
import { usePanelState } from "../hooks/usePanelState";

export function TabPanel({ evtKey, children, isCard, ...props }) {
  const { isActive } = usePanelState(evtKey);

  if (!isCard && !isActive) return null;

  return (
    <Wrapper {...props}>
      <div className="tab-panel">{children}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div(() => [
  css`
    background-color: ${theme`colors.bgPrimary`};
    padding: 20px;
    border-radius: 0px 0px 5px 5px;
    max-width: 100%;

    .tab-panel {
      min-height: 45vh;
    }

    @media (min-width: 1024px) {
      width: 100%;
      border-radius: 5px;

      .tab-panel {
        min-height: 65vh;
      }
    }
  `,
]);
