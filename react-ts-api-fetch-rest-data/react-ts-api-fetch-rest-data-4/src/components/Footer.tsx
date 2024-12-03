import React from 'react';

const Footer = () => {

    const currentYear = new Date().getFullYear();
  return (
    <footer className='footer py-[10px] bg-black'>
      <div className="container mx-auto">
        <p className='text-white font-bold'>&copy; copyright {currentYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
