// SocialMediaLinks.tsx
import React from 'react';
import { socialMediaLinks } from '../constants/constants';

const SocialMediaLinks: React.FC<SocialMediaLink > = ({label,url,icon}) => {
  return (
    <div className="flex space-x-4">
      {socialMediaLinks.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-white hover:text-gray-400"
        >
          <link.icon className="text-2xl" />
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
