

import { create } from 'zustand';

interface AccordionState {
  isActive: boolean;
  toggle: () => void;
}

export const useAnimateIconStore = create<AccordionState>((set) => ({
  isActive: false,
  toggle:() => set((state) => ({isActive:!state.isActive})),
}));