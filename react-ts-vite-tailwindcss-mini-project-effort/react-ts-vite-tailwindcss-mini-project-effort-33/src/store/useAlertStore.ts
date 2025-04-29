import { create } from "zustand";
import { AlertState } from "../interface";
import { ALERT_DURATION } from "../constants/constants";

export const useAlertStore = create<AlertState>((set) => ({
    alerts:[],
    addAlert:(message,type) => {
        const id = crypto.randomUUID();
        set((state) => ({
            alerts:[...state.alerts,{id,message,type}],
        }));

        setTimeout(() => {
            set((state) => ({
                alerts:state.alerts.filter((alert) => alert.id !== id),
            }));
        },ALERT_DURATION);
    },
    removeAlert:(id) => {
        set((state) => ({
            alerts:state.alerts.filter((alert) => alerts.id !== id),
        }));
    },
}))