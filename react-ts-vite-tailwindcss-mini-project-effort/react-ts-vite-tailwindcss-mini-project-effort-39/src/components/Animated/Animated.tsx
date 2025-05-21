import React, { useEffect, useRef } from "react";
import anime from "animejs";

const AnimatedComp:React.FC = () => {

      const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (boxRef.current) {
     anime({
            targets: '.box',
            scale: [0.5, 1],
            rotate: '1turn',
            backgroundColor: '#FFF',
            duration: 2000
        });
    }
  }, []);

  return (
    <>
       <div
      ref={boxRef}
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "#4f46e5",
        margin: "auto",
        marginTop: "100px",
        borderRadius: "12px",
      }}
    >
      <p style={{ color: "#fff", textAlign: "center", paddingTop: "80px" }}>
        Hello Anime.js
      </p>
    </div>
    </>
  );
}

export default AnimatedComp;
