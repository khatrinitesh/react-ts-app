import React from "react";
import { useNavigate } from "react-router-dom";
import BtnPrimary from "../components/BtnPrimary";

const Error:React.FC = () => {
   // Use the properties with type safety
  //  const errorMessage = error.message || "An unexpected error occurred.";
  //  const status = error.status || 500;
 
   const navigate = useNavigate();

   const btnBack = () => {
     navigate("/");
   };
  return (
    <div className="errorContent h-screen bg-gray-400 flex flex-col items-center justify-center">
      <h1 className="text-red-600 font-bold">404 page not found</h1>
      <BtnPrimary onClick={btnBack} title="Return homepage" />
    </div>
  );
};

export default Error;
