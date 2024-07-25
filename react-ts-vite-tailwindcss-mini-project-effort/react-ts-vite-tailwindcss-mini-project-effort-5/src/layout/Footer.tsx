import React from 'react'
import { Link } from 'react-router-dom';
import { socialMediaLinks } from '../constants/constants';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer:React.FC = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className='footer bg-black text-white p-2'>
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
          <p>&copy; copyright {currentYear}</p>
          <ul className='flex m-0 p-0'>
          {socialMediaLinks.map((link, index) => (
            <li key={index} className='me-5'>
                <Link to={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label === 'FaFacebookF' && <FaFacebookF />}
                    {link.label === 'FaYoutube' && <FaYoutube />}
                    {link.label === 'FaLinkedinIn' && <FaLinkedinIn />}
                    {link.label === 'FaTwitter' && <FaTwitter />}
                </Link>
                </li>
            ))}
            
            </ul>
        </div>
        </div>
    </footer>
  )
}

export default Footer