import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate();

    const btnBack = () => {
        navigate("/")
    }
  return (
    <div>Error
        <button onClick={btnBack}>Return to homepage</button>
    </div>
  )
}

export default Error