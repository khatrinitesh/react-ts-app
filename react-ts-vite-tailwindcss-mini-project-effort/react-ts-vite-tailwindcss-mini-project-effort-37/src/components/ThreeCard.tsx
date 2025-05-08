import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useCardStore } from "../store/use3dCardStore";

const ThreeCard:React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { transform, setTransform, resetTransform } = useCardStore();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const bounds = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - bounds.left;
    const mouseY = e.clientY - bounds.top;
    const centerX = mouseX - bounds.width / 2;
    const centerY = mouseY - bounds.height / 2;
    const distance = Math.sqrt(centerX ** 2 + centerY ** 2);

    setTransform({
      rotateX: centerY / 20,
      rotateY: -centerX / 20,
      scale: 1.07,
      glowPosition: {
        x: centerX * 2 + bounds.width / 2,
        y: centerY * 2 + bounds.height / 2,
      },
    });
  };

  const handleMouseLeave = () => {
    resetTransform();
  };

  return (
      <motion.div
        className="card"
        ref={cardRef}
        style={{
          transform: `
        perspective(1000px)
        rotateX(${transform.rotateX}deg)
        rotateY(${transform.rotateY}deg)
        scale(${transform.scale})
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        3D Card
        <div
          className="glow"
          style={{
            backgroundImage: `
          radial-gradient(circle at ${transform.glowPosition.x}px ${transform.glowPosition.y}px,
            #ffffff55,
            #0000000f
          )
        `,
          }}
        />
      </motion.div>
  );
};

export default ThreeCard;
