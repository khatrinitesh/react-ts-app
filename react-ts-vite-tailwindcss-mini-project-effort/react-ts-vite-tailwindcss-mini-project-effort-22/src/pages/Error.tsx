import React from 'react';
import Banner from '../assets/layout/Banner';
import { useNavigate } from 'react-router-dom';

const Error = () => {

    const navigate = useNavigate();

    const btnBack = () => {
        navigate('/')
    }
  return (
    <div className='errorContent'>
      <Banner title="Error page not found" description='Cupidatat dolore sint dolor nostrud ad velit.'/>
    </div>
  );
}

export default Error;
