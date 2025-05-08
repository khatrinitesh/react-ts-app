import { create } from "zustand";
import type { CardTransform } from "../interface";


interface CardStore {
    transform: CardTransform;
    setTransform: (transform: CardTransform) => void;
    resetTransform: () => void;
  }
    
  const defaultTransform: CardTransform = {
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    glowPosition: { x: 150, y: 200 },
  };

  export const useCardStore = create<CardStore>((set) => ({
    transform: defaultTransform,
    setTransform: (transform) => set({ transform }),
    resetTransform: () => set({ transform: defaultTransform }),
  }));