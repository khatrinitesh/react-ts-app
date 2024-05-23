import React from 'react';

const CustomApp = () => {

  return (
    <>
        <BlackWhiteImg src="https://media.istockphoto.com/id/1410312532/photo/api-application-programming-interface-3d-render.webp?b=1&s=170667a&w=0&k=20&c=XfIMk55n8lXABY7OSFTYcVxEa583Xgg-K0YC52PJKCc=" alt="happy"/>
    </>
  )
}

export default CustomApp

interface BWProps{
    src:string;
    alt:string;
}

const BlackWhiteImg:React.FC<BWProps> = ({src,alt}) => {
    return(
        <>
        <img src={src} alt={alt} style={{filter: 'grayscale(100%)', 
          maxWidth: '100%',
          maxHeight: '100%'}} />
        </>
    )
}