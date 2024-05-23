import React, { useState } from "react";

const CustomApp = () => {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
  return (
    <>
      <ColorPicker colors={colors} />
    </>
  );
};

export default CustomApp;

interface ColorPickerProps {
  colors: string[];
}

const ColorPicker: React.FC<ColorPickerProps> = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <>
    <h2>Color Picker</h2>
      <div>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              margin: '5px',
              cursor: 'pointer'
            }}
            onClick={() => handleColorSelect(color)}
          ></div>
        ))}
      </div>
      <div>
              Selected Color:{" "}
              <span style={{ color: selectedColor }}>
                {selectedColor || "None"}
              </span>
            </div>
    </>
  );
};
