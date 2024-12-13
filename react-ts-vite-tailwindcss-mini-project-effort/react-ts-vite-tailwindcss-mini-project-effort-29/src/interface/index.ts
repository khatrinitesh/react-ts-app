export interface BannerProps{
    title:string;
    description:string;
    bannerStyle:React.CSSProperties;
}

export interface TopNavProps{
    label:string;
    url:string;
}

export interface AlertStore{
    isAlertVisible:boolean;
    toggleAlert:() => void;    
}

export interface AccordionProps{
    title:string;
    content:string;
}

export interface ButtonProps{
    label:string;
    onClick:() => void;
}

export interface AnimateIconStore{
    isAnimating:boolean;
    toggleAnimation:() => void;
}

export interface ArrowStore{
    direction:'top' | 'right' | 'bottom' | 'left',
    toggleDirection:() => void;
}

export interface AutocompleteStore{
    query: string;
    setQuery: (query: string) => void;
    suggestions: string[]; // Make sure suggestions is always an array
    setSuggestions: (suggestions: string[]) => void;
}

export interface AvatarState{
    avatarUrl:string | null;
    setAvatarUrl:(url:string) => void;
}
export interface AvatarProps{
    url:string; // URL of the avatar image
}

export interface BlurImages{
    blurinensity:number;
    setBlurIntensity(blurNum:number)=> void;
}

export interface BackgroundImgProps{
    imgUrl:string; // url for the background image
}

export interface ListItem{
    id:number;
    text:string;
    checked:boolean;
}

export interface ListState{
    items:ListItem[];
    addItem:(text:string) => void;
    toggleItem:(id:number) => void;
    removeItem:(id:number) => void;
}
export interface BgDropDownMenu{
    backgroundColor:string;
    setBackgroundColor:(color:string) => void;
}

export interface ChangeBgScrollProps{
    backgroundColor:string;
    setBackgroundColor:(color:string) => void;
}

export interface CharacterCounterProps{
    count:number;
    setCount:(count:number) => void;
}

export interface CheckedProps{
    isChecked:boolean;
    toggleChecked:() => void;
}

export interface CheckoutStateProps {
    name: string;
    email: string;
    address: string;
    setName: (name: string) => void;
    setEmail: (email: string) => void;
    setAddress: (address: string) => void;
  }
  
  export interface MenuProps{
    isMenuOpen:boolean,
    toggleMenu:() => void;
  }

  export interface CircleDotsProps{
    isAnimating:boolean;
    toggleAnimation :() => void;
  }

  export interface ClayProps{
    isModalOpen:boolean;
    toggleModal:() => void;
  }

  export interface ClearInputFieldProps{
    isFieldInput:string; 
    setIsFieldInput:(value:string) => void;
    clearInput:() => void;
  }

  export interface ClickDropdownsProps{
    isDropdownOpen:boolean;
    toggleDropdown:() => void;
  }

  export interface ColorPickerProps{
    color:string;
    setColor:() => void;
  }
  
  export interface CopyTxtProps{
    showBox:boolean ;
    toggleBox:() => void;
  }

  export const CountDownProps{
    timeLeft: number; // Time left in seconds
  isActive: boolean; // Whether the timer is running
  intervalId: NodeJS.Timeout | null; // Interval for the timer
  startTimer: (seconds: number) => void; // Start the timer with a specific duration
  stopTimer: () => void; // Stop the timer
  resetTimer: () => void; // Reset the timer to its initial state
  updateTimeLeft: () => void; // Update the time left
  }