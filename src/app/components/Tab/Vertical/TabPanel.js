import React from "react";
import { theme, styled, css } from "twin.macro";
import { usePanelState } from "../hooks/usePanelState";

export function TabPanel({ children, isCard, ...props }) {
  const { isActive } = usePanelState();

  if (!isCard && !isActive) return null;

  return (
    <Wrapper {...props}>
      <div className="tab-panel">{children}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div(() => [
  css`
    background-color: ${theme`colors.black-pearl`};
    padding: 20px;
    border-radius: 5px;
    max-width: 75%;
    width: 75%;
  `,
]);
