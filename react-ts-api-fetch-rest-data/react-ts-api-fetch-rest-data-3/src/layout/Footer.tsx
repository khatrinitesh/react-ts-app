import React from 'react';

const Footer:React.FC = () => {

    const currentYear = new Date().getFullYear();
  return (
    <footer className='footer py-2 bg-black'>
      <div className="container px-[1rem] mx-auto">
        <p className='text-white'>&copy; copyright {currentYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
