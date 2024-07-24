import React from "react";
// images
import Logo from '../assets/img/logo.svg'
// constants
import SocialMediaIcon from "./SocialMediaIcon";
// library
import { Link } from "react-router-dom";

const Footer:React.FC = () => {
  const newDate = new Date();
  const currentFullYear:number = newDate.getFullYear();
  return (
    <footer>
    <div className="flex flex-col items-center justify-between border-t  py-10 sm:flex-row sm:py-12">
      <div className="mr-auto flex flex-col items-center sm:flex-row w-full">
        <Link to="/" className="ms-auto me-auto md:ms-0 md:me-auto">
          <img src={Logo} alt="logo" />
        </Link>
        <p className="pt-5 font-body font-light dark:text-white text-primaryD sm:pt-0">
          &copy; {currentFullYear} John Doe.
        </p>
      </div>
      <SocialMediaIcon />
    </div>
  </footer>
  );
};

export default Footer;
