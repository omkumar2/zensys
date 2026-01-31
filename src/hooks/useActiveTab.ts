import { useTabStore } from "@/store/useTabStore";
import { TabType } from "@/types/tab";
// import { useCallback } from "react";

export const useActiveTab = () => {
    const { activeTabId, tabs, switchTab } = useTabStore();
    const activeTab = tabs.find(tab => tab.id === activeTabId) || null;
    const switchActiveTab = ( type: TabType) => {
        switchTab(activeTabId, type);
    }
    return { activeTab, switchActiveTab };
}


