import React,{useState} from "react";

const CustomApp: React.FC = () => {
    const handleQtyChange = (value: number) => {
        console.log("Quantity changed:", value);
        // You can perform any action when the quantity changes here
      };

      
  return <div>
    <Qty onChange={handleQtyChange}/>
  </div>;
};

export default CustomApp;

interface QtyProps {
    onChange: (value: number) => void;
  }


const Qty: React.FC<QtyProps> = ({onChange}) => {

    const [num,setNum] = useState<number>(0);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value)
        if(!isNaN(value)){
            setNum(value);
            onChange(value);
        }
    }
    const handleIncrement = () => {
        setNum((prevCount) => prevCount+ 1)
        onChange(num + 1)
    }
    const handleDecrement = () => {
        setNum((prevCount) => prevCount - 1)
        onChange(num - 1)
    }

    const handleReset = () => {
        setNum(0)
    }
 
  return (
    <>
        <button onClick={handleDecrement}> Decrement -</button>
      <input type="text" value={num} onChange={handleChange}  />
      <button onClick={handleIncrement}>Increment +</button><br />
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
