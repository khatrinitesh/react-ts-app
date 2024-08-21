import { UseFormRegister } from "react-hook-form";

export type BannerProps = {
    title:string;
    description:string;
}

export type HeaderProps = {
    label:string;
    url:string;
}

export type BtnPrimaryProps = {
    onClick:() => void;
    label:string;
}

export type SidebarProps = {
    isOpen: boolean; 
    onClose: () => void 
}

export type AppContextType ={
    user: string;
    setUser: (user: string) => void;
  }

  export type FormData = {
    name: string;
    email: string;
    phoneNumber: string;
    city: string;
    pinCode: string;
  }

  export type InputProps = {
    type?: string;        // Type of the input (text, password, etc.)
    id: string;           // ID of the input
    name: string;         // Name of the input
    value: string;        // Value of the input
    onChange: React.ChangeEventHandler<HTMLInputElement>; // Change handler
    placeholder?: string; // Placeholder text
    className?: string;   // Additional class names
  }

  export type FormValues = {
    name:string;
    email:string;
    city:string;
    phoneNumber:string;
    location:string;
  }

  export type Location ={
    id: number;          // Unique identifier for the location
    name: string;        // Name of the location (e.g., city or state name)
  }

  export type SelectProps = {
    value: number;                      // The currently selected value
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; // Change handler
    options: Location[];                // Array of location options
    placeholder?: string;               // Optional placeholder text
  }