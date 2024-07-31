import { ANIMATIONS, BUTTON_TYPES } from "../constants/constants";

export interface SearchProps {
    animation?: keyof typeof SEARCH_ANIMATIONS; // optional animation type
    placeholder?: string; // optional placeholder text
    onSearch: (query: string) => void;
}

export interface ButtonProps {
    type: keyof typeof BUTTON_TYPES;
    animation?: keyof typeof ANIMATIONS; // optional animation type
    onClick: () => void;
    children: React.ReactNode;
}

export const ICON_TYPES = {
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
} 
export interface IconProps {
    type: keyof typeof ICON_TYPES; // restricts 'type' to keys of ICON_TYPES
    size?: number; // optional size for the icon
    color?: string; // optional color for the icon
}

export interface ButtonProps {
    type: 'primary' | 'secondary';
    onClick: () => void;
}

export interface AlertProps {
    message: keyof typeof ALERT_MESSAGES;
    onClose: () => void;
}

export interface AccordionItem{
    id: number; // Unique identifier for each item
    title: string; // Title of the accordion item
    content: string; // Content of the accordion item
}

export interface AccordionProps{
    items:AccordionItem[];
    defaultOpenIndex?:number;
}

export interface AccordionState{
    openIndex:number | null;
}

export interface BtnPrimaryProps{
    label:string;
    onClick:() => void;
}

export interface LinkItem{
    href:string;
    label:string;
}

export interface BannerProps{
    title:string;
    description:string;
}

