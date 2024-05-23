import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
        <ActiveClass/>
    </>
  )
}

export default CustomApp

// interface ActiveClassProps {
//     defaultActive?:boolean;
// }

// const ActiveClass:React.FC<ActiveClassProps> = ({defaultActive = false}) => {
//     const [isActive,setIsactive] = useState(defaultActive);

//     const toggleActive = () => {
//         setIsactive(!isActive)
//     }

//     return(
//         <>
//         <div className={isActive ? 'active' : 'inactive'} onClick={toggleActive}>
//             {isActive ? 'active' : 'inactive'}
//         </div>
//         </>
//     )
// }

interface ActiveClass{
    defaultActive?:boolean
}

const ActiveClass:React.FC<ActiveClass> = ({defaultActive = false}) => {
    const [isActive,setIsActive] = useState(defaultActive)

    const toggleActive  =() => {
        setIsActive(!isActive)
    }
    return(
        <>
         <div className={`font-bold text-[30px] ${isActive ? ' active text-[green]' : 'inactive text-[red]'}`} onClick={toggleActive}>
            {isActive ? 'active ' : 'inActive'}
         </div>
        </>
    )
}