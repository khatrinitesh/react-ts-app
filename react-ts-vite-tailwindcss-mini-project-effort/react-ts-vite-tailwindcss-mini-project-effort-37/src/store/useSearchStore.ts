import { create } from "zustand";
import type { SearchState } from "../interface";

export const useSearchStore = create<SearchState>((set) => ({
    isActive: false,
    toggleSearch: () =>
      set((state) => ({ isActive: !state.isActive })),
    resetSearch: () =>
      set(() => ({ isActive: false })),
  }));