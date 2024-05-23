import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
        <BottomNav/>
    </>
  )
}

export default CustomApp

const BottomNav:React.FC = () => {
    const [selectedItem,setSelecteditem] = useState<string>('Home');


    return(
        <>
         <div style={{ backgroundColor: '#f0f0f0', padding: '10px', position: 'fixed', bottom: 0, width: '100%', textAlign: 'center' }}>
            <NavigationItem label="Home" onClick={() => setSelecteditem(alert('Home'))}/>
            <NavigationItem label="About" onClick={() => setSelecteditem(alert('About'))}/>
            <NavigationItem label="Contact" onClick={() => setSelecteditem(alert('Contact'))}/>
         </div>
        </>
    )
}

interface NavigationProps {
    label:string;
    onClick:() => void;
}

const NavigationItem:React.FC<NavigationProps> = ({label,onClick}) => {
    return(
        <>
        <button onClick={onClick} style={{margin:'0 10px'}}>{label}</button>
        </>
    )
}

