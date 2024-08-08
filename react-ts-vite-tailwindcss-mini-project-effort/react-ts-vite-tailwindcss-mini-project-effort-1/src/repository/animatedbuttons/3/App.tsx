import React, { useState } from 'react';
import './style.css';
import { FaApple, FaBeer, FaCoffee } from 'react-icons/fa';

const App = () => {
  return (
    <>
    <IconList iconConfigs={iconConfigs} />
    </>
  )
}

export default App


// Define a tuple type for icon configuration
type IconConfig = [React.ReactNode,string];  // [icon, animationClass]

const iconConfigs:IconConfig[] = [
    [<FaBeer />, 'spin'], // Import FaBeer from react-icons
    [<FaCoffee />, 'bounce'], // Import FaCoffee from react-icons
    [<FaApple />, 'shake'], // Import FaApple from react-icons
]

interface IconProps{
    icon:React.ReactNode;
    animationClass:string;
}

interface IconListProps{
    iconConfigs:IconConfig[];
}


const Icon:React.FC<IconProps> = ({icon,animationClass}) => {
    return(
        <>
         <div className={`icon ${animationClass}`}>
        {icon}
        </div>
        </>
    )
}

const IconList:React.FC<IconListProps> = ({iconConfigs}) => {
    return(
        <>
         <div className="icon-list">
            {iconConfigs.map(([icon,animationClass],index) => (
                <Icon key={index} icon={icon} animationClass={animationClass}/>
            ))}
         </div>
        </>
    )
}
