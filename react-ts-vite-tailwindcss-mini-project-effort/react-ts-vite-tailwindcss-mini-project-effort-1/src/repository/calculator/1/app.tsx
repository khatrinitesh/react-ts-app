import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
        <Calculator />
    </>
  );
};

export default CustomApp;

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>("0");
  const [currentValue, setCurrentValue] = useState<string>("");

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      try {
        const result = eval(currentValue);
        setDisplay(result.toString());
        setCurrentValue(result.toString());
      } catch (error) {
        setDisplay("Error");
      }
    } else if (value === "C") {
      setDisplay("0");
      setCurrentValue("");
    } else {
      setCurrentValue(currentValue + value);
      setDisplay(currentValue + value);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
      <div className="calculator p-6 bg-gray-200 rounded-lg">
        <div className="display bg-white rounded-md p-4 mb-4">{display}</div>
        <div className="buttons grid grid-cols-4 gap-2">
          {["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "0", ".", "=", "/"].map((btnValue) => (
            <button key={btnValue} onClick={() => handleButtonClick(btnValue)} className="bg-blue-500 text-white rounded-md p-4">{btnValue}</button>
          ))}
          <button onClick={() => handleButtonClick("C")} className="bg-red-500 text-white rounded-md p-4 col-span-2">C</button>
        </div>
      </div>
    </div>

    </>
  );
};
