import React, { useState } from 'react'
import {  AutocompleteState } from '../interface/interface'
import {  autocompleteOptions } from '../constants/constants'

const AutocompleteComp = () => {
    const [autocompleteState,setAutoCompleteState] = useState<AutocompleteState>({
        inputValue:'',
        options:[],
    });

        const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>)  => {
            const inputValue = event.target.value.toLowerCase();
            const filteredOptions = autocompleteOptions.filter((option) => option.label.toLowerCase().includes(inputValue) || option.value.toLowerCase().includes(inputValue)
        );      
        setAutoCompleteState({
            inputValue,
            options:filteredOptions
        });
    };

    const handleOptionCLick  = (selectedOption:AutoCompleteProps) => {
        setAutoCompleteState({
            inputValue:selectedOption.label,
            options:[]
        });
    }
  return (
    <>
        <input
            type="text"
            value={autocompleteState.inputValue}
            onChange={handleInputChange}
            placeholder="Type here to autocomplete..."
        />
        {autocompleteState.options.length > 0 && (
            <ul>
                {autocompleteState.options.map((option) => (
                     <li key={option.id} onClick={() => handleOptionClick(option)}>
                         {option.label}
                    </li>
                ))}
            </ul>
        )}
    </>
  )
}

export default AutocompleteComp