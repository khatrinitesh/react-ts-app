import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {

    const navigate = useNavigate();

    const btnBack = () => {
        navigate('/')
    }
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
        <h2>404 found not page</h2>
        <button onClick={btnBack} className='font-bold bg-cyan-300 px-5 py-2 rounded'>Return to homepage</button>
    </div>
  )
}

export default Error