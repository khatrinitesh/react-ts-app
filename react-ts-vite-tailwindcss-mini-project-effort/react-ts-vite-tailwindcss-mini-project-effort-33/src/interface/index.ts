import { ALERT_TYPES } from "../constants/constants";

export interface CardState{
    rotateX:number;
    rotateY:number;
    setRotate:(x:number,y:number) => void;
    reset:() => void;
}

// 3d pin
export interface PinState{
    rotateX:number;
    rotateY:number;
    setRotation:(x:number,y:number) => void;
    resetRotation:() => void;
}

// accordion
export interface AccordionItem{
    id:number;
    title:string;
    description:string;
}

export interface AccordionState{
    openId:string | null;
    toggle:(id:string) => void;
}

export type AlertType = keyof typeof ALERT_TYPES

export interface AlertData{
    id:number;
    message:string;
    type:AlertType;
}

export interface AlertState{
    alerts:AlertData[];
    addAlert:(message:string,type:AlertType) => void;
    removeAlert:(id:number)=> void;
}

export interface IconAnimationProps{
    isActive:boolean;
}