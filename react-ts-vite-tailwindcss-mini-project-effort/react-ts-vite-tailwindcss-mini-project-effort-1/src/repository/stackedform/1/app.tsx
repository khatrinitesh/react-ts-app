import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
        <StackedForm/>
    </>
  )
}

export default CustomApp

// Define interface for form data
interface FormData {
    firstName: string;
    lastName: string;
    email: string;
  }

  const StackedForm: React.FC = () => {
    // State to manage form data
    const [formData, setFormData] = useState<FormData>({
      firstName: "",
      lastName: "",
      email: ""
    });
  
    // Event handler for input changes
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  
    // Event handler for form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log("Form submitted:", formData);
      // You can perform further actions here, such as sending data to a server
    };
  
    return (
      <div>
        <h2>Stacked Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };