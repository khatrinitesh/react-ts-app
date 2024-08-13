import React, { useState } from 'react'
import InputFieldComp from '../components/InputField';
import ButtonComp from '../components/Button';

const Login: React.FC  = () => {
    const [username,setUsername] = useState('');
    const [pwd,setPwd] = useState('');

    const handleLogin= () => {
        console.log(`username ${username}`);
        console.log(`password ${pwd}`);
    }

  return (
    <>
    <div className="login-page">
        <h2>Login</h2>
        <InputFieldComp value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
        <InputFieldComp type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} placeholder="password"/>
        <ButtonComp onClick={handleLogin}>Login</ButtonComp>
    </div>
    </>
  )
}

export default Login