import React from "react";
import { usePanelState } from "../hooks/usePanelState";

export function TabPanel({ children, evtKey, isCard, ...props }) {
  const { isActive } = usePanelState(evtKey);

  if (!isCard && !isActive) return null;

  return (
    <div {...props} className="tab-panel">
      {children}
    </div>
  );
}
