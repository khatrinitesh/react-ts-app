import React from "react";
import { Link } from 'react-scroll';
import { NAV_ITEMS } from "./../../src/constants/index";

const Navbar: React.FC = () => {
    const handleSetActive = (to) => {
        console.log(to);
      };
  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "white",
          zIndex: 1,
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "1rem",
            backgroundColor:'rgba(0,0,0,1)',
            listStyle:'none'
          }}
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.link}>
              <Link to={item.link} activeClass="active" onSetActive={handleSetActive} smooth={true} duration={1000} style={{color:'white'}}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
