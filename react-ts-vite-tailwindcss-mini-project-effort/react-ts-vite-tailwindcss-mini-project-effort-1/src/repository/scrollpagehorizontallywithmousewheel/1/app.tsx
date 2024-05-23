import React, { useRef,useState, useEffect } from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
      <HorizontalScrollingComponent/>
    </>
  )
}

export default CustomApp


const HorizontalScrollingComponent:React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleWheelScroll = (evt:React.WheelEvent<HTMLDivElement>) => {
    if(scrollContainerRef.current){
      evt.preventDefault();
      scrollContainerRef.current.scrollLeft += evt.deltaY;
    }
  }
  return(
    <>
       <div className='horizontal-scroll-container'
      ref={scrollContainerRef}
      style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}
      onWheel={handleWheelScroll}
    >
      {/* section 1 */}
      <section>
        <h1>Beep</h1>
      </section>
      {/* section 2 */}
      <section>
        <h1>Boop</h1>
      </section>
      {/* section 3 */}
      <section>
        <h1>Boooom</h1>
      </section>
      {/* section 4 */}
      <section>
        <h1>The End</h1>
      </section>
      {/* section 1 */}
      <section>
        <h1>Beep</h1>
      </section>
      {/* section 2 */}
      <section>
        <h1>Boop</h1>
      </section>
      {/* section 3 */}
      <section>
        <h1>Boooom</h1>
      </section>
      {/* section 4 */}
      <section>
        <h1>The End</h1>
      </section>
      {/* section 1 */}
      <section>
        <h1>Beep</h1>
      </section>
      {/* section 2 */}
      <section>
        <h1>Boop</h1>
      </section>
      {/* section 3 */}
      <section>
        <h1>Boooom</h1>
      </section>
      {/* section 4 */}
      <section>
        <h1>The End</h1>
      </section>
      {/* section 1 */}
      <section>
        <h1>Beep</h1>
      </section>
      {/* section 2 */}
      <section>
        <h1>Boop</h1>
      </section>
      {/* section 3 */}
      <section>
        <h1>Boooom</h1>
      </section>
      {/* section 4 */}
      <section>
        <h1>The End</h1>
      </section>
      
    </div>
    </>
  )
}