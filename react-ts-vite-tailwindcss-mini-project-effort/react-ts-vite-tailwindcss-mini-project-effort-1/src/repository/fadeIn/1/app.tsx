import React, { useState,useEffect } from 'react'

const CustomApp = () => {
  return (
    <>
      <FadeIn/>
    </>
  )
}

export default CustomApp

const FadeIn:React.FC  =({children}) => {

  const [isVisible,setIsvisible] = useState<boolean>(false);

  useEffect(() => {
    setIsvisible(true);
  },[])
  return(
    <>
     <>
      {children}
     </>
    </>
  )
}