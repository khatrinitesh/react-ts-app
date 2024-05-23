import React, { useState } from "react";

const CustomApp = () => {
    const options = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  return (
    <>
    <AutoComplete options={options}/>
    </>
  )
};

export default CustomApp;

interface AutoCompleteProps {
  options: string[];
}

const AutoComplete: React.FC<AutocompleteProps> = ({ options }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleOptionClick = (value: string) => {
    setInputValue(value);
    setFilteredOptions([]);
  };
  return (
    <>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type here..."
        />
        <ul>
          {filteredOptions.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
