import React, { useState } from "react";
import { AspectRatioProps } from "../interface/interface";
import { aspectRatioConstants } from "../constants/constants";

const AspectRatioComp: React.FC = () => {
  const [selectedRatio, setSelectedRatio] = useState<string>(""); // State to store selected ratio

  const handleRatioChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRatio(event.target.value);
  };
  return (
    <>
      <h2>Select Aspect Ratio:</h2>
      <select value={selectedRatio} onChange={handleRatioChange}>
        <option value="">Select an aspect ratio</option>
        {aspectRatioConstants.map((ratio: AspectRatio) => (
          <option key={ratio.name} value={ratio.ratio}>
            {ratio.name}
          </option>
        ))}
      </select>
      {selectedRatio && (
        <div
          style={{
            paddingTop: `calc(${selectedRatio} / 1 * 100%)`,
            backgroundColor: "lightgray",
          }}
        >
          Aspect ratio: {selectedRatio}
        </div>
      )}
    </>
  );
};

export default AspectRatioComp;
