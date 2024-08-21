import React from 'react'
import { ContainerProps } from '../../../../interface'

const Example:React.FC<ContainerProps> = ({children}) => {
  return (
    <div className='container'>
        {children}
    </div>
  )
}

export default Example