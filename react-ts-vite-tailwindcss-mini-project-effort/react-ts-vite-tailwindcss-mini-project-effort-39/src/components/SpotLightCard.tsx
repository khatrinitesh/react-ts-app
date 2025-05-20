import { useRef, useState } from "react";
import { motion } from "framer-motion";
import type { CardItem } from '../interface';

interface SpotlightCardProps {
  item: CardItem;
}

const SpotLightCard:React.FC<SpotlightCardProps> = ({item}) => {

    const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };
  return (
    <>
      <motion.div
      ref={cardRef}
      className="relative w-80 p-6 rounded-2xl shadow-neumorphism bg-[#e0e5ec] text-gray-800 cursor-pointer overflow-hidden"
      onMouseMove={handleMouseMove}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.4), transparent 80%)`,
        }}
      />
      <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
      <p className="text-sm">{item.description}</p>
    </motion.div>
    </>
  )
}

export default SpotLightCard
