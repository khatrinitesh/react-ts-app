import { create } from "zustand";
import { CardState } from "../interface";

export const useCardStore = create<CardState>((set) => ({
    rotateX:0,
    rotateY:0,
    setRotate:(x,y) => set({
        rotateX:x,
        rotateY:y
    }),
    reset:() => set({
        rotateX:0,
        rotateY:0
    })
}))