import React from 'react'
import { BulletListProps } from '../../types';

const BulletList: React.FC<BulletListProps> = ({ items, bulletColor = 'text-gray-500' }) => {
    return (
      <ul className="list-disc list-none pl-5">
        {items.map((item, index) => (
          <li key={index} className={`relative pl-6`}>
            <span className={`absolute left-0 top-1/2 transform -translate-y-1/2 ${bulletColor}`}>
              &#8226;
            </span>
            {item}
          </li>
        ))}
      </ul>
    );
  };
  
  export default BulletList;