import React from 'react'

const CustomApp = () => {
  return (
    <div>
        <BigHeader text="Happier"/>
    </div>
  )
}

export default CustomApp

interface  BigHeaderProps {
    text:string;
}

const BigHeader:React.FC<BigHeaderProps> = ({text}) => {
    return(
        <>
         <h1 style={{fontSize:'2.5rem',fontWeight:'bold',color:'red'}}>{text}</h1>
        </>
    )
}