import React,{useState} from 'react'

const EmptyInputValidation:React.FC = () => {
     // State for form inputs
  const [inputValue, setInputValue] = useState<string>('');
   // State for error messages
   const [error, setError] = useState<string | null>(null);

   // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // handle form submission
  const handleSubmit = (event:React.FormEvent) => {
    event.preventDefault();
    if(inputValue.trim() === ''){
        setError('input canot be empty')
    }
    else{
        setError(null);
        console.log('form submitted with value:',inputValue);
        
    }
  }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="inputField">Input:</label>
            <input type="text" id='inputField' value={inputValue} onChange={handleInputChange} />
            {error && <p style={{color:'red'}}>{error}</p>}
            </div>
            <button type="submit">submit</button>
        </form>
    </>
  )
}

export default EmptyInputValidation