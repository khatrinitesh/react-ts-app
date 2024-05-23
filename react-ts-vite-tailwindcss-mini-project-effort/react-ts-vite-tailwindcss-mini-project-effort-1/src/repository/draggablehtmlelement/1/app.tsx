import React, { useRef, useState, MouseEvent } from "react";
import './style.css';

const CustomApp = () => {
  return (
    <>
      <Draggable />
    </>
  );
};

export default CustomApp;

const Draggable: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [draggingPosition, setDraggingPosition] = useState<{
    left: number;
    top: number;
  }>({ left: 0, top: 0 });
  const dragRef = useRef<HTMLDivElement>(null);
  const offset = useRef<{ offsetX: number; offsetY: number } | null>(null);

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (dragRef.current) {
      const rect = dragRef.current.getBoundingClientRect();
      offset.current = {
        offsetX: event.clientX - rect.left,
        offsetY: event.clientY - rect.top,
      };
      setIsDragging(true);
    }
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (isDragging && dragRef.current && offset.current) {
      const left = event.clientX - offset.current.offsetX;
      const top = event.clientY - offset.current.offsetY;
      setDraggingPosition({ left, top });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    offset.current = null;
  };
  return (
    <div
      ref={dragRef}
      className={`draggable ${isDragging ? 'dragging' : ''}`}
      style={{ left: draggingPosition.left, top: draggingPosition.top }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      Drag me!
    </div>
  );
};
