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
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("+")}>+</button>
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("-")}>-</button>
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("*")}>*</button>
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={() => handleButtonClick(".")}>.</button>
          <button onClick={() => handleButtonClick("=")}>=</button>
          <button onClick={() => handleButtonClick("/")}>/</button>
          <button onClick={() => handleButtonClick("C")}>C</button>
        </div>
      </div>
    </>
  );
};
