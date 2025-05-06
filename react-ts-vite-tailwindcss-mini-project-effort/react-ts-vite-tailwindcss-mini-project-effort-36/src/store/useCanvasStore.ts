import { create } from "zustand";

export const useCanvasStore = create<CanvasState>((set) => ({
    isRevealed:true,
    toggleReveal:() => set((state) => ({isRevealed:!state.isRevealed}))
}))