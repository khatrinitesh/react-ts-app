import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
    <SignUpForm/>
    </>
  )
};

export default CustomApp;

interface FormData {
  username: string;
  email: string;
  password: string;
}

const SignUpForm: React.FC = () => {
  // state to hold form data
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });
  const [submitted,setSubmitted] = useState<boolean>(false);

  const [errors,setErrors] = useState<[key:string]>({
    username: "",
    email: "",
    password: "",
  });

  // form validation function 
  const validateForm = () => {
    let valid = true;
    const newErrors = {...errors};
    // errors - username
    if(!formData.username.trim()){
        newErrors.username = 'username is required';
        valid = false;
    }
    // errors - password
    if(!formData.password.trim()){
        newErrors.password = 'password is required';
        valid = false;
    }
    // errors - email
    if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
        valid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
        valid = false;
    }

    setErrors(newErrors);
    return valid;
  }

  // handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
        // Here you can perform your signup logic, for now, just log the form data
        console.log(formData);
        // Reset form fields after submission
        setFormData({ username: '', email: '', password: '' });
        setSubmitted(true);
      }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
           {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {submitted && <p>Form submitted successfully!</p>}
    </>
  );
};
