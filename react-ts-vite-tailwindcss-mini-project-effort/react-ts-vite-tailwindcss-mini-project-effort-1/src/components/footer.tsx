import React from "react";

const Footer: React.FC = () => {
  const currentYear:number = new Date().getFullYear();
  const nameLogo:string = 'LOGO'
  return (
    <footer className="bg-gray-800 text-white p-4">
        <h2>{nameLogo}</h2>
      <p>{currentYear}</p>
    </footer>
  );
};

export default Footer;
