import React from 'react';
import BtnPrimary from '../components/BtnPrimary';
import { useNavigate } from 'react-router-dom';

const Error:React.FC = () => {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  }
  return (
    <div className='errorContent h-screen flex flex-col items-center justify-center gap-4'>
      <h2 className='font-bold text-[25px]'>404 page not found</h2>
      <BtnPrimary onClick={handleBack} title="Return Homepage" />
    </div>
  );
}

export default Error;
