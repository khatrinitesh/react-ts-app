import React, { useEffect, useRef } from 'react';
import '../styles/horizontalscroll.css';
import { SCROLL_ITEMS } from '../constants/constants';
import { motion } from "framer-motion";

const HorizontalScroll:React.FC = () => {
      const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <div className="scroll-wrapper">
      <div className="scroll-container" ref={containerRef}>
        {SCROLL_ITEMS.map((item: ScrollItem, index: number) => (
          <motion.div
            className="scroll-card"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
}

export default HorizontalScroll;
