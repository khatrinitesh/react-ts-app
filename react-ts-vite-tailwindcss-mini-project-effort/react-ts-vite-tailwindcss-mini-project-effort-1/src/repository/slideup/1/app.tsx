import React,{useState} from 'react'

const CustomApp = () => {
  return (
    <>
        <SlideUp/>
    </>
  )
}

export default CustomApp

const SlideUp:React.FC = () => {
    const [isOpen,setIsOpen] = useState(false);

    const btnslideUp = () => {
        setIsOpen(!isOpen)
    }
    return(
        <>
        {isOpen && <div>Slide up content</div>}
        <button onClick={btnslideUp}>Slide up</button>
        </>
    )
}