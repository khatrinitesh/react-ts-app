import React from 'react';

const BtnPrimary:React.FC<ButtonProps> = ({onClick,children}) => {
  return (
    <>
      <button onClick={onClick} className='bg-blue-500 text-white px-3 py-2 rounded-[10px]'>{children}</button>
    </>
  );
}

export default BtnPrimary;
