import React, { useRef } from 'react'

const ScrollHorizontalWheel:React.FC = () => {

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
      if (scrollContainerRef.current) {
        event.preventDefault();
        scrollContainerRef.current.scrollLeft += event.deltaY;
      }
    };
  return (
    <>
     <div
      ref={scrollContainerRef}
      onWheel={handleWheel}
      className="overflow-x-auto whitespace-nowrap scroll-smooth"
      style={{ width: '100%', height: '200px' }} // Adjust height as needed
    >
      <div className="inline-block w-64 h-full bg-red-300">Item 1</div>
      <div className="inline-block w-64 h-full bg-green-300">Item 2</div>
      <div className="inline-block w-64 h-full bg-blue-300">Item 3</div>
      <div className="inline-block w-64 h-full bg-yellow-300">Item 4</div>
      <div className="inline-block w-64 h-full bg-purple-300">Item 5</div>
      <div className="inline-block w-64 h-full bg-red-300">Item 1</div>
      <div className="inline-block w-64 h-full bg-green-300">Item 2</div>
      <div className="inline-block w-64 h-full bg-blue-300">Item 3</div>
      <div className="inline-block w-64 h-full bg-yellow-300">Item 4</div>
      <div className="inline-block w-64 h-full bg-purple-300">Item 5</div>
      <div className="inline-block w-64 h-full bg-red-300">Item 1</div>
      <div className="inline-block w-64 h-full bg-green-300">Item 2</div>
      <div className="inline-block w-64 h-full bg-blue-300">Item 3</div>
      <div className="inline-block w-64 h-full bg-yellow-300">Item 4</div>
      <div className="inline-block w-64 h-full bg-purple-300">Item 5</div>
      <div className="inline-block w-64 h-full bg-red-300">Item 1</div>
      <div className="inline-block w-64 h-full bg-green-300">Item 2</div>
      <div className="inline-block w-64 h-full bg-blue-300">Item 3</div>
      <div className="inline-block w-64 h-full bg-yellow-300">Item 4</div>
      <div className="inline-block w-64 h-full bg-purple-300">Item 5</div>
      <div className="inline-block w-64 h-full bg-red-300">Item 1</div>
      <div className="inline-block w-64 h-full bg-green-300">Item 2</div>
      <div className="inline-block w-64 h-full bg-blue-300">Item 3</div>
      <div className="inline-block w-64 h-full bg-yellow-300">Item 4</div>
      <div className="inline-block w-64 h-full bg-purple-300">Item 5</div>
    </div>
    </>
  )
}

export default ScrollHorizontalWheel