
import { IconType } from "react-icons";

export type HeaderType = {
    url:string;
    text:string;
    icon:IconType;
}

export type BannerType = {
    title:string;
    desc:string;
    className:string;
}

export type AccordionType = {
    id:string;
    title:string;
    details:string[];
}

export type ImageData= {
    id: string; // Unique identifier for the image
    src: string; // URL or path to the image
    alt: string; // Alt text for the image
  }
  
  export type ButtonData ={
    id: string; // Unique identifier for the button
    label: string; // Text to be displayed on the button
    onClick: () => void; // Function to be called when the button is clicked
    className?: string; // Optional additional class names for styling
  }

  export type BlurredBackgroundProps = {
    imageUrl: string;
    children?: React.ReactNode;
  }

  export type ImageWithBorderProps = {
    src: string;
    alt: string;
    borderColor?: string; // Optional border color
    borderWidth?: string; // Optional border width
    borderRadius?: string; // Optional border radius
  }

  export type BorderFrameProps = {
    children: React.ReactNode;
    borderColor?: string; // Optional border color
    borderWidth?: string; // Optional border width
    borderRadius?: string; // Optional border radius
    padding?: string; // Optional padding inside the frame
  }


  export type BulletListProps = {
    items: string[];
    bulletColor?: string; // Tailwind CSS color classes, e.g., 'text-red-500'
  }
  