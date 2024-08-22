    import React, { useState, ChangeEvent, FormEvent } from 'react';

    const AlphanumericInput: React.FC = () => {
    const [value, setValue] = useState<string>('');

    // Handle input change to allow only alphanumeric characters without spaces
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        // Allow only alphanumeric characters and no spaces
        if (/^[a-zA-Z0-9]*$/.test(newValue)) {
        setValue(newValue);
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Submitted value:', value);
    };

    return (
        <form onSubmit={handleSubmit}>
        <label>
            Enter alphanumeric text (no spaces):
            <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Enter text"
            />
        </label>
        <button type="submit">Submit</button>
        </form>
    );
    };

    export default AlphanumericInput;