import React from 'react'
import Banner from '../layout/Banner'
import BtnPrimary from './../components/BtnPrimary';
import { useNavigate } from 'react-router-dom';

const Error:React.FC = () => {

    const navigate = useNavigate();

    const handleBtnClick = (event) => {
        navigate("/")
    }
  return (
    <div className='errorContent h-screen flex items-center justify-center flex-col w-full bg-cyan-200'>
        <Banner title="404 page not found" description='Sit et eiusmod tempor consequat consequat laborum dolore Lorem ullamco ex do pariatur qui laboris.'/>
        <BtnPrimary label="Return homepage" onClick={handleBtnClick}/>
    </div>
  )
}

export default Error