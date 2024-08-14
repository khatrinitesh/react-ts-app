import React from 'react'
import { ImageWithBorderProps } from '../../types';

const ImageWithBorder: React.FC<ImageWithBorderProps> = ({
    src,
    alt,
    borderColor = 'border-gray-500',
    borderWidth = 'border-4',
    borderRadius = 'rounded-lg',
  }) => {
    return (
      <div className={`relative ${borderRadius} overflow-hidden`}>
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto ${borderWidth} ${borderColor} ${borderRadius} border`}
        />
      </div>
    );
  };
  
  export default ImageWithBorder;