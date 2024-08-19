import React from 'react'
import Banner from '../layout/Banner'
import { useNavigate } from 'react-router-dom'
import BtnPrimary from '../components/BtnPrimary';

const Error:React.FC = () => {

    const navigate = useNavigate();

    const btnBack = () => {
        navigate("/")
    }
  return (
    <div className='content h-full'>
      <Banner className="bg-red-400 text-white p-5" title="Error" desc="Ullamco officia officia ullamco eu elit et."/>
      <BtnPrimary title="Return homepage" onClick={btnBack}/>
    </div>
  )
}

export default Error
