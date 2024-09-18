import React from 'react';
import Banner from '../layout/Banner';
import { useNavigate } from 'react-router-dom';
import BtnPrimary from '../components/BtnPrimary';

const Error = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/")
  }
  return (
    <div className='content'>
      <Banner title='Error' desc='In proident consequat veniam adipisicing in.'/>
      <BtnPrimary title="Return to homepage" onClick={handleBack}/>
    </div>
  );
}

export default Error;
