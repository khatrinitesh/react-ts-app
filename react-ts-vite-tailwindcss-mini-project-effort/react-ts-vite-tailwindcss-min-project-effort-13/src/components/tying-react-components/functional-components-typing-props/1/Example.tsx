import React from 'react'
import {  GreetingProps } from '../../../../interface'

const Example:React.FC<GreetingProps> = ({name,age}) => {
  return (
    <div className='container'>
        <h3>{name}</h3>
        <p>{age}</p>
    </div>
  )
}

export default Example