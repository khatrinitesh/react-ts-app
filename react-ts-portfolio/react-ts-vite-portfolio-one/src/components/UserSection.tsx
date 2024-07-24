import React from 'react';
import { imagesData } from '../constants/Constants';

interface ImageData {
  url: string;
  color: string;
}

const UserSection: React.FC = () => {
  return (
    <div className="flex my-[30px] justify-start items-center">
      {imagesData.map((image: ImageData, index: number) => (
        <div key={index} className="relative">
          <div className="flex items-center justify-center w-12 h-12 mx-2 overflow-hidden rounded-full">
            <img src={image.url} alt={`Image ${index + 1}`} />
          </div>
          <div className={`absolute bottom-0 right-0 w-4 h-4 mr-1 rounded-full border-2 border-white ${image.color}`}></div>
        </div>
      ))}
    </div>
  );
}

export default UserSection;

