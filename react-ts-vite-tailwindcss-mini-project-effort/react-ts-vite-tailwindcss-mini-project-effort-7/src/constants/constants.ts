import { AccordionItem, LinkItem } from "../interface/interface";

export const SEARCH_ANIMATIONS = {
  FADE: 'fade',
  SLIDE: 'slide',
  EXPAND: 'expand',
}

export const ANIMATIONS = {
  SCALE: 'scale',
  FADE: 'fade',
  ROTATE: 'rotate',
}

export const BUTTON_TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
}

export const ICON_TYPES = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
}

export const ALERT_MESSAGES = {
  SUCCESS: "Operation was successful!",
  ERROR: "An error occurred. Please try again.",
  WARNING: "Please be cautious with this action."
};

export const BUTTON_CONFIG = {
  PRIMARY: { color: 'blue', text: 'Click Me' },
  SECONDARY: { color: 'gray', text: 'Cancel' }
};

export const ACTIVE_CLASS = 'accordion-active'

export const accordionitems: AccordionItem[] = [
  { id: '1', title: 'Accordion Item 1', content: 'Content for item 1' },
  { id: '2', title: 'Accordion Item 2', content: 'Content for item 2' },
  { id: '3', title: 'Accordion Item 3', content: 'Content for item 3' },
];

export const links: LinkItem[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/service', label: 'Service' },
    { href: '/contact', label: 'Contact' },
  ];