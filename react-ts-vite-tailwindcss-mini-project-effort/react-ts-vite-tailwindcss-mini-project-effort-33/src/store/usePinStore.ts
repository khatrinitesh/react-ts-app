import { create } from "zustand";
import { PinState } from "../interface";


export const usePinStore = create<PinState>((set) => ({
    rotateX:0,
    rotateY:0,
    setRotation:(x,y) => set({
        rotateX:x,
        rotateY:y
    }),
    resetRotation:() => set({rotateX:0,rotateY:0}),
}))