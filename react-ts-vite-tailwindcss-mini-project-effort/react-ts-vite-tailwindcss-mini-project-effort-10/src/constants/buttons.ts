import { ButtonData } from "../types";

export const BUTTONS: ButtonData[] = [
    {
      id: 'button1',
      label: 'Primary Button',
      onClick: () => alert('Primary Button Clicked!'),
      className: 'bg-blue-500 text-white hover:bg-blue-600', // Tailwind CSS classes for styling
    },
    {
      id: 'button2',
      label: 'Secondary Button',
      onClick: () => alert('Secondary Button Clicked!'),
      className: 'bg-gray-500 text-white hover:bg-gray-600',
    },
    {
      id: 'button3',
      label: 'Danger Button',
      onClick: () => alert('Danger Button Clicked!'),
      className: 'bg-red-500 text-white hover:bg-red-600',
    },
];