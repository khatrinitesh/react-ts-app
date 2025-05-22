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
export interface TableRow {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface CardItem {
  id: number;
  title: string;
  description: string;
}

<<<<<<< HEAD
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
=======
export interface CardItem {
  id: number;
  title: string;
  description: string;
}

export interface Avatar {
  id: number;
  name: string;
  imageUrl: string;
}


export interface AutoCompleteOption {
  id: number;
  label: string;
>>>>>>> c7973706eb6023b89d7becfb13afb1250290a095
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

