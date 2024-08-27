import React from 'react';
import { NavLinks } from '../constants/navLinks';
import { Link, useLocation } from 'react-router-dom';
import Logo1 from "../../public/images/logo1.png"
import Logo2 from "../../public/images/logo2.jpg"

const Header:React.FC = () => {
    const location = useLocation();

    const imageLogo = location.pathname === "/" ? `${Logo1}` : `${Logo2}`

      // Function to determine if a link is active
      const getLinkClass = (url: string) => {
        return location.pathname === url
            ? 'bg-red-500 text-white' // Active link style (you can customize this)
            : 'text-white'; // Default link style
    };
  return (
    <header className='header bg-black'>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
            <img src={imageLogo} alt="" className='img-fluid max-w-20' />
        </Link>
        <ul className='flex'>
            {NavLinks.map((val,index) => (
                <li key={index}>
                    <Link to={val.url} className={`p-2 block ${getLinkClass(val.url)}`}>{val.label}</Link>
                </li>
            ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
