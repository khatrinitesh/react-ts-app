import { create } from "zustand";
interface AccordionStore {
    expanded: string | null;
    toggle: (id: string) => void;
  }

  export const useAccordionStore = create<AccordionStore>((set) => ({
    expanded: null,
    toggle: (id: string) => set((state) => ({ expanded: state.expanded === id ? null : id })),
  }));