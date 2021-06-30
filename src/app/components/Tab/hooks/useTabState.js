import { useContext, useMemo } from "react";
import { useHistory, useLocation } from "react-router";
import useConstant from "use-constant";
import { TabsContext } from "../TabContainer";

export function useTabState(evtKey) {
  const tabsProps = useContext(TabsContext);
  const history = useHistory();
  const { hash } = useLocation();
  const { activeTab, setActiveTab } = tabsProps;

  const tabIndex = useConstant(() => {
    const currentIndex = tabsProps.tabIndex;
    tabsProps.tabIndex += 1;
    return currentIndex;
  });

  const onChangeTab = useMemo(
    () => () => {
      setActiveTab(tabIndex);
      history.push(`#${evtKey}`);
    },
    []
  );

  return {
    isActive: hash ? hash === `#${evtKey}` : activeTab === tabIndex,
    onChangeTab,
  };
}
