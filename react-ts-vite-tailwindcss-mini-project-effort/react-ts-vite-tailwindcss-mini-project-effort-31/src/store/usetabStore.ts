import { create } from "zustand";
import { TabState } from "../interface";


export const useTabStore = create<TabState>((set) => ({
    activeTab:'tab1', // default active tab
    setActiveTab:(tabId:string) => set({activeTab:tabId}), // update active tab
}))