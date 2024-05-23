import React, { useState } from "react";

const CustomApp = () => {
  return(
    <>
    <CustomSelect/>
    </>
  )
};

export default CustomApp;

interface Option {
  value: string;
  label: string;
}

const CustomSelect: React.FC<{ options: Option[] }> = ({ options }) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };
  return (
    <>
      <div className="custom-select">
        <select value={selectedValue} onChange={handleSelectChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="custom-arrow">&#9660;</span>
      </div>
    </>
  );
};
