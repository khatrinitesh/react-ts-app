import React from 'react';

const Footer:React.FC = () => {
    const currentFullYear= new Date().getFullYear();
  return (
    <>
      <footer className="footer bg-black py-[10px] text-white">
        <p>&copy; copyright {currentFullYear}</p>
      </footer>
    </>
  );
}

export default Footer;
