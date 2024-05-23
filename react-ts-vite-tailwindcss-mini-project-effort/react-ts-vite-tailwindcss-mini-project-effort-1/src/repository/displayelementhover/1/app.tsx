import React,{useState} from 'react'

const CustomApp = () => {
  return (
    <>
        <HoverExample/>
    </>
  )
}

export default CustomApp

const HoverExample:React.FC = () => {
    const [isHover,setIshover] = useState<boolean>(false);

    const handleYes = () => {
        setIshover(true)
    }
    const handleNo = () => {
        setIshover(false)
    }

    return(
        <>
        <button onMouseEnter={handleYes} onMouseLeave={handleNo} className={`transition-all ease-in-out duration-1000 ${isHover ? 'bg-cyan-300' : 'bg-red-400'}`}>{isHover ? 'yes' : 'no'}</button>
         {isHover && <div></div>}
        </>
    )
}