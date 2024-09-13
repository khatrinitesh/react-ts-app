import React from 'react';
import { BannerTypes } from '../types';
import Banner from '../layout/Banner';
import BtnPrimary from './../components/BtnPrimary';
import { useNavigate } from 'react-router-dom';

const Error:React.FC<BannerTypes> = ({title,description}) => {

    const navigate = useNavigate();

    const handleBack  =() =>{ 
        navigate("/")
    }
  return (
    <div className='content'>
      <Banner title="Error" description="Aliqua ad occaecat qui nisi nisi et labore."/>
      <BtnPrimary onClick={handleBack} label='return to homepage'/>
    </div>
  );
}

export default Error;
