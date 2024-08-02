import React from 'react'
import { CardProps } from '../../interface/interface'

const Card:React.FC<CardProps> = ({title,children}) => {
  return (
    <div className='card'>
        <h2>{title}</h2>
        {children}
    </div>
  )
}

export default Card