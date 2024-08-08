import React, { useState } from 'react';


const App = () => {
  return (
    <>

        <h1>Alert Buttons</h1>
        <AlertButtonList buttonConfigs={alertButtonConfigs} />
    </>
  )
}

export default App

// Define a tuple type for button configuration
type AlertButtonConfig = [string, () => void]; // [label, handler]

// Define button configurations using constants
const alertButtonConfigs: AlertButtonConfig[] = [
    ['Alert Success', () => alert('Success alert!')],
    ['Alert Warning', () => alert('Warning alert!')],
    ['Alert Error', () => alert('Error alert!')],
  ];

  // Define the props for Button component
interface ButtonProps {
    label: string;
    onClick: () => void;
  }

  // Define the props for AlertButtonList component
interface AlertButtonListProps {
    buttonConfigs: AlertButtonConfig[];
  }


  const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
      <button onClick={onClick} style={{ margin: '5px' }}>
        {label}
      </button>
    );
  };

  const AlertButtonList: React.FC<AlertButtonListProps> = ({ buttonConfigs }) => {
    return (
      <div>
        {buttonConfigs.map(([label, handler], index) => (
          <Button key={index} label={label} onClick={handler} />
        ))}
      </div>
    );
  };


