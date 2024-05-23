import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style.css';


const CustomApp = () => {
    const options = [
        {title:'head1' ,link:'https://www.w3schools.com/'},
        {title:'head2' ,link:'https://www.javatpoint.com/html-tutorial'},
        {title:'head3' ,link:'https://www.w3schools.com/css/'},
    ]

  return (
    <>
    <FatNav items={options}/>
  </>   
  )
};

export default CustomApp;

interface NavItems {
  title: string;
  link: string;
}

const FatNav: React.FC<{items:NavItems[]}> = ({ items }) => {
  const [isOpen, setIsopen] = useState<boolean>(false);

  const toggleNav = () => {
    setIsopen(!isOpen);
  };

  return (
    <>
      <div className={`fatnav ${isOpen ? "open" : ""}`}>
        <button className="fatnav-toggle" onClick={toggleNav}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
        <nav className="fatnav-menu">
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>
                  <a>{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
