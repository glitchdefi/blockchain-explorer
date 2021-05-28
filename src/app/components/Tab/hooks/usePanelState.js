import { useContext } from "react";
import { useLocation } from "react-router";
import useConstant from "use-constant";
import { TabsContext } from "../TabContainer";

export const usePanelState = (evtKey) => {
  const tabsProps = useContext(TabsContext) || {};
  const { hash } = useLocation();

  const panelIndex = useConstant(() => {
    const currentIndex = tabsProps.panelIndex;
    tabsProps.panelIndex += 1;

    return currentIndex;
  });

  return {
    isActive: hash ? hash === `#${evtKey}` : panelIndex === tabsProps.activeTab,
  };
};
