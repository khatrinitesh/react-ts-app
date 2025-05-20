import type { AccordionItem, NavItem, SlideItem, TimelineItem } from "../interface";

export const NAV_ITEMS: NavItem[] = [
  { id: 'item01', label: 'Home', href: '/', className: 'item01' },
  { id: 'item02', label: 'About', href: '/about', className: 'item002' },
  { id: 'item03', label: 'Contact', href: '/contact', className: 'item003' },
]
export const ACCORDION_DATA: AccordionItem[] = [
  {
    id: 1,
    title: "What is Framer Motion?",
    description: "Framer Motion is a production-ready motion library for React.",
  },
  {
    id: 2,
    title: "Why use TypeScript?",
    description: "TypeScript provides type safety and better developer tooling.",
  },
  {
    id: 3,
    title: "What is Framer Motion?",
    description: "Framer Motion is a production-ready motion library for React.",
  },
  {
    id: 4,
    title: "Why use TypeScript?",
    description: "TypeScript provides type safety and better developer tooling.",
  },
  {
    id: 5,
    title: "What is Framer Motion?",
    description: "Framer Motion is a production-ready motion library for React.",
  },
  {
    id: 6,
    title: "Why use TypeScript?",
    description: "TypeScript provides type safety and better developer tooling.",
  },
  {
    id: 7,
    title: "What is Framer Motion?",
    description: "Framer Motion is a production-ready motion library for React.",
  },
  {
    id: 8,
    title: "Why use TypeScript?",
    description: "TypeScript provides type safety and better developer tooling.",
  },
];
export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 1,
    date: "Jan 2022",
    title: "Project Kickoff",
    description: "Initial planning and setup of the project environment.",
  },
  {
    id: 2,
    date: "Mar 2022",
    title: "Design Phase",
    description: "Wireframes, mockups, and user experience design completed.",
  },
  {
    id: 3,
    date: "Jul 2022",
    title: "Development Phase",
    description: "Core features developed using React, TypeScript, and Node.",
  },
  {
    id: 4,
    date: "Dec 2022",
    title: "Launch",
    description: "Application deployed and made live to the public.",
  },
];

export const SLIDER_DATA: SlideItem[] = [
  {
    id: 1,
    title: "Slide 1",
    description: "This is the first slide.",
    image: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    id: 2,
    title: "Slide 2",
    description: "This is the second slide.",
    image: "https://placehold.co/600x400/EEE/41343C",
  },
  {
    id: 3,
    title: "Slide 3",
    description: "This is the third slide.",
    image: "https://placehold.co/600x400/EEE/51343C",
  },
];