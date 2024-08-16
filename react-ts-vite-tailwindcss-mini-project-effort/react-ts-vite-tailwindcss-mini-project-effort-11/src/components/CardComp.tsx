import React from 'react'
import { CardProps } from '../types'

const CardComp:React.FC<CardProps> = ({ title, content, imageUrl, actions, className }) => {
  return (
    <>
     <div className={`card ${className || ''}`}>
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className="card-content">{content}</div>
        {actions && <div className="card-actions">{actions}</div>}
      </div>
    </div>
    </>
  )
}

export default CardComp