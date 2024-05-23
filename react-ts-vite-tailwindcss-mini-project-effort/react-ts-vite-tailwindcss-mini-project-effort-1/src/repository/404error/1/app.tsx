import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {

    const navigate = useNavigate();

    const btnBack = () => {
        navigate('/');
    }
    return ( 
      <div>
        <h2>404 - Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <button onClick={btnBack} className='bg-blue-900 text-white rounded p-[5px]'>Go Back</button>
      </div>
    );
  };

export default NotFound