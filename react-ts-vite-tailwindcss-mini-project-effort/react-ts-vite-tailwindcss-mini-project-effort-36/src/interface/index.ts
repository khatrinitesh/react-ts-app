export interface CalloutProps{
    type:'success' | 'info' | 'warning' | 'error';
    message:string;
}

export interface CanvasState {
    isRevealed: boolean;
    toggleReveal: () => void;
  }


  export interface CarState {
    isRunning: boolean;
    start: () => void;
    stop: () => void;
  }

  export interface CardData {
    id: number;
    title: string;
    description: string;
  }

  export interface HoverStore {
    hoveredCardId: number | null;
    setHoveredCardId: (id: number | null) => void;
  }
  

  export interface CardProps {
    data: CardData;
  }