import { useTabStore } from "@/store/useTabStore";
import { TabType, TabView } from "@/types/tab";
// import { useCallback } from "react";

export const useActiveTab = () => {
  const { activeTabId, tabs, switchTab } = useTabStore();
  const activeTab = tabs.find((tab) => tab.id === activeTabId) || null;
  const setActiveTabType = (type: TabType) => {
    switchTab(activeTabId, type, undefined);
  };
  const setActiveTabView = (view: TabView<TabType>) => {
  if (!activeTab) return;

  const type = activeTab.type;
  switchTab(activeTab.id, type, view as TabView<typeof type>);
};

  const setActiveTabTypeAndView = <T extends TabType>(
    type: T,
    view?: TabView<T>,
  ) => {
    if (!activeTab) return;
    switchTab(activeTab.id, type, view);
  };
  return {
    activeTab,
    setActiveTabType,
    setActiveTabView,
    setActiveTabTypeAndView,
  };
};
