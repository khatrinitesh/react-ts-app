import React, { useState } from 'react'
import { Status } from '../enum/status.enum'
import BtnPrimary from './Button/BtnPrimary';

const StatusComponents = () => {
    const [status,setStatus] = useState<Status>(Status.Loading);

    const simulateApiCall = () => {
        setTimeout(() => {
            setStatus(Status.Success)
        },0)
    }
  return (
    <>
        {status === Status.Loading && <p>Loading...</p>}
        {status === Status.Success && <p>Data loaded successfully</p>}
        {status === Status.Error && <p>Failed to load data.</p>}
        <BtnPrimary onClick={simulateApiCall}>Simulate API call</BtnPrimary>
    </>
  )
}

export default StatusComponents