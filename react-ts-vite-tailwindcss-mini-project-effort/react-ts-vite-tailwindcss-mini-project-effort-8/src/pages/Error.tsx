import React from 'react'
import Banner from '../layout/Banner'
import BtnPrimary from '../components/Button/BtnPrimary'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate();

  const handleClick =() => {
    navigate("/")
  }
  return (
    <div className='content flex flex-col h-screen  bg-sky-200 items-center justify-center'>
        <Banner title='Error' description='Aute consectetur tempor consectetur culpa fugiat ad nisi pariatur exercitation dolor minim.'/>
        <BtnPrimary onClick={handleClick} label="Return homepage"/>
    </div>
  )
}

export default Error