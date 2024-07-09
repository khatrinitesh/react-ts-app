
export interface AutocompleteOption {
    id: number;
    label: string;
    value: string;
    // You can add more properties as needed
}

export interface AutocompleteState {
    inputValue: string;
    options: AutocompleteOption[];
}

export interface AspectRatioProps{
    name:string;
    ratio:string;
}
export interface ArrowIcon{
    name:string;
    path:string;
    // you can add proeprties if needed,  such as size, color etc.
}

export interface ArrowConstants{
    up:ArrowIcon;
    right:ArrowIcon;
    down:ArrowIcon;
    left:ArrowIcon;
    // add more arrows as needed
}
export interface Post {
    userId:number;
    id:number;
    title:string;
    body:string;
}

export interface Comment{
    postId:number;
    id:number;
    name:string;
    email:string;
    body:string;
}

export interface AnimationTimings{
    duration:string;
    easing:string;  
}

export interface AnimationKeyFrames{
    [key:string]:string;
}

export interface AnimationConstants{
    fadeIn: AnimationTimings;
    fadeOut: AnimationTimings;
    slideIn: AnimationTimings;
    slideOut: AnimationTimings;
    customAnimation1: AnimationTimings; // Example of a custom animation
}

export const animationConstants: AnimationConstants = {
    fadeIn: {
        duration: '0.5s',
        easing: 'ease-in-out',
    },
    fadeOut: {
        duration: '0.5s',
        easing: 'ease-in-out',
    },
    slideIn: {
        duration: '0.3s',
        easing: 'ease-out',
    },
    slideOut: {
        duration: '0.3s',
        easing: 'ease-in',
    },
    customAnimation1: {
        duration: '0.8s',
        easing: 'cubic-bezier(0.42, 0, 0.58, 1)', // Example of a custom easing function
    },
};

export interface AnimatedSearchProps{
    placeholder?:string;
    onSearch:(query:string) => void;
}

export interface AnimatedButtonProps{
    label:string;
    onClick:() => void;
}

//******************** Animate icons
export interface AnimatedIconProps{
    icon:string; // Assuming the icon is a string identifier (e.g., icon name or URL)
    isSelected?:boolean; // Optional prop to indicate if the icon is selected
}

//******************** Alert buttons
export interface AlertProps{
    type:'success' | 'error' | 'warning';
    message:string;
}

export interface ButtonProps{
    label:string;
    onClick:() => void;
    disabled?:string;
} 

//******************** Banner
export interface BannerProps{
    title:string;
    description:string;
    bannerStyle:string;// Assuming you are using React, this type represents CSS properties
}

//******************** Accordion
// Interface for each accordion item
export interface AccordionItem{
    title:string;
    content:string;
}
// Interface for the accordion component props
export interface AccordionProps{
    items:AccordionItem[];
}

//******************** ACTIVECLASS
export interface ListItem{
    id:number;
    text:string;
}

export interface ListProps{
    items:ListItem[];
}