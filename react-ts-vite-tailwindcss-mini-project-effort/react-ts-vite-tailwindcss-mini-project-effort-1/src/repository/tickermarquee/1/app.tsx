import React from "react";
import './style.css';

const CustomApp = () => {

    const items:TicketItem[] = [
        {id:1,content:"Do esse cillum quis et velit dolore Lorem duis magna elit pariatur."},
        {id:1,content:"Do esse cillum quis et velit dolore Lorem duis magna elit pariatur."},
        {id:1,content:"Do esse cillum quis et velit dolore Lorem duis magna elit pariatur."},
        {id:1,content:"Do esse cillum quis et velit dolore Lorem duis magna elit pariatur."},
        {id:1,content:"Do esse cillum quis et velit dolore Lorem duis magna elit pariatur."},
    ]
  return (
    <>
      <TickerMarquee items={items} scrollAmount={10} scrollDelay={200} behavior="alternate" />
    </>
  );
};

export default CustomApp;

// Define the interface for the TickerItem
interface TickerItem {
  id: string;
  content: string;
  scrollAmount?:number;
  scrollDelay?:number;
  direction:'scroll' | 'slide' | 'alternate';
}

// Define the props interface for the TickerMarquee component
interface TickerMarqueeProps {
  items: TickerItem[];
}
const TickerMarquee: React.FC<TickerMarqueeProps> = ({ items,scrollAmount=3,scrollDelay = 100, behavior = 'scroll' }) => {

    const marqueeStyle: React.CSSProperties = {
        scrollAmount: scrollAmount,
        scrollDelay: scrollDelay,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      };

  return (
    <div style={marqueeStyle} className={`marquee-${behavior}`}>
      {items.map((item) => (
        <span key={item.id} className="inline-block px-4 py-2 bg-gray-300 mr-2 rounded-full">
          {item.content}
        </span>
      ))}
    </div>
  );
};
