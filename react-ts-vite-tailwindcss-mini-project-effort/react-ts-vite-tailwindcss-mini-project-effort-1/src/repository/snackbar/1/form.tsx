import React, { useState } from "react";
import Snackbar from "./snackbar";
import './style.css';

const FormApp: React.FC = () => {
    const [formData, setFormData] = useState<{
        username: string;
        email: string;
        password: string;
      }>({
        username: "",
        email: "",
        password: "",
      });
    
      const [formErrors, setFormErrors] = useState<{
        username: string;
        email: string;
        password: string;
      }>({
        username: "",
        email: "",
        password: "",
      });

      const [showSnackbar, setShowSnackbar] = useState(false);
    
    //   handle input change
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      //   handle submit
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
          // Perform form submission logic here
          console.log(formData);
          // Show Snackbar
          setShowSnackbar(true);
        }
      };
    
    
      // validation form
      const validateForm = () => {
        let valid = true;
        const errors = {
          username: "",
          email: "",
          password: "",
        };
        if (!formData.username) {
          errors.username = "Username is required";
          valid = false;
        }
        if (!formData.email) {
          errors.email = "Email is required";
          valid = false;
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ) {
          errors.email = "Invalid email address";
          valid = false;
        }
        if (!formData.password) {
          errors.password = "Password is required";
          valid = false;
        }
    
        setFormErrors(errors);
        return valid;
      };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            {formErrors.username && (
              <div className="error">{formErrors.username}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && (
              <div className="error">{formErrors.email}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {formErrors.password && (
              <div className="error">{formErrors.password}</div>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
        {showSnackbar && <Snackbar message="Form submitted successfully!" />}
      </div>
    </>
  );
};

export default FormApp;
