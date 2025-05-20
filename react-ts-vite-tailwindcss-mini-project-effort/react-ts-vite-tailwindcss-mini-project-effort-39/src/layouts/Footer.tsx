import React from 'react';

const Footer:React.FC = () => {

    const currentFullYear = new Date().getFullYear();
  return (
    <footer className='footer py-[10px] bg-blue-600 text-white'>
      <div className="container mx-auto">
        <p className="txtCopyright">&copy; copyright {currentFullYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
