import { useState, useEffect, useRef } from "react";

export function useScrollY() {
  const [scrollY, setScrollY] = useState(() => window.scrollY);

  const ticking = useRef(false);

  const scrollYListener = (): void => {
    const scrollY = window.scrollY;
    if (!ticking.current) {
      window.requestAnimationFrame(function () {
        setScrollY(scrollY);
        ticking.current = false;
      });

      ticking.current = true;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollYListener);
    return () => {
      window.removeEventListener("scroll", scrollYListener);
    };
  }, []);

  return scrollY;
}
