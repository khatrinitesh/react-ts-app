import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    const handleLogin=() => {
        navigate('/login')
    }
  return (
    <div className="home-page">
    <h1>Welcome to the Home Page!</h1>
    <button onClick={handleLogin}>Login</button>
  </div>
  )
}

export default Home