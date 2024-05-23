import React, { useState, useEffect } from 'react';
import './style.css';

const CustomApp = () => {
    const [loading,setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        },2000)
    },[])
  return (
    <div>
        <Preloader loading={loading}/>
    </div>
  )
}

export default CustomApp

interface PreloaderProps{
    loading:boolean;
}

const Preloader:React.FC<PreloaderProps> = ({loading}) => {

    
    return loading ? (<div className="preloader-container">
    <div className="preloader"></div>
  </div>) : null;
}