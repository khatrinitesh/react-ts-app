import React from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from './../layout/Banner';

const Error = () => {

  const navigate = useNavigate();

  const btnBack=() => {
    navigate("/")
  }
  return (
    <div className='content'>
      <Banner title="Page not found" desc="Exercitation duis ullamco quis proident officia deserunt deserunt aute cillum."/>
      <button onClick={btnBack}>Return to homepage</button>
    </div>
  )
}

export default Error