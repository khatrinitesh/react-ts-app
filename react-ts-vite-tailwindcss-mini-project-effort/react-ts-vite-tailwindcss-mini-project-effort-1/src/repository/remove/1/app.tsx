import React,{useState} from 'react'

const CustomApp = () => {
    const [data, setData] = useState<string>('Hello, world!');


    const handleRemove = () => {
        setData(''); // clear the data
    }
  return (
    <div>
      <p>Data: {data}</p>
      <DataRemove onClick={handleRemove}/>
    </div>
  )
}

export default CustomApp

interface RemoveBtnProps{
    onClick:() => void;
}

const DataRemove:React.FC<RemoveBtnProps> = ({onClick}) => {
    return(
        <>
        <button onClick={onClick}>
            Remove data
        </button>
        </>
    )
}
