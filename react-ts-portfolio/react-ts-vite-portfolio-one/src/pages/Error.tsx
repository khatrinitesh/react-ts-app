import React from 'react';
// library
import { useNavigate } from 'react-router-dom';

const Error: React.FC = () => {

    const navigate = useNavigate();

    const btnBack = (): void => {
        navigate('/');
    }

    return (
        <div>
            <h3 className='font-bold font-poppinsR'>Error</h3>
            <button onClick={btnBack}>Go Back</button>
        </div>
    );
}

export default Error;

