import React from 'react'
import { BorderFrameProps } from '../../types';

const BorderFrame: React.FC<BorderFrameProps> = ({
    children,
    borderColor = 'border-gray-500',
    borderWidth = 'border-4',
    borderRadius = 'rounded-lg',
    padding = 'p-4',
  }) => {
    return (
      <div
        className={`border ${borderWidth} ${borderColor} ${borderRadius} ${padding}`}
      >
        {children}
      </div>
    );
  };
  
  export default BorderFrame;