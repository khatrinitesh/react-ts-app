import { Link, NavLink, useLocation } from "react-router-dom";
import { links } from "../constants/constants";

const Header = () => {
  const location = useLocation();
  const logoSrc1 = location.pathname === '/' 
  ? `${import.meta.env.VITE_ASSETS_URL}/images/logo1.png` 
  : `${import.meta.env.VITE_ASSETS_URL}/images/logo2.avif`;

  return (
    <header className="header bg-black">
      <div className="container mx-auto">
        <div className="innerHeader flex justify-between">
          <div className="logoBlock">
            <Link to="/">
              <img src={logoSrc1}  className="max-w-[50px] block" />
            </Link>
          </div>
          <ul className="flex">
            {links.map((val,index) => (
              <NavLink key={index}
                activeclassname="active"
                className="block p-2 text-white"
                to={val.href}
              >
                {val.label}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
