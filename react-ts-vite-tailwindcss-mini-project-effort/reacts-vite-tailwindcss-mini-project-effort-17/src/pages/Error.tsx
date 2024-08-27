import React from 'react';
import Banner from '../layout/Banner';
import { useNavigate } from 'react-router-dom';
import BtnPrimary from '../components/BtnPrimary';

const Error:React.FC = () => {
    const navigate = useNavigate();

    const btnBack = () => {
        navigate("/")
    }
  return (
    <div className='content h-[100dvh] text-center bg-cyan-500 flex flex-col items-center justify-center'>
      <Banner title='Error' desc='Sunt amet ea ut ut eu fugiat reprehenderit.'/>
      <BtnPrimary onClick={btnBack} title="Return homepage"/>
    </div>
  );
}

export default Error;
