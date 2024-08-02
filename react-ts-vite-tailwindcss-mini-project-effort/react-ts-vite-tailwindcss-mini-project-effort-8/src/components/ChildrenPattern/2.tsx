import React from 'react'
import { ModalProps } from '../../interface/interface'

const ChildPatternApp:React.FC<ModalProps> = ({isOpen,onClose,children}) => {

    if(!isOpen) return null;
  return (
    <>
     <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
    </>
  )
}

export default ChildPatternApp:React.FC<ModalProps>