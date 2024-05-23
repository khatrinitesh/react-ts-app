import React,{useState} from 'react'

const CustomApp = () => {

    const [customClass,setCustomClass] = useState<boolean>(false);

    const btnToggleClass= () => {
        setCustomClass(!customClass)
    }

    
  return (
    <div className={`${customClass ? 'active' : ''}`} onClick={btnToggleClass}>
        content
    </div>
  )
}

export default CustomApp

