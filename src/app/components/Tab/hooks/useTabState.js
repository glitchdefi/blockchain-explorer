import { useContext, useMemo } from "react";
import useConstant from "use-constant";
import { TabsContext } from "../TabContainer";

export function useTabState() {
  const tabsProps = useContext(TabsContext);
  const { activeTab, setActiveTab } = tabsProps;

  const tabIndex = useConstant(() => {
    const currentIndex = tabsProps.tabIndex;
    tabsProps.tabIndex += 1;
    return currentIndex;
  });

  const onChangeTab = useMemo(() => () => setActiveTab(tabIndex), []);

  return {
    isActive: activeTab === tabIndex,
    onChangeTab,
  };
}
