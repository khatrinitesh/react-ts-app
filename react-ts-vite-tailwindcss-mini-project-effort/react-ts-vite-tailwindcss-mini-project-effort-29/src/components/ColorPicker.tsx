import React from 'react';
import { useColorPickerStore } from '../store/store';
import { ChromePicker } from 'react-color';

const ColorPicker = () => {

    const {color,setColor} =useColorPickerStore();

    const handleChangeComplete = (color: any) => {
        setColor(color.hex); // Updates the color in the store
      };
  return (
    <>
      <h2>Color Picker</h2>
      <div style={{ backgroundColor: color, width: '100px', height: '100px' }}></div>
      <ChromePicker color={color} onChangeComplete={handleChangeComplete} />
      <p>Selected color: {color}</p>
    </>
  );
}

export default ColorPicker;


