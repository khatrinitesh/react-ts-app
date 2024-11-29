import React from 'react';

const Footer = () => {

  const currentYear = new Date().getFullYear();
  return (
    <footer className='footer py-[20px] bg-black'>
      <div className="container mx-auto">
        <p className='text-white font-bold text-[12px] m-0'>&copy; Copyright {currentYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
