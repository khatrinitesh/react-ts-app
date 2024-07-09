import React from 'react'
import { AlertProps } from '../interface/interface'
import { alertColors } from '../constants/constants'

const AlertButtonsComp:React.FC<AlertProps> = ({type,message}) => {
  return (
    <>
     <div className="rounded-md p-4 mb-4" style={{ backgroundColor: alertColors[type] }}>
            <p className="font-bold">{type.toUpperCase()}</p>
            <p>{message}</p>
        </div>
    </>
  )
}

export default AlertButtonsComp