import { create } from "zustand";

interface CounterState {
    count:number;
    increment:() => void;
    decrement:() => void;
    reset:() => void;
}

