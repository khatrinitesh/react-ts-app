import React from 'react'
import Banner from '../components/banner'
import { useNavigate } from 'react-router-dom'

const NotFoundPage:React.FC = () => {
    const navigate = useNavigate();

    const btnBack = () => {
        navigate("/");
    }
  return (
    <div className='content h-full flex bg-red-500 flex-col'>
        <Banner bannerStyle="bg-cyan-500 text-white" title="Not Found page" description='Qui enim tempor sint cillum cillum.'/>
        <button onClick={btnBack} className='bg-black text-white px-9 py-2 rounded'>Go Back</button>
    </div>
  )
}

export default NotFoundPage