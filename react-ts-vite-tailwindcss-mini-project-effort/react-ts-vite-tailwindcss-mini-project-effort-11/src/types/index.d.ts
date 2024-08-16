import * as React from 'react';
import { IconType } from 'react-icons';

export enum Pathname {
    Home='/',
    About='/about',
    Service='/service',
    Contact='/contact'
}

export type HeaderType = {
    title:string;
    pathname:Pathname;
    icon: IconType; // Add an icon property
}

export type BannerType = {
    title:string;
    desc:string;
}


export type CalculatorState = {
    currentValue: string; // Value displayed on the screen
    previousValue: string; // Value stored for calculation
    operator: string | null; // Current operator ('+', '-', '*', '/')
  }

  export type ButtonProps = {
    label: string; // Text displayed on the button
    onClick: (label: string) => void; // Callback function when the button is clicked
  }

  export type CalendarState = {
    currentMonth:number;
    currentYear:number;
    selectedDate:Date | null;
  }

  export type CalendarDay = {
    date:Date;
    isCurrentMonth:boolean;
    isSelected:boolean;
  }

  export type CalendarProps = {
    onDateSelect:(date:Date) => void;
  }

  export type ModalProps = {
    isOpen: boolean;          // Whether the modal is visible
    onClose: () => void;      // Function to call when the modal is closed
    title?: string;           // Optional title for the modal
    children: React.ReactNode; // Content to display inside the modal
  }

  export type ModalState = {
    isVisible: boolean;       // Internal visibility state
  }

  export type CardProps = {
    title:string;
    content:React.ReactNode;
    imageUrl?:string;
    actions?:React.ReactNode;
    className?:string;
  }
