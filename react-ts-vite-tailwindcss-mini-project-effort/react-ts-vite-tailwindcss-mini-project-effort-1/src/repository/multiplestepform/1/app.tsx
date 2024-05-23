import React, { useState } from "react";
// import './style.css';

const CustomApp = () => {
  return (
    <>
      <MultiStepForm/>
    </>
  );
};

export default CustomApp;

interface FormData {
    name: string;
    email: string;
    password: string;
  }

  const MultiStepForm: React.FC = () => {
    const [step, setStep] = useState<number>(1);
    const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
      password: '',
    });
    const [emailError, setEmailError] = useState<string>('');
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [nameError, setNameError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      let errors = false;
  
      if (!formData.name) {
        setNameError('Name is required');
        errors = true;
      } else {
        setNameError('');
      }
  
      if (!formData.email) {
        setEmailError('Email is required');
        errors = true;
      } else if (!validateEmail(formData.email)) {
        setEmailError('Invalid email address');
        errors = true;
      } else {
        setEmailError('');
      }
  
      if (!formData.password) {
        setPasswordError('Password is required');
        errors = true;
      } else {
        setPasswordError('');
      }
  
      if (!errors) {
        // Handle form submission here, for example, sending the data to the server
        console.log('Form submitted:', formData);
        setFormSubmitted(true);
      }
    };
  
    const nextStep = () => {
      setStep((prevStep) => prevStep + 1);
    };
  
    const prevStep = () => {
      setStep((prevStep) => prevStep - 1);
    };
  
    const validateEmail = (email: string): boolean => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };
  
    const renderFormStep = () => {
      switch (step) {
        case 1:
          return (
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {nameError && <p className="text-red-500">{nameError}</p>}
              <button onClick={nextStep}>Next</button>
            </div>
          );
        case 2:
          return (
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {emailError && <p className="text-red-500">{emailError}</p>}
              <button onClick={prevStep}>Previous</button>
              <button onClick={nextStep} disabled={!formData.email || !!emailError}>
                Next
              </button>
            </div>
          );
        case 3:
          return (
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {passwordError && <p className="text-red-500">{passwordError}</p>}
              <button onClick={prevStep}>Previous</button>
              <button type="submit">Submit</button>
            </div>
          );
        default:
          return null;
      }
    };
  
    return (
      <div>
        <h1>Multi-step Form</h1>
        <form onSubmit={handleSubmit}>
          {renderFormStep()}
        </form>
        {formSubmitted && <p className="text-green-500">Form submitted successfully!</p>}
      </div>
    );
  };
  