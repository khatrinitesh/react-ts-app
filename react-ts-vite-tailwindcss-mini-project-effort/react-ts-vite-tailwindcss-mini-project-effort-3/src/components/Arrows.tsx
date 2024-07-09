import React from 'react';
import { ArrowConstants } from '../interface/interface';
import { arrowConstants } from '../constants/constants';

const ArrowsComp:React.FC<{direction:keyof ArrowConstants}> = ({direction}) => {
    const arrow:ArrowIcon = arrowConstants[direction];

  return (
    <>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={arrow.path} />
        </svg>
    </>
  )
}

export default ArrowsComp

