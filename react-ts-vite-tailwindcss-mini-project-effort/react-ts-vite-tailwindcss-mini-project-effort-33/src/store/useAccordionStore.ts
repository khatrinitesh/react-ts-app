import { create } from "zustand";
import { AccordionState } from "../interface";


export const useAccordionStore = create<AccordionState> ((set) => ({
    openId:null,
    toggle:(id:number) => set((state) => ({
        openId:state.openId === id ? null : id,
    }))
}))