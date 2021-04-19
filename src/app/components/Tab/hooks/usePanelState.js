import { useContext } from "react";
import useConstant from "use-constant";
import { TabsContext } from "../TabContainer";

export const usePanelState = () => {
  const tabsProps = useContext(TabsContext);

  const panelIndex = useConstant(() => {
    const currentIndex = tabsProps.panelIndex;
    tabsProps.panelIndex += 1;

    return currentIndex;
  });

  return { isActive: panelIndex === tabsProps.activeTab };
};
