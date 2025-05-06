import { create } from "zustand";
import type { CarState } from "../interface";

export const useCarStore = create<CarState>((set) => ({
    isRunning: false,
    start: () => set({ isRunning: true }),
    stop: () => set({ isRunning: false }),
  }));

  export default useCarStore;