import React from 'react';

const Footer = () => {

    const currentFullYear  = new Date().getFullYear();
  return (
    <footer className='footer bg-black py-[20px]'>
      <div className="container mx-auto">
        <p className='text-white font-bold text-[15px]'>&copy; copyright {currentFullYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
