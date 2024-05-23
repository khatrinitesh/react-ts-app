import React, { useRef,useState,useEffect  } from "react";
import './style.css';

const CustomApp = () => {
  return <>
    <ScrollToTopButton/>
  </>;
};

export default CustomApp;

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const scrollTopRef = useRef<HTMLSpanElement>(null);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsVisible(window.scrollY > 200);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
  
    return (
        <span
      className="scroll-to-top"
      onClick={scrollToTop}
      ref={scrollTopRef}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      Back to top
    </span>
    );
  };
  