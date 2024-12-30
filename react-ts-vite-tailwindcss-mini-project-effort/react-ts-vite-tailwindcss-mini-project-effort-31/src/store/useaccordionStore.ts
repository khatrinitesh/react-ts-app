import { create } from "zustand";

export const useAccordionStore = create<AccordionState>((set) => ({
    expandedSection: null, // No section expanded initially
    toggleSection: (sectionId: string) =>
      set((state) => ({
        expandedSection: state.expandedSection === sectionId ? null : sectionId, // Toggle logic
      })),
  }));