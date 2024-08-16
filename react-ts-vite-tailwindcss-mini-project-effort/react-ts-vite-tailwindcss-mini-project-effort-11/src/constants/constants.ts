import { HeaderType, Pathname } from '../types/index.d.ts'; // Adjust the import path
import { ICONS } from './icons';


export const HeaderData: HeaderType[] = [
    {
      pathname: Pathname.Home,
      title: 'Home',
      icon:ICONS.home
    },
    {
      pathname: Pathname.About,
      title: 'About',
      icon: ICONS.about
    },
    {
      pathname: Pathname.Service,
      title: 'Service',
      icon: ICONS.service
    },
    {
      pathname: Pathname.Contact,
      title: 'Contact',
      icon: ICONS.contact
    },
  ];

  export const OPERATORS = ['+', '-', '*', '/'];
  export const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  export const SPECIAL_BUTTONS = ['C', '=', '.'];
 
  export const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  export const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  export const MODAL_TYPES = {
    INFO: 'info',
    WARNING: 'warning',
    ERROR: 'error',
    CONFIRMATION: 'confirmation',
  } as const;
  
  export type MODAL_TYPES = typeof MODAL_TYPES[keyof typeof MODAL_TYPES];

  export const CARD_TYPES = {
    BASIC:'basic',
    ELEVTAED:'elevated',
    OUTLINED:'outlined'
  } as const;

  export type CardType = typeof CARD_TYPES[keyof typeof CARD_TYPES]