import React from 'react'

const CustomApp = () => {
  return (
    <div>
        <Callout type="info" message="this is an info message"/>
        <Callout type="warning" message="this is an warning message"/>
        <Callout type="error" message="this is an error message"/>
    </div>
  )
}

export default CustomApp

interface CalloutProps{
    type:'info' | 'warning' | 'error';
    message:string;
}

const Callout:React.FC<CalloutProps> = ({type,message}) => {
    let backgroundColor = ''

    switch(type){
        case 'info':
        backgroundColor = 'lightblue'
        break;
        case 'warning':
        backgroundColor = 'orange'
        break;
        case 'error':
        backgroundColor = 'red'
        break;
        default:backgroundColor =' white'
    }
    return(
        <>
        <div style={{backgroundColor,padding:'10px',border:'1px solid #ccc',borderRadius: '5px', marginBottom: '10px' }}>
            <p>{message}</p>
        </div>
        </>
    )
}