import React,{useState} from 'react'

const CustomApp = () => {
    const [loading,setLoading] = useState<boolean>(false);

    const handleClick = () => {
         // Simulate loading for 2 seconds
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        },2000);
    }
  return (
    <>
     <LoadingBtn onClick={handleClick} loading={loading} text="Click me"/>
    </>
  )
}

export default CustomApp

interface LoadingBtnProps {
    onClick:() => void; 
    loading:boolean;
    text:string;
}

const LoadingBtn:React.FC = ({onClick,loading,text}) => {
    return(
        <>
        <button onClick={onClick}>
            {loading ? 'Loading...' : text}
        </button>
        </>
    )
}