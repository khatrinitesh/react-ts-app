import React from 'react'

const CustomApp = () => {

    const handleClick = () => {
        console.log('clicked')
    }
  return (
    <div>
      <RoundBtn onClick={handleClick} label="nitesh"/>
    </div>
  )
}

export default CustomApp

interface ButtonProps {
    onClick: () => void;
    label: string;
}

const RoundBtn:React.FC<ButtonProps> = ({onClick,label}) => {
    return(
        <>
         <button
      onClick={onClick}
      style={{
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
        </>
    )
}
