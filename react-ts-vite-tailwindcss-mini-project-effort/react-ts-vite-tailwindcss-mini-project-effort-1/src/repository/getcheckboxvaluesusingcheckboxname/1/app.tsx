import React, { useState } from "react";
// import './style.css';

const CustomApp = () => {
  return (
    <>
      <CheckBoxExample />
    </>
  );
};

export default CustomApp;

const CheckBoxExample: React.FC = () => {
  // State to store selected checkbox values
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<{
    [key: string]: boolean;
  }>({});

  // function to handle checkbox click events
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSelectedCheckboxes((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  // Function to get selected checkbox values by name
  const getCheckboxValue = (checkboxName: string) => {
    return selectedCheckboxes[checkboxName] || false;
  };
  return (
    <>
      <div>
        <label>
          <input
            type="checkbox"
            name="checkbox1"
            checked={selectedCheckboxes["checkbox1"] || false}
            onChange={handleCheckboxChange}
          />
          Checkbox 1
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="checkbox2"
            checked={selectedCheckboxes["checkbox2"] || false}
            onChange={handleCheckboxChange}
          />
          Checkbox 2
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="checkbox3"
            checked={selectedCheckboxes["checkbox3"] || false}
            onChange={handleCheckboxChange}
          />
          Checkbox 3
        </label>
        <br />
        <button onClick={() => console.log(getCheckboxValue("checkbox1"))}>
          Get Checkbox 1 Value
        </button>
        <button onClick={() => console.log(getCheckboxValue("checkbox2"))}>
          Get Checkbox 2 Value
        </button>
        <button onClick={() => console.log(getCheckboxValue("checkbox3"))}>
          Get Checkbox 3 Value
        </button>
      </div>
    </>
  );
};
