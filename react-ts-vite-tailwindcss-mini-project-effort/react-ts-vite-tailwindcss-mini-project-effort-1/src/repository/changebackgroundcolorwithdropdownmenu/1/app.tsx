import React, { useState } from "react";

const CustomApp = () => {
  return (
    <div>
      <ColorChange />
    </div>
  );
};

export default CustomApp;

type Option = {
  value: string;
  label: string;
};

const ColorChange: React.FC = () => {
  const colors: Option[] = [
    { value: "white", label: "White" },
    { value: "red", label: "Red" },
    { value: "blue", label: "Blue" },
    { value: "green", label: "Green" },
  ];
  // state to store selected color
  const [selectedColor, setSelectedcolor] = useState<string>("white");

  // function to handle color change
  const handleChangeCol = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedcolor(e.target.value);
  };
  return (
    <>
      <h1>Change background color</h1>
      <select value={selectedColor} onChange={handleChangeCol}>
        {colors.map((val) => (
          <option key={val.value} value={val.value}>
            {val.label}
          </option>
        ))}
      </select>
      <div
        style={{
          width: "100%",
          height: "200px",
          backgroundColor: selectedColor,
          color:`${selectedColor !== 'white' ? 'white' : 'black'}`,
          marginTop: "20px",
        }}
      >
        {/* Display the selected color */}
        <p style={{ textAlign: "center", paddingTop: "80px" }}>
          Selected Color: {selectedColor}
        </p>
      </div>
    </>
  );
};
