import React from 'react';
import { useNavigate } from 'react-router-dom';
import BtnPrimary from '../components/BtnPrimary';

const Error:React.FC = () => {
  const navigate = useNavigate();

  const btnBack= () => {
    navigate("/")
  }
  return (
    <div className='errorContent h-screen flex flex-col items-center justify-center bg-sky-200'>
      <h3 className='font-bold text-[24px]'>Page not found</h3>
      <BtnPrimary onClick={btnBack} label="Return homepage"/>
    </div>
  );
}

export default Error;
