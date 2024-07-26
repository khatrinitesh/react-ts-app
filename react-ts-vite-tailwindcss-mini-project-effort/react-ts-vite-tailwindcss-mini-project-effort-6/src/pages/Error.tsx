import React from 'react'
import Banner from '../layout/Banner'
import BtnPrimary from '../components/BtnPrimary';
import { useNavigate } from 'react-router-dom';

const Error:React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }
  return (
    <div className='errorContent text-center h-screen flex flex-col bg-cyan-200 items-center justify-center w-full'>
        <Banner title="404 page not found" desc="Cupidatat do non dolor anim."/>
        <BtnPrimary onClick={handleClick} label='Return homepage'/>
    </div>
  )
}

export default Error