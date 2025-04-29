import { AccordionItem } from "../interface";

export const CARD_WIDTH=300;
export const CARD_HEIGHT=400;

// 3 pin
export const PIN_SIZE = 80;
export const ROTATE_FACTOR = 15; //DEGREES PER OFFSET UNIT 

export const ANIMATION_DURATION = .3;

export const accData: AccordionItem[] = [
    {
      id: '1',
      title: 'What is Zustand?',
      description: 'Zustand is a small, fast and scalable state management solution for React.',
    },
    {
      id: '2',
      title: 'What is Framer Motion?',
      description: 'Framer Motion is a production-ready motion library for React from Framer.',
    },
    {
        id: '3',
        title: 'What is Framer Motion?',
        description: 'Framer Motion is a production-ready motion library for React from Framer.',
      },
      {
        id: '4',
        title: 'What is Framer Motion?',
        description: 'Framer Motion is a production-ready motion library for React from Framer.',
      },
  ];

  export const ALERT_DURATION = 3000; // in milliseconds 

  export const ALERT_TYPES = {
    SUCCESS:'success',
    ERROR:'error',
    INFO:'info',
    WARNING:'warning'
  } as const;