import React from 'react';
import { BlurredBackgroundProps } from '../../types';

const BlurredBackground: React.FC<BlurredBackgroundProps> = ({ imageUrl, children }) => {
  return (
    <div className="relative w-full h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})`, filter: 'blur(8px)' }}
      ></div>
      <div className="relative z-10 p-8">
        {children}
      </div>
    </div>
  );
};

export default BlurredBackground;
