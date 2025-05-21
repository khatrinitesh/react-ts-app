export interface AnimatedBoxProps {
  delay?: number;
  duration?: number;
  text: string;
}


export interface LengthProps {
  text: string;
  items: string[];
}

export interface User {
  id: number;
  name: string;
}

export interface IndexOfProps {
  users: User[];
  nameToFind: string;
}

export interface User {
  id: number;
  name: string;
}

export interface IncludesProps {
  users: User[];
  nameToCheck: string;
}

export interface EndsWithProps {
  baseString: string;
  suffix: string;
}

export interface ConcatProps {
  str1: string;
  str2: string;
}

export interface CharAtProps {
  text: string;
  index: number;
}

export interface ScrollItem {
  title: string;
  description: string;
}

export interface PricingPlan {
  title: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

export interface PreloaderProps {
  message?: string;
}

export interface ButtonOption {
  label: string;
  value: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  className?: string;
}

export interface AccordionItem {
  id: number;
  title: string;
  description: string;
}
export interface AccordionProps {
  item: AccordionItem;
   isOpen: boolean;
  onToggle: (id: number) => void;
}

export interface TimelineItem {
  id: number;
  date: string;
  title: string;
  description: string;
}
export interface SlideItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

