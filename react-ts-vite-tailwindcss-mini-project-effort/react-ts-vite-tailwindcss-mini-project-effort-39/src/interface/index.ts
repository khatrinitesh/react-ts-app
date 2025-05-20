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

