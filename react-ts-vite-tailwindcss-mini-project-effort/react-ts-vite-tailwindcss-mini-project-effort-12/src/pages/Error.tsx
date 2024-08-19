import React from 'react'
import Banner from '../layout/Banner'
import { useNavigate, useRouteError } from 'react-router-dom'
import BtnPrimary from '../components/BtnPrimary';
import { RouteError } from '../interface/interface';


const Error:React.FC = () => {

  const error = useRouteError() as RouteError;

  console.error(error);
    const navigate = useNavigate();


    const btnBack = () => {
        navigate("/")
    }
  return (
    <div className='content h-screen bg-slate-300 flex items-center justify-center flex-col'>
     <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <BtnPrimary title="Return homepage" onClick={btnBack}/>
    </div>
  )
}

export default Error
