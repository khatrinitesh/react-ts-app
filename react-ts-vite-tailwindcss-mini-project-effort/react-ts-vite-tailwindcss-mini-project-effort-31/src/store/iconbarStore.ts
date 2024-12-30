import { create } from "zustand";
import { IconBarProps, IconBarStore } from "../interface";

export const useiconbarStore = create<IconBarProps>(( set) => ({
    activeTab:'home',
    setActiveTab:(tab:string) => set({
        activeTab:tab
    }), // function to change active tab    
}))