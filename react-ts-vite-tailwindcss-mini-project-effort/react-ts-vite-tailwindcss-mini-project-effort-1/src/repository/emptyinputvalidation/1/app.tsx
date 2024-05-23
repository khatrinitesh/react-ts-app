import React,{useState} from 'react'

const CustomApp = () => {
  return (
    <>
        <EmptyInputValidation/>
    </>
  )
}

export default CustomApp

const EmptyInputValidation: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      if (inputValue.trim() === '') {
        setErrorMessage('Please enter a value.');
        return;
      }
  
      // Reset error message if input is not empty
      setErrorMessage('');
  
      // Perform other actions like submitting the form
    };
  
    return (
      <div>
        <h2>Empty Input Validation</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter something..."
          />
          <button type="submit">Submit</button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
      </div>
    );
  };