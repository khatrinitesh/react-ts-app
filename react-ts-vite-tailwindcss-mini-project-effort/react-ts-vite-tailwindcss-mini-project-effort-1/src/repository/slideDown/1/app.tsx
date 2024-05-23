import React, {useState} from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
        <SlideDownComponent/>
    </>
  )
}

export default CustomApp

const SlideDownComponent: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleContent = () => {
      setIsOpen((prev) => !prev);
    };
  
    return (
      <div className="container">
        <button onClick={toggleContent}>Toggle Content</button>
        <div className={`customContent ${isOpen ? 'open' : 'closed'}`}>
          <p>This is the content that will slide down.</p>
        </div>
      </div>
 );
}