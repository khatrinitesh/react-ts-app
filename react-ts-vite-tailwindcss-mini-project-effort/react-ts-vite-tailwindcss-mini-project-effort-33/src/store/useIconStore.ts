import { create } from "zustand";
import { IconAnimationProps } from "../interface";


export const useIconStore = create<IconAnimationProps>((set) =>({
    isActive:false,
    toggle:() => set((state) => ({
        isActive:!state.isActive
    }))
}))