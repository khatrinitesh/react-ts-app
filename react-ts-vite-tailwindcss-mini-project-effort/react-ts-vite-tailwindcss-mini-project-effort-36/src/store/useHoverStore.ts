import { create } from "zustand";
import type { HoverStore } from "../interface";


export const useHoverStore = create<HoverStore>((set) => ({
    hoveredCardId: null,
    setHoveredCardId: (id) => set({ hoveredCardId: id }),
  }));