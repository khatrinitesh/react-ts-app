import React from 'react';
import './style.css';

const CustomApp = () => {
    const timelineItems: TimelineItem[] = [
        {
          id: '1',
          date: 'January 2022',
          title: 'Event 1',
          detail: 'Description for Event 1',
          timestamp:'1966‑07‑30',
        },
        {
          id: '2',
          date: 'February 2022',
          title: 'Event 2',
          detail: 'Description for Event 2',
          timestamp:'1966‑07‑30',
        },
        {
            id: '2',
            date: 'February 2022',
            title: 'Event 2',
            detail: 'Description for Event 2',
            timestamp:'1966‑07‑30',
          },
          {
            id: '2',
            date: 'February 2022',
            title: 'Event 2',
            detail: 'Description for Event 2',
            timestamp:'1966‑07‑30',
          },
          {
            id: '2',
            date: 'February 2022',
            title: 'Event 2',
            detail: 'Description for Event 2',
            timestamp:'1966‑07‑30',
          },
          {
            id: '2',
            date: 'February 2022',
            title: 'Event 2',
            detail: 'Description for Event 2',
            timestamp:'1966‑07‑30',
          },
        // Add more timeline items as needed
      ];
  return (
    <>
     <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <Timeline items={timelineItems} />
    </div>
    </>
  )
}

export default CustomApp

// Define the interface for the timeline item
interface TimelineItem {
    id: string;
    title: string;
    detail: string;
    timestamp: string;
  }
  
  interface TimelineProps {
    items: TimelineItem[];
  }
  
  const Timeline: React.FC<TimelineProps> = ({ items }) => {
    return (
      <div className="timeline-container">
        <ul className="tl">
          {items.map((item) => (
            <li key={item.id} className="tl-item">
              <div className="item-icon"></div>
              <div className="item-text">
                <div className="item-title">{item.title}</div>
                <div className="item-detail">{item.detail}</div>
              </div>
              <div className="item-timestamp">{item.timestamp}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  };