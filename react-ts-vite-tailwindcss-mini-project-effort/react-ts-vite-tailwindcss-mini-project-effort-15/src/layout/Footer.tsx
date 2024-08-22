import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer py-2 text-white bg-black">
      <div className="container mx-auto">
        <p>&copy; Copyright {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
