import type { CardData, CarState } from "../interface";

export const calloutData:CalloutProps[] = [
    { type: 'info', message: 'This is an info message.' },
    { type: 'success', message: 'Operation completed successfully.' },
    { type: 'error', message: 'Something went wrong!' },
    { type: 'warning', message: 'This is a warning. Proceed with caution.' },
]
export const carConfig = {
    duration: 5, // seconds
    distance: 800, // pixels
    imageUrl: 'https://media.istockphoto.com/id/1280010427/vector/happy-family-travelling-by-car.jpg?s=612x612&w=0&k=20&c=fa7mMlFOVGzp4Rkgavdfvl-kmzcyLiCzOFLX5c-yL_U='
  };

  export const cardData: CardData[] = [
    { id: 1, title: 'Card 1', description: 'Description 1' },
    { id: 2, title: 'Card 2', description: 'Description 2' },
    { id: 3, title: 'Card 3', description: 'Description 3' },
  ];

