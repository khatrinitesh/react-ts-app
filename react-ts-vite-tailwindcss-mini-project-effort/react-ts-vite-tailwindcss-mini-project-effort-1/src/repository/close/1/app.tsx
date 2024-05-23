import React,{useState} from 'react'

const CustomApp = () => {
  return (
    <>
      <Close/>
    </>
  )
}

export default CustomApp

const Close:React.FC = () => {
    const [text,setText] = useState<string>('nitesh');
    const [toggle,setToggle] = useState<boolean>(true);

    const btnToggle = () => {
        setToggle(!toggle);
    }
    
    return(
        <>
        <button onClick={btnToggle} className={`font-bold ${toggle ? 'text-[green]' : 'text-[red]'}`}>Click {toggle ? 'active' : 'inactive'}</button>
        <br/>
         {toggle && <>{text}</> }
        </>
    )
}
