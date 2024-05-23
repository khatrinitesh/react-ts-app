import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const CustomApp = () => {
  return (
    <>
        <Dropup/>
    </>
  )
}

export default CustomApp

const Dropup: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropup = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`dropup ${isOpen ? 'open' : ''}`}>
        <button className="dropup-btn" onClick={toggleDropup}>Toggle Dropup</button>
        <div className="dropup-content">
          <ul>
            <li>
              <Link href="/dropup-item1">
                <a>Dropup Item 1</a>
              </Link>
            </li>
            <li>
              <Link href="/dropup-item2">
                <a>Dropup Item 2</a>
              </Link>
            </li>
            <li>
              <Link href="/dropup-item3">
                <a>Dropup Item 3</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  

