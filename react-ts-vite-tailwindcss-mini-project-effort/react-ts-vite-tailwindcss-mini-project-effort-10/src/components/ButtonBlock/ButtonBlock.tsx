import React from 'react'
import { BUTTONS } from '../../constants/buttons';
import { ButtonData } from '../../types';

const ButtonBlock: React.FC = () => {
    return (
      <div className="flex flex-col space-y-4 p-4">
        {BUTTONS.map((button: ButtonData) => (
          <button
            key={button.id}
            onClick={button.onClick}
            className={`px-4 py-2 rounded ${button.className}`}
          >
            {button.label}
          </button>
        ))}
      </div>
    );
  };
export default ButtonBlock