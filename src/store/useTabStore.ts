import { create } from "zustand";
import { TabStore } from "@/types/tab";

export const useTabStore = create<TabStore>((set) => ({
  tabs: [
    {
      id: "tab-1",
      title: "Overview",
      type: "overview",
      isActive: true,
      timeline: [],
    },
  ],
  activeTabId: "tab-1",

  switchTab: (id, type) =>
    set((state) => {
      let t = state.tabs.find((tab) => tab.id === id);
      if (!t) {
        return { state };
      }
      t.type = type;
      const newTabs = state.tabs.filter((tab) => tab.id !== id);
      return {
        activeTabId: id,
        tabs: [...newTabs, t],
      };
    }),
}));
