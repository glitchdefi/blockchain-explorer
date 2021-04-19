import React, { createContext, useState } from "react";

export const TabsContext = createContext();

export function TabContainer({ children }) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <TabsContext.Provider
      value={{ tabIndex: 0, panelIndex: 0, activeTab, setActiveTab }}
    >
      {children}
    </TabsContext.Provider>
  );
}
