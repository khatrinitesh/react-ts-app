import React,{useState} from 'react'

const CustomApp = () => {

    const [text,setText] = useState<string>(false)

    const btnToggle = () => {
        setText(!text)
    }
  return (
    <div>
        <button onClick={btnToggle}>{text ? 'hide' : 'show'}</button> 
        {text && <div>asdadd</div>}
    </div>
  )
}

export default CustomApp

