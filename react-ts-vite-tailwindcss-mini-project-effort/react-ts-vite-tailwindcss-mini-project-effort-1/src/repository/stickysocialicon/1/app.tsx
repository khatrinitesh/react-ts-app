import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faGooglePlusG, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './style.css';

const CustomApp = () => {
  return (
    <>
        <StickySocialBar topPosition="50px" rightPosition="50px"/>
    </>
  )
}

export default CustomApp

interface StickySocialBarProps {
    topPosition: string;
    rightPosition: string;
  }

  const StickySocialBar: React.FC<StickySocialBarProps> = ({ topPosition, rightPosition }) => {
    return (
      <div className="sticky-icon" style={{ top: topPosition, right: rightPosition }}>
        <a href="https://www.instagram.com/?hl=en" className="Instagram">
          <FontAwesomeIcon icon={faInstagram} className='me-2' />
          Instagram
        </a>
        <a href="https://www.facebook.com/" className="Facebook">
          <FontAwesomeIcon icon={faFacebookF} className='me-2' />
          Facebook
        </a>
        <a href="https://aboutme.google.com/u/0/?referer=gplus" className="Google">
          <FontAwesomeIcon icon={faGooglePlusG} className='me-2' />
          Google +
        </a>
        <a href="https://www.youtube.com/" className="Youtube">
          <FontAwesomeIcon icon={faYoutube} className='me-2' />
          Youtube
        </a>
        <a href="https://twitter.com/login" className="Twitter">
          <FontAwesomeIcon icon={faTwitter} className='me-2' />
          Twitter
        </a>
      </div>
    );
  };