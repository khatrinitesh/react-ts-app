import React from 'react';
import SocialMediaLinks from '../components/SocialMediaLinks';

const Footer:React.FC = () => {

    const currentYear = new Date().getFullYear();
  return (
    <footer className='footer py-2 bg-black text-white'>
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; copyright {currentYear}</p>
        <SocialMediaLinks/>
      </div>
    </footer>
  );
}

export default Footer;
