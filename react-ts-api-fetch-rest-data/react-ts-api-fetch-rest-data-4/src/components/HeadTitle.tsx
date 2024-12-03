import React from 'react';

const HeadTitle:React.FC<HeadTitleProps> = ({children,headStyle}) => {
  return (
    <>
      <h2 className={`${headStyle} text-[32px] font-bold text-red-600`}>{children}</h2>
    </>
  );
}

export default HeadTitle;
