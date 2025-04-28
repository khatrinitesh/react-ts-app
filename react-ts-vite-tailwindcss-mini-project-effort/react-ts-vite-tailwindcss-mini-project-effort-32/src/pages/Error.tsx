import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error:React.FC = () => {
    const navigate = useNavigate();
    const btnClick = () => {
        navigate(-1)
    }
  return (
    <>
      <div className="errorContent">
        <h3>Page not found</h3>
        <button onClick={btnClick}>Get Back HomePage</button>
      </div>
    </>
  );
}

export default Error;
