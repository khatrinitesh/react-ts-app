import React, { useEffect, useRef } from 'react'

const EqualHeight:React.FC = () => {
  return (
    <>
        <EqualHeightColumns/>
    </>
  )
}

export default EqualHeight

const EqualHeightColumns: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (containerRef.current) {
          const items = Array.from(containerRef.current.children) as HTMLElement[];
          const maxHeight = Math.max(...items.map(item => item.offsetHeight));
          items.forEach(item => (item.style.height = `${maxHeight}px`));
        }
      }, []);
    return (
        <div className="grid grid-cols-3 gap-5" ref={containerRef}>
          <div className="p-5 border border-gray-300">Content for Item 1</div>
  <div className="p-5 border border-gray-300">Content for Item 2</div>
  <div className="p-5 border border-gray-300">Content for Item 3</div>
  <div className="p-5 border border-gray-300">Content for Item 1</div>
  <div className="p-5 border border-gray-300">Content for Item 2</div>
  <div className="p-5 border border-gray-300">Content for Item 3</div>
  <div className="p-5 border border-gray-300">Content for Item 1</div>
  <div className="p-5 border border-gray-300">Content for Item 2</div>
  <div className="p-5 border border-gray-300">Content for Item 3</div>
  <div className="p-5 border border-gray-300">Content for Item 1</div>
  <div className="p-5 border border-gray-300">Content for Item 2</div>
  <div className="p-5 border border-gray-300">Content for Item 3</div>
      </div>
    );
  };