import React from "react";
import { BtnPrimary } from "../interface";

const BtnPrimaryComp:React.FC<BtnPrimary> = ({ title, onClick }) => {
  return (
    <>
    <button onClick={onClick} class="bg-blue-600 text-white font-bold py-2 px-4 text-base rounded-md transition-all duration-150 ease-in-out transform hover:bg-blue-700 hover:shadow-lg active:translate-x-1 active:translate-y-1 active:shadow-md">
  {title}
</button>


    </>
  );
};

export default BtnPrimaryComp ;
