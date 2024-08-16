import React, { useState } from 'react';
import DisplayComp from './DisplayComp';
import ButtonComp from './BtnComp';
import { CalculatorState } from '../types';
import { NUMBERS, OPERATORS, SPECIAL_BUTTONS } from '../constants/constants';

const CalculatorComp = () => {
    const [state, setState] = useState<CalculatorState>({
        currentValue: '0',
        previousValue: '',
        operator: null,
      });

      const handleButtonClick = (label: string) => {
        if (NUMBERS.includes(label)) {
          // Handle number input
          setState(prev => ({
            ...prev,
            currentValue: prev.currentValue === '0' ? label : prev.currentValue + label,
          }));
        } else if (OPERATORS.includes(label)) {
          // Handle operator input
          setState(prev => ({
            ...prev,
            previousValue: prev.currentValue,
            currentValue: '0',
            operator: label,
          }));
        } else if (label === 'C') {
          // Handle clear
          setState({
            currentValue: '0',
            previousValue: '',
            operator: null,
          });
        } else if (label === '=') {
          // Handle calculation
          const { previousValue, currentValue, operator } = state;
          if (previousValue && operator) {
            const result = eval(`${previousValue} ${operator} ${currentValue}`);
            setState({
              currentValue: String(result),
              previousValue: '',
              operator: null,
            });
          }
        } else if (label === '.') {
          // Handle decimal point
          if (!state.currentValue.includes('.')) {
            setState(prev => ({
              ...prev,
              currentValue: prev.currentValue + '.',
            }));
          }
        }
      };
  return (
    <>
        <div className="calculator">
        <DisplayComp value={state.currentValue} />
        <div className="buttons">
            {NUMBERS.map(num => (
            <ButtonComp key={num} label={num} onClick={handleButtonClick} />
            ))}
            {OPERATORS.map(op => (
            <ButtonComp key={op} label={op} onClick={handleButtonClick} />
            ))}
            {SPECIAL_BUTTONS.map(btn => (
            <ButtonComp key={btn} label={btn} onClick={handleButtonClick} />
            ))}
        </div>
        </div>
    </>
  )
}

export default CalculatorComp