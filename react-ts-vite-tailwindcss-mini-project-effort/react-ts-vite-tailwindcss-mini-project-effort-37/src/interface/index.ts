export interface CardTransform {
    rotateX: number;
    rotateY: number;
    scale: number;
    glowPosition: { x: number; y: number };
  }

  export interface AccordionItem {
    id: number;
    title: string;
    content: React.ReactNode;
  }

  export interface IconPath {
    d: string;
  }

  export interface SearchState {
    isActive: boolean;
    toggleSearch: () => void;
    resetSearch: () => void;
  }