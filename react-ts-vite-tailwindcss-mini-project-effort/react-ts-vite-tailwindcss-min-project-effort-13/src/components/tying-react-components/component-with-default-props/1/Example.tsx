import React from 'react';
import { CardProps } from '../../../../interface';


const Example:React.FC<CardProps> = ({title,content='Default content'}) => {
  return (
    <div className="card shadow rounded-[10px]">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}

export default Example